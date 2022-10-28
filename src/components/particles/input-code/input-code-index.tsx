import { StyledDivInputCode, StyledInputCode } from "./input-code-style";

export default function CodeInput(){
    
    return (
        <StyledDivInputCode>
            <StyledInputCode placeholder="0" value='1'/>
            <StyledInputCode placeholder="0" value='2'/>
            <StyledInputCode placeholder="0" value='3'/>
            <StyledInputCode placeholder="0" value='4'/>
            <StyledInputCode placeholder="0" value='5'/>
            <StyledInputCode placeholder="0" value='6'/>
        </StyledDivInputCode>
      );
}