import { StyleLoginContainer } from "./login-container-style";
import { useState } from "react";
import PassawordToken from "components/atoms/password-token";
import PasswordMaster from "components/atoms/password-master";
import PassawordRecover from "components/atoms/password-recover";

export default function LoginContainer() {
  const[recuperarSenha, setRecuperarSenha]= useState<boolean>(false);
  const[recuperarToken, setRecuperarToken]= useState<boolean>(false);

  return (
    <StyleLoginContainer>
      {((!recuperarToken)&&(!recuperarSenha))&& 
        <PasswordMaster recoverpassword={recuperarSenha} setrecoverPassword={setRecuperarSenha}/>
      }

      {((!recuperarToken)&&(recuperarSenha))&& 
        <PassawordRecover recoverToken={recuperarToken} setRecoverToken={setRecuperarToken}/>
      }

      {((recuperarToken)&&(recuperarSenha))&& 
        <PassawordToken/>
      } 
    </StyleLoginContainer>
  );
};