// ******************************************************
//  ********** deu certo
//  ********** sem o useImperativeHandle


import InputContainer from "components/atoms/input-container";
import InputContainerForwardRef from "components/atoms/input-container-forwardref";
import {  useEffect, useRef, useState } from "react";
import InputPersonalizado from "./Input_personalizado";
import { ButoonPersonalisado, DivContainer,  LabelInput,  TextoH2 } from "./style";

export default function EemploUseRefImperative (){

    const elementInputUm = useRef<HTMLInputElement | null>(null);
    const elementInputDois = useRef<HTMLInputElement | null>(null);
    const elementComponente = useRef<HTMLInputElement | null>(null);
    const [texto,setTexto] = useState<string>("");
    const [textoDois,setTextoDois] = useState<string>("");
    const [textoComponente, setTextoComponente] = useState<string>("");

    function fxFocus(){elementInputUm.current?.focus()};
    function fxCopia(){setTexto(elementInputUm.current ? elementInputUm.current.value : "erroooo")};
    function fxResetValor(){if(elementInputUm.current) elementInputUm.current.value = ""};
    function fxResetState(){setTexto("")};

    function fxFocusDois(){elementInputDois.current?.focus()};
    function fxCopiaDois(){setTextoDois(elementInputDois.current ? elementInputDois.current.value : "erroooo")};
    function fxResetValorDois(){if(elementInputDois.current) elementInputDois.current.value = ""};
    function fxResetStateDois(){setTextoDois("")};

    const fxFocusComponente = () => {alert("Focus");
                                    elementComponente.current?.focus();    
                                };
    const fxCopiaComponente = () => {alert("Copia");
                                    setTextoComponente(elementComponente.current ? elementComponente.current.value : "erroooo");
                                };
    const fxResetValorComponente = () => {alert("Reset Valor")
                                    if(elementComponente.current) elementComponente.current.value = ""
                                };
    const fxResetStateComponente = () => {alert("Reset State");
                                    setTextoComponente("");
                                };

    useEffect(()=>{
        elementComponente.current?.focus();
    },[])

    return (
        <DivContainer>          
            <TextoH2>compenente criado fora do arquivo</TextoH2>
            <LabelInput>Input 1</LabelInput>
            <InputPersonalizado type="text" placeholder="Digite aqui" ref={elementInputUm} />
            <ButoonPersonalisado onClick={()=>fxFocus()}>Focus</ButoonPersonalisado>
            <ButoonPersonalisado onClick={()=>fxCopia()}>Copia</ButoonPersonalisado>   
            <ButoonPersonalisado onClick={()=>fxResetValor()}>Reset Valor</ButoonPersonalisado>   
            <ButoonPersonalisado onClick={()=>fxResetState()}>Reset State</ButoonPersonalisado> 
            <TextoH2>{texto}</TextoH2>    
            <hr/>
            
            <LabelInput>Input 2</LabelInput>
            <InputPersonalizado type="text" placeholder="Digite aqui" ref={elementInputDois} />  
            <ButoonPersonalisado onClick={()=>fxFocusDois()}>Focus</ButoonPersonalisado>
            <ButoonPersonalisado onClick={()=>fxCopiaDois()}>Copia</ButoonPersonalisado>   
            <ButoonPersonalisado onClick={()=>fxResetValorDois()}>Reset Valor</ButoonPersonalisado>   
            <ButoonPersonalisado onClick={()=>fxResetStateDois()}>Reset State</ButoonPersonalisado>  
            <TextoH2>{textoDois}</TextoH2>   

            <hr/>
            <TextoH2>Componente utilizado no app</TextoH2>
            <LabelInput>Componente InputContainer</LabelInput>
            {/* <InputContainer setInput={setTextoComponente} placeholder={"Digite o valor"} labelName={"Valor Componente"} elementFocus={true}/> */}
            <InputContainerForwardRef setInput={setTextoComponente} placeholder={"Digite o valor"} labelName={"Valor Componente"} elementFocus={true} ref={elementComponente} value={textoComponente} />
            <ButoonPersonalisado onClick={()=>fxFocusComponente()}>Focus</ButoonPersonalisado>
            <ButoonPersonalisado onClick={()=>fxCopiaComponente()}>Copia</ButoonPersonalisado>   
            <ButoonPersonalisado onClick={()=>fxResetValorComponente()}>Reset Valor</ButoonPersonalisado>   
            <ButoonPersonalisado onClick={()=>fxResetStateComponente()}>Reset State</ButoonPersonalisado> 
            <TextoH2>{textoComponente}</TextoH2>  
        </DivContainer>
    )
};



// ******************************************************
// import { useEffect, useRef, useState } from "react";
// import InputPersonalizado from "./Input_personalizado";
// import { ButoonPersonalisado, DivContainer, InputPersolanizada, LabelInput, Spacin, TextoH1, TextoH2 } from "./style";


// export default function EemploUseRefImperative (){
//     const inputUmRef = useRef<HTMLInputElement | null>(null);
//     const inputDoisRef = useRef<HTMLInputElement | null>(null);

//     const inputUmRefDois = useRef<HTMLInputElement | null>(null);
//     const inputDoisRefDois = useRef<HTMLInputElement | null>(null);

    
//     useEffect(()=>{
//         inputDoisRef.current?.focus();
//     },[]);

//     function clicouUm(){
//         alert(inputUmRef.current?.value);
//         inputUmRef.current?.focus();
//     };

//     function clicouDois(){
//         alert(inputDoisRef.current?.value);
//         inputDoisRef.current?.focus();
//     };

//     function clicouUmDois(){
//         alert("1.2");
//         console.log(inputUmRefDois.current);
//     };

//     function clicouDoisDois(){
//         alert("2.2");
//     };
    
//     const [clicou, setClicou] = useState<boolean>(false);

//     function fxClicou (){
//         setClicou(true);
//     };

//     return (
//         <DivContainer>
//             <TextoH1>entrando no useRfe Imperative</TextoH1>
//             <TextoH2>compente criado dentro do mesmo arquivo</TextoH2>
//             <LabelInput>Input 1</LabelInput>
//             <InputPersolanizada ref={inputUmRef} type={"text"} placeholder={"Digite aqui 1"}/>
//             <LabelInput>Input 2</LabelInput>
//             <InputPersolanizada ref={inputDoisRef} type={"text"} placeholder={"Digite aqui 2"}/>
//             <ButoonPersonalisado onClick={()=>clicouUm()}>Imput 1</ButoonPersonalisado>
//             <ButoonPersonalisado onClick={()=>clicouDois()}>Imput 2</ButoonPersonalisado>
            
//             <Spacin/>
            
//             <TextoH2>compente criado fora do arquivo</TextoH2>
//             <LabelInput>Input 1</LabelInput>
//             <InputPersonalizado type="text" placeholder="Digite aqui 1.2" ref={inputUmRefDois} />
//             <LabelInput>Input 2</LabelInput>
//             <InputPersonalizado type="text" placeholder="Digite aqui 2.2" clicou={clicou} ref={inputDoisRefDois}/>
//             <ButoonPersonalisado onClick={()=>clicouUmDois()}>Imput 1.2</ButoonPersonalisado>
//             <ButoonPersonalisado onClick={()=>clicouDoisDois()}>Imput 2.2</ButoonPersonalisado>
            
//         </DivContainer>
//     )
// };