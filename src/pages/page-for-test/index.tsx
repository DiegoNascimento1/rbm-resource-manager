import ExemploUseReducer from "components/molecules/exemplo-usereducer";
import EemploUseRefImperative from "components/molecules/exemplo-useref-impertive";
import { useAuth } from "contexts/auth-context";
import { DivContainer } from "./style";


export default function MateusTestPage() {
  

  return (
    <DivContainer>
      {/* <ExemploUseReducer/> */}
      <EemploUseRefImperative/>
    
    </DivContainer>
  )

}
