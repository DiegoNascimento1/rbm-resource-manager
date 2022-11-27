import { useReducer } from "react";

type RequestQuery = (...args: any) => Promise<any>;

type StateQueryType = {
    error: { [key: string]: any };
    result: { [key: string]: any };
    loading: { [key: string]: boolean };
};

enum ACTION_TYPES {
    START_REQUEST = "START_REQUEST",
    FINISH_REQUEST = "FINISH_REQUEST",
};

type ActionType={
    key: string;
    type: ACTION_TYPES;
    payload?: {
        loading?: boolean;
        result?: any;
        error?: any;        
    };
};

const initialValues:StateQueryType = {
    loading: {} as StateQueryType["loading"],
    result: {} as StateQueryType["result"],
    error: {} as StateQueryType["error"],
};

export default function useQuery():[StateQueryType, (requestQueryFx:RequestQuery, key: string, paramsQuery:{ [key: string | number]: any}) => Promise<void>]{

    const fxQueryReduce = (stateQuery: StateQueryType, action:ActionType): StateQueryType =>{
 
        switch (action.type){

            case "START_REQUEST":
                return {
                    ...stateQuery,
                    loading: { ...stateQuery.loading ,[action.key]: true},
                    result: {...stateQuery.result ,[action.key]: undefined},
                    error: {...stateQuery.error ,[action.key]: undefined},
                };
            case "FINISH_REQUEST":
                return {
                    ...stateQuery,
                    loading: {...stateQuery.loading ,[action.key]: false},
                    result: {...stateQuery.result ,[action.key]: action.payload?.result},
                    error: {...stateQuery.error ,[action.key]: action.payload?.error},
                };
            default:
                throw new Error();
        }
    };
    
    const [stateQuery, dispatchQuery] = useReducer(fxQueryReduce, initialValues);

    async function fxRequestQuery(requestQueryFx:RequestQuery, key: string, paramsQuery:{ [key: string | number]: any}) {
        try{

            const result = await requestQueryFx({...paramsQuery});

            dispatchQuery({
                type: ACTION_TYPES.FINISH_REQUEST,
                key,
                payload: { result: result }
            });
        }catch(e: any){
            dispatchQuery({
                type: ACTION_TYPES.FINISH_REQUEST,
                key,
                payload: {error: e.response.data},
            });

            throw { ...e.response.data, status: e.toJSON().status};
        }
    }
    
    return [stateQuery, fxRequestQuery];
};