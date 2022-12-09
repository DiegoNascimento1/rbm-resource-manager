import { useEffect, useRef, useState } from "react";
import { StyledInputPersonalized, StyledDivContainer } from "./style";

type propsInputToken={
  confirmToken: React.Dispatch<React.SetStateAction<boolean>>;
  setCodeToken: React.Dispatch<React.SetStateAction<string>>;
  erro?: boolean;
  setErro?:React.Dispatch<React.SetStateAction<boolean>>;
  reset?: boolean;
  setReset?: React.Dispatch<React.SetStateAction<boolean>>;
}
type TkType = {
  tk1: string | null | undefined,
  tk2: string | null | undefined,
  tk3: string | null | undefined,
  tk4: string | null | undefined,
  tk5: string | null | undefined,
  tk6: string | null | undefined
}

type ErroType ={
  erro1: boolean,
  erro2: boolean,
  erro3: boolean,
  erro4: boolean,
  erro5: boolean,
  erro6: boolean,
}

export default function InputToken(props:propsInputToken) {

  const elToken1 = useRef<HTMLInputElement>(null);
  const elToken2 = useRef<HTMLInputElement>(null);
  const elToken3 = useRef<HTMLInputElement>(null);
  const elToken4 = useRef<HTMLInputElement>(null);
  const elToken5 = useRef<HTMLInputElement>(null);
  const elToken6 = useRef<HTMLInputElement>(null);

  const [token, setToken] = useState<TkType>({
    tk1: "",
    tk2: "",
    tk3: "",
    tk4: "",
    tk5: "",
    tk6: "",
  });

  const [erro, setErro] = useState<ErroType>({
    erro1: true,
    erro2: true,
    erro3: true,
    erro4: true,
    erro5: true,
    erro6: true,
  });

  const fxReset = () =>{
    setToken({...token, 
      tk1: "",
      tk2: "",
      tk3: "",
      tk4: "",
      tk5: "",
      tk6: "",
    });
    setErro({...erro,
      erro1: true,
      erro2: true,
      erro3: true,
      erro4: true,
      erro5: true,
      erro6: true,
    });
    props.erro && props.setErro && props.setErro(false);
    props.setReset && props.setReset(false);
    elToken1.current?.focus();
  };

  useEffect(() => {
    props.reset && fxReset();
  }, [props.reset]);

  useEffect(() => {
    elToken1.current?.focus();
  }, []);

  useEffect(() => {
    (token.tk1 && token.tk2 && token.tk3 && token.tk4 && token.tk5 && token.tk6) ? props.confirmToken(true) :  props.confirmToken(false);
  }, [token.tk1, token.tk2, token.tk3, token.tk4, token.tk5, token.tk6]);

  useEffect(() =>{
    token.tk1?.length === 1 ? setErro({ ...erro, erro1: false}) : setErro({ ...erro, erro1: true});
  },[token.tk1]);

  useEffect(() =>{
    token.tk2?.length === 1 ? setErro({ ...erro, erro2: false}) : setErro({ ...erro, erro2: true});
  },[token.tk2]);

  useEffect(() =>{
    token.tk3?.length === 1 ? setErro({ ...erro, erro3: false}) : setErro({ ...erro, erro3: true});
  },[token.tk3]);

  useEffect(() =>{
    token.tk4?.length === 1 ? setErro({ ...erro, erro4: false}) : setErro({ ...erro, erro4: true});
  },[token.tk4]);

  useEffect(() =>{
    token.tk5?.length === 1 ? setErro({ ...erro, erro5: false}) : setErro({ ...erro, erro5: true});
  },[token.tk5]);

  useEffect(() =>{
    token.tk6?.length === 1 ? setErro({ ...erro, erro6: false}) : setErro({ ...erro, erro6: true});
  },[token.tk6]);

  function fxToken(numberToken: number){
    switch (numberToken){
        case 1:
          elToken1.current && setToken({...token, tk1: (elToken1.current.value)[0]});
          elToken2.current?.focus();
          break;
        case 2:
          elToken2.current && setToken({...token, tk2: (elToken2.current.value)[0]});
          elToken3.current?.focus();
          break;
        case 3:
          elToken3.current && setToken({...token, tk3: (elToken3.current.value)[0]});
          elToken4.current?.focus();
          break;
        case 4:
          elToken4.current && setToken({...token, tk4: (elToken4.current.value)[0]});
          elToken5.current?.focus();
          break;
        case 5:
          elToken5.current && setToken({...token, tk5: (elToken5.current.value)[0]});
          elToken6.current?.focus();
          break;
        case 6:
          elToken6.current && setToken({...token, tk6: (elToken6.current.value)[0]});
          break;
        default:
        console.log("default")
        props.setReset && props.setReset(true);
    }
  };

  const fxErroFocus = () => {
    if(erro.erro1){
      elToken1.current?.focus();
    }else if(erro.erro2){
      elToken2.current?.focus()
    }else if(erro.erro3){
      elToken3.current?.focus()
    }else if(erro.erro4){
      elToken4.current?.focus()
    }else if(erro.erro5){
      elToken5.current?.focus()
    }else if(erro.erro6){
      elToken6.current?.focus()
    }
  };

  useEffect(() => {
    console.log("useEffect props.erro",erro);
    console.log("useEffect props dentro erro",props);
    props.erro && fxErroFocus();
  }, [props.erro]);

  useEffect(()=>{
    console.log("useEffect erro", erro)
    props.erro && fxErroFocus();
  },[erro]);

  return (
    <StyledDivContainer>
     <StyledInputPersonalized ref={elToken1} placeholder="1" type={"text"} value={token.tk1 ? token.tk1 : ""} statusError={props.erro ? erro.erro1 : false} onChange={()=>fxToken(1)}/>
     <StyledInputPersonalized ref={elToken2} placeholder="2" type={"text"} value={token.tk2 ? token.tk2 : ""} statusError={props.erro ? erro.erro2 : false} onChange={()=>fxToken(2)}/>
     <StyledInputPersonalized ref={elToken3} placeholder="3" type={"text"} value={token.tk3 ? token.tk3 : ""} statusError={props.erro ? erro.erro3 : false} onChange={()=>fxToken(3)}/>
     <StyledInputPersonalized ref={elToken4} placeholder="4" type={"text"} value={token.tk4 ? token.tk4 : ""} statusError={props.erro ? erro.erro4 : false} onChange={()=>fxToken(4)}/>
     <StyledInputPersonalized ref={elToken5} placeholder="5" type={"text"} value={token.tk5 ? token.tk5 : ""} statusError={props.erro ? erro.erro5 : false} onChange={()=>fxToken(5)}/>
     <StyledInputPersonalized ref={elToken6} placeholder="6" type={"text"} value={token.tk6 ? token.tk6 : ""} statusError={props.erro ? erro.erro6 : false} onChange={()=>fxToken(6)}/>

    </StyledDivContainer>
  );
};

