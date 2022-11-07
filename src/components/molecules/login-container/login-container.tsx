import {StyleLoginContainer} from "./login-container-style";
import { useState } from "react";
import PassawordToken from "components/atoms/password-token";
import PasswordMaster from "components/atoms/password-master";
import PassawordRecover from "components/atoms/password-recover";
import PasswordNew from "components/atoms/password-new";
import PasswordFinalized from "components/atoms/password-finalized";

export default function LoginContainer() {
  const[recuperarSenha, setRecuperarSenha]= useState<boolean>(false);
  const[recuperarToken, setRecuperarToken]= useState<boolean>(false);
  const[novaSenha, setNovaSenha]= useState<boolean>(false);
  const[finalizarSenha, setFinalizarSenha]= useState<boolean>(false);

  return (
    <StyleLoginContainer>
      {((!recuperarToken)&&(!recuperarSenha)&&(!novaSenha)&&(!finalizarSenha))&& 
        <PasswordMaster recoverPassword={recuperarSenha} setRecoverPassword={setRecuperarSenha}/>
      }

      {((!recuperarToken)&&(recuperarSenha)&&(!novaSenha)&&(!finalizarSenha))&& 
        <PassawordRecover recoverToken={recuperarToken} setRecoverToken={setRecuperarToken}/>
      }

      {((recuperarToken)&&(recuperarSenha)&&(!novaSenha)&&(!finalizarSenha))&& 
        <PassawordToken newPassword={novaSenha} setNewPassword={setNovaSenha}/>
      }

      {((recuperarToken)&&(recuperarSenha)&&(novaSenha)&&(!finalizarSenha))&& 
        <PasswordNew finalizedPassword={finalizarSenha} setFinalizedPassword={setFinalizarSenha}/>
      }

      {((recuperarToken)&&(recuperarSenha)&&(novaSenha)&&(finalizarSenha))&& 
        <PasswordFinalized 
            setRecoverPassword={setRecuperarSenha}
            setRecoverToken={setRecuperarToken}
            setNewPassword={setNovaSenha}
            setFinalizedPassword={setFinalizarSenha}
        />
      }
    </StyleLoginContainer>
  );
};