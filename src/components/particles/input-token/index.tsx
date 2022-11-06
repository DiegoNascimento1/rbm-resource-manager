import { useEffect, useRef, useState } from "react";
import { StyledInputPersonalized, StyledDivContainer } from "./style";

export default function DivPersonalized() {

  const [token1, setToken1] = useState("");
  const [token2, setToken2] = useState("");
  const [token3, setToken3] = useState("");
  const [token4, setToken4] = useState("");
  const [token5, setToken5] = useState("");
  const [token6, setToken6] = useState("");

  const elToken1 = useRef<HTMLInputElement | null>(null);   
  const elToken2 = useRef<HTMLInputElement | null>(null);   
  const elToken3 = useRef<HTMLInputElement | null>(null);   
  const elToken4 = useRef<HTMLInputElement | null>(null);   
  const elToken5 = useRef<HTMLInputElement | null>(null);   
  const elToken6 = useRef<HTMLInputElement | null>(null);   

  useEffect(()=>{
    const elemento1 = elToken1.current;
    elemento1?.focus();
  },[""]);

  useEffect(()=>{
    token1 && token2 && token3 && token4 && token5 && token6 && alert(token1 + token2 + token3 + token4 + token5 + token6);
  },[token1, token2, token3, token4, token5, token6]);

  //  ******* FUNÇÕES ****** //  depois melhoramos a logica
    //  ***** TOKEN 1 *****
  function fxToken1() {
    const element = elToken1.current;
    const valueEl = element?.value;
    const qtdaEl = valueEl?.length;
    
    if(qtdaEl){
      if(qtdaEl>0){
        setToken1(valueEl[0]);
        if(element) element.value= token1; 
        elToken2.current?.focus();
      }; 
    };
  };

 //  ***** TOKEN 2 *****
 function fxToken2() {
  const element = elToken2.current;
  const valueEl = element?.value;
  const qtdaEl = valueEl?.length;
  
  if(qtdaEl){
    if(qtdaEl>0){
      setToken2(valueEl[0]);
      if(element) element.value= token2;
      elToken3.current?.focus();
    }; 
  };
};

 //  ***** TOKEN 3 *****
 function fxToken3() {
  const element = elToken3.current;
  const valueEl = element?.value;
  const qtdaEl = valueEl?.length;
  
  if(qtdaEl){
    if(qtdaEl>0){
      setToken3(valueEl[0]);
      if(element) element.value= token3;
      elToken4.current?.focus();
    }; 
  };
};

 //  ***** TOKEN 4 *****
 function fxToken4() {
  const element = elToken4.current;
  const valueEl = element?.value;
  const qtdaEl = valueEl?.length;
  
  if(qtdaEl){
    if(qtdaEl>0){
      setToken4(valueEl[0]);
      if(element) element.value= token4;
      elToken5.current?.focus();
    }; 
  };
};

//  ***** TOKEN 5 *****
function fxToken5() {
  const element = elToken5.current;
  const valueEl = element?.value;
  const qtdaEl = valueEl?.length;
  
  if(qtdaEl){
    if(qtdaEl>0){
      setToken5(valueEl[0]);
      if(element) element.value= token5;
      elToken6.current?.focus();
    }; 
  };
};

//  ***** TOKEN 6 *****
function fxToken6() {
  const element = elToken6.current;
  const valueEl = element?.value;
  const qtdaEl = valueEl?.length;
  
  if(qtdaEl){
    if(qtdaEl>0){
      setToken6(valueEl[0]);
      if(element) element.value= token6;
    }; 
  };
};
  return (
    <StyledDivContainer>
     <StyledInputPersonalized ref={elToken1} placeholder="1" type={"text"} onChange={(e)=>fxToken1()} value={token1}/>
     <StyledInputPersonalized ref={elToken2} placeholder="2" type={"text"} onChange={(e)=>fxToken2()} value={token2}/>
     <StyledInputPersonalized ref={elToken3} placeholder="3" type={"text"} onChange={(e)=>fxToken3()} value={token3}/>
     <StyledInputPersonalized ref={elToken4} placeholder="4" type={"text"} onChange={(e)=>fxToken4()} value={token4}/>
     <StyledInputPersonalized ref={elToken5} placeholder="5" type={"text"} onChange={(e)=>fxToken5()} value={token5}/>
     <StyledInputPersonalized ref={elToken6} placeholder="6" type={"text"} onChange={(e)=>fxToken6()} value={token6}/>
    </StyledDivContainer>
  );
};