//  ************************************************************************
//  anterior 08/12/22

// import { useEffect, useRef, useState } from "react";
// import { StyledInputPersonalized, StyledDivContainer } from "./style";

// type propsInputToken={
//   confirmToken: React.Dispatch<React.SetStateAction<boolean>>;
//   setCodeToken: React.Dispatch<React.SetStateAction<string>>;
//   erro?: "erro" | null;
//   reset?: boolean;
//   setReset?: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function InputToken(props:propsInputToken) {
//   const [token1, setToken1] = useState<string | undefined>("")
//   const [token2, setToken2] = useState<string | undefined>("")
//   const [token3, setToken3] = useState<string | undefined>("")
//   const [token4, setToken4] = useState<string | undefined>("")
//   const [token5, setToken5] = useState<string | undefined>("")
//   const [token6, setToken6] = useState<string | undefined>("")

//   const elToken1 = useRef<HTMLInputElement>(null)
//   const elToken2 = useRef<HTMLInputElement>(null)
//   const elToken3 = useRef<HTMLInputElement>(null)
//   const elToken4 = useRef<HTMLInputElement>(null)
//   const elToken5 = useRef<HTMLInputElement>(null)
//   const elToken6 = useRef<HTMLInputElement>(null)

//   const [erroUm, setErroUm] = useState<"erro"  | null>(null);
//   const [erroDois, setErroDois] = useState<"erro"  | null>(null);
//   const [erroTres, setErroTres] = useState<"erro"  | null>(null);
//   const [erroQuatro, setErroQuatro] = useState<"erro"  | null>(null);
//   const [erroCinco, setErroCinco] = useState<"erro"  | null>(null);
//   const [erroSeis, setErroSeis] = useState<"erro"  | null>(null);

//   useEffect(() => {
//     const ele = elToken1.current;
//     ele?.focus()
//   }, []);

//   useEffect(() => {
//     token1 && token2 && token3 && token4 && token5 && token6 && fxVerificaTokens();
//   }, [token1, token2, token3, token4, token5, token6]);

//   function fxVerificaTokens (){
//     if(token1 && token2 && token3 && token4 && token5 && token6){
//       props.setCodeToken(token1 + token2 + token3 + token4 + token5 + token6)
//       props.confirmToken(true);
//     };
//   };

//   useEffect(() => {
//     props.erro === "erro" && fxVerificaErro();
//   }, [props.erro]);

//   const fxReset = () =>{
//     setToken1("");
//     setToken2("");
//     setToken3("");
//     setToken4("");
//     setToken5("");
//     setToken6("");
//     props.setReset && props.setReset(false);
//     elToken1.current?.focus();
//   };

//   useEffect(() => {
//     props.reset && fxReset();
//   }, [props.reset]);

//   function fxVerificaErro (){
//     !(token1?.length === 1) && setErroUm("erro");
//     !(token2?.length === 1) && setErroDois("erro");
//     !(token3?.length === 1) && setErroTres("erro");
//     !(token4?.length === 1) && setErroQuatro("erro");
//     !(token5?.length === 1) && setErroCinco("erro");
//     !(token6?.length === 1) && setErroSeis("erro");
//     elToken1.current?.focus();
//   };

//   function fxToken(numberToken: number){
//     switch (numberToken){
//         case 1:
//           const element1 = elToken1 && elToken1.current;
//           setToken1(element1?.value && (element1?.value)[0]);
//           element1 && element1?.value.length < 1  && setErroUm("erro");   //  todo esse codigo é para setar o erro
//           erroUm === "erro" && element1 && element1?.value.length >0  && setErroUm(null); //  todo esse codigo é para setar o erro
//           elToken2.current?.focus();
//           break;
//         case 2:
//           const element2 = elToken2 && elToken2.current;
//           setToken2(element2?.value && (element2?.value)[0]);
//           element2 && element2?.value.length < 1  && setErroDois("erro");
//           erroDois === "erro" && element2 && element2?.value.length >0  && setErroDois(null);
//           elToken3.current?.focus()
//           break;
//         case 3:
//           const element3 = elToken3 && elToken3.current;
//           setToken3(element3?.value && (element3?.value)[0]);
//           element3 && element3?.value.length < 1  && setErroTres("erro");
//           erroTres === "erro" && element3 && element3?.value.length >0  && setErroTres(null);
//           elToken4.current?.focus();
//           break;
//         case 4:
//           const element4 = elToken4 && elToken4.current;
//           setToken4(element4?.value && (element4?.value)[0]);
//           element4 && element4?.value.length < 1  && setErroQuatro("erro");
//           erroQuatro === "erro" && element4 && element4?.value.length >0  && setErroQuatro(null);
//           elToken5.current?.focus()
//           break;
//         case 5:
//           const element5 = elToken5 && elToken5.current;
//           setToken5(element5?.value && (element5?.value)[0]);
//           element5 && element5?.value.length < 1  && setErroCinco("erro");
//           erroCinco === "erro" && element5 && element5?.value.length >0  && setErroCinco(null);
//           elToken6.current?.focus();
//           break;
//         case 6:
//           const element6 = elToken6 && elToken6.current;
//           setToken6(element6?.value && (element6?.value)[0]);
//           element6 && element6?.value.length < 1  && setErroSeis("erro");
//           erroSeis === "erro" && element6 && element6?.value.length >0  && setErroSeis(null);
//           break;
//       // case default:

//     }
//   };

//   return (
//     <StyledDivContainer>
//      <StyledInputPersonalized ref={elToken1} placeholder="1" type={"text"} value={token1} statusError={erroUm} onChange={()=>fxToken(1)}/>
//      <StyledInputPersonalized ref={elToken2} placeholder="2" type={"text"} value={token2} statusError={erroDois} onChange={()=>fxToken(2)}/>
//      <StyledInputPersonalized ref={elToken3} placeholder="3" type={"text"} value={token3} statusError={erroTres} onChange={()=>fxToken(3)}/>
//      <StyledInputPersonalized ref={elToken4} placeholder="4" type={"text"} value={token4} statusError={erroQuatro} onChange={()=>fxToken(4)}/>
//      <StyledInputPersonalized ref={elToken5} placeholder="5" type={"text"} value={token5} statusError={erroCinco} onChange={()=>fxToken(5)}/>
//      <StyledInputPersonalized ref={elToken6} placeholder="6" type={"text"} value={token6} statusError={erroSeis} onChange={()=>fxToken(6)}/>

//     </StyledDivContainer>
//   );
// };