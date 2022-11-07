import { useEffect, useRef, useState } from "react";
import { StyledInputPersonalized, StyledDivContainer } from "./style";

export default function InputToken() {
  const [token1, setToken1] = useState<string | undefined>("")
  const [token2, setToken2] = useState<string | undefined>("")
  const [token3, setToken3] = useState<string | undefined>("")
  const [token4, setToken4] = useState<string | undefined>("")
  const [token5, setToken5] = useState<string | undefined>("")
  const [token6, setToken6] = useState<string | undefined>("")

  const elToken1 = useRef<HTMLInputElement>(null)
  const elToken2 = useRef<HTMLInputElement>(null)
  const elToken3 = useRef<HTMLInputElement>(null)
  const elToken4 = useRef<HTMLInputElement>(null)
  const elToken5 = useRef<HTMLInputElement>(null)
  const elToken6 = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const ele = elToken1.current;
    ele?.focus()
  }, []);

  useEffect(() => {
    token1 && token2 && token3 && token4 && token5 && token6 && alert(token1 + token2 + token3 + token4 + token5 + token6)
  }, [token1, token2, token3, token4, token5, token6]);

  function fxToken1(){
    const ele = elToken1.current;
    setToken1(ele?.value && (ele?.value)[0])
    elToken2.current?.focus()
  }

  function fxToken2(){
    const ele = elToken2.current;
    setToken2(ele?.value && (ele?.value)[0])
    elToken3.current?.focus()
  }

  function fxToken3(){
    const ele = elToken3.current;
    setToken3(ele?.value && (ele?.value)[0])
    elToken4.current?.focus()
  }

  function fxToken4(){
    const ele = elToken4.current;
    setToken4(ele?.value && (ele?.value)[0])
    elToken5.current?.focus()
  }

  function fxToken5(){
    const ele = elToken5.current;
    setToken5(ele?.value && (ele?.value)[0])
    elToken6.current?.focus()
  }

  function fxToken6(){
    const ele = elToken6.current;
    setToken6(ele?.value && (ele?.value)[0])
  }

  return (
    <StyledDivContainer>
     <StyledInputPersonalized ref={elToken1} placeholder="1" type={"text"} value={token1} onChange={()=>fxToken1()}/>
     <StyledInputPersonalized ref={elToken2} placeholder="2" type={"text"} value={token2} onChange={()=>fxToken2()}/>
     <StyledInputPersonalized ref={elToken3} placeholder="3" type={"text"} value={token3} onChange={()=>fxToken3()}/>
     <StyledInputPersonalized ref={elToken4} placeholder="4" type={"text"} value={token4} onChange={()=>fxToken4()}/>
     <StyledInputPersonalized ref={elToken5} placeholder="5" type={"text"} value={token5} onChange={()=>fxToken5()}/>
     <StyledInputPersonalized ref={elToken6} placeholder="6" type={"text"} value={token6} onChange={()=>fxToken6()}/>

    </StyledDivContainer>
  );
};