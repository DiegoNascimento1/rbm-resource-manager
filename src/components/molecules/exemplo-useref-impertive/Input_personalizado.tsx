
//  ***********************************************************
//  ***********   funcionou sem useImpertiveHandle  ***********

import { forwardRef, useState } from "react";
import { InputPersolanizada } from "./style";

type InputPersonalizadoProps = {
    type?: "text";
    placeholder?: string;
    clicou?: boolean;
};

const InputPersonalizado =  forwardRef((props: InputPersonalizadoProps, ref: any) => {
    const [count, setCount] = useState<number>(0);
    
    const increment = () => setCount(count + 1);

    function mesagemDentroComponente(){
        console.log("dentro do componente interno")
        increment();
        console.log(ref.current.value);
    };

    return(
    <>
        <InputPersolanizada ref={ref} type={props.type} placeholder={props.placeholder} onChange={()=>mesagemDentroComponente()} ></InputPersolanizada>
        <h1>{count}</h1>
    </>
    )
});

export default InputPersonalizado;

//  ***********************************************************

// import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
// import { InputPersolanizada } from "./style";

// type InputPersonalizadoProps = {
//     // ref?: string;
//     type?: "text";
//     placeholder?: string;
//     mensagem?: string;
//     clicou?: boolean;
// }

// type RefType = {
//     // increment:() => void,
//     mensagem:() => void,
// };

// const InputPersonalizado =  forwardRef((props: InputPersonalizadoProps, ref: any) => {
//     const InputElement = useRef<HTMLInputElement | null >(null);
//     const [count, setCount] = useState<number>(0);
    

//     useImperativeHandle(ref, () => ({
//         // incrementar: () => setCount(count + 1),
//         increment,
//         // mensagem: () => alert(count),
//     }))

//     function mesagemDentroComponenteProps(){
//         alert("dentro do compnente props clicou")
//     };

//     function mesagemDentroComponente(){
//         console.log("dentro do componente interno", InputElement.current?.value)
//         increment();
//         console.log("ref",ref);
//     };
//     const increment = () => setCount(count + 1);

//     useEffect(()=>{
//         props.clicou && mesagemDentroComponenteProps();
//     },[props]);

//     return(<>
//         <InputPersolanizada ref={ref} type={props.type} placeholder={props.placeholder} onChange={()=>mesagemDentroComponente()} ></InputPersolanizada>
//         <h1>{count}</h1>
//         </>
//     )
// });

// // export default forwardRef(InputPersonalizado);
// export default InputPersonalizado;