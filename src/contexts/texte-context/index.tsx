import { createContext, ReactNode, useCallback, useState } from "react";

type ContextLoginEnterProps = {
    usuario: string;
    logout: () => void;
    alterarNome: React.Dispatch<React.SetStateAction<string>>;
    trocarNome: (novoNome: string) => void;
    objLogin?: ObjContextLoginEnterProps;
};

type ChildrenPros = {
    children: ReactNode;
};

type ObjContextLoginEnterProps = {
    usuario: string;
    logout: () => void;
    alterarNome: React.Dispatch<React.SetStateAction<string>>;
    trocarNome: (novoNome: string) => void;
};

export const contextLoginEnter = createContext<ContextLoginEnterProps>({} as ContextLoginEnterProps);

export default function LoginProvider ({children}:ChildrenPros){

    const [nome, setNome] = useState<string>('Nome default');

    const HandleLogout = useCallback(() =>{
        console.log('logout: Função passada por provider');
    },[]);

    const fxTrocarNome = (novoNome: string) =>{
        setNome(novoNome);
    }

    const loginObjeto:ObjContextLoginEnterProps = {
        usuario: nome, 
        logout: HandleLogout, 
        alterarNome: setNome, 
        trocarNome: fxTrocarNome
    };

    return <>
        <contextLoginEnter.Provider value={{
                usuario: nome, 
                logout: HandleLogout, 
                alterarNome: setNome, 
                trocarNome: fxTrocarNome,
                objLogin: loginObjeto
            }}>{children}</contextLoginEnter.Provider>
    </>
};