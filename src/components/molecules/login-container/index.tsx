import {StyleLoginContainer} from "./style";
import { useEffect } from "react";
import PassawordToken from "components/atoms/password-token";
import PasswordMaster from "components/atoms/password-master";
import PassawordRecover from "components/atoms/password-recover";
import PasswordNew from "components/atoms/password-new";
import PasswordFinalized from "components/atoms/password-finalized";
import { contextLogin } from "../../../contexts/login-context";
import { useContext } from "react";

export default function LoginContainer() {

  const contextoLogin = useContext(contextLogin);

	const dadosLogin = contextoLogin.funcoes?.dados;

  useEffect(()=>{
    console.log(contextoLogin.funcoes)
  })

  return (
      <StyleLoginContainer>   
        
        {((!dadosLogin?.recoverPassword) && (!dadosLogin?.recoverToken) && (!dadosLogin?.newPassword) && (!dadosLogin?.finalizedPassword))  && <PasswordMaster/>}
        {((dadosLogin?.recoverPassword) && (!dadosLogin?.recoverToken) && (!dadosLogin?.newPassword) && (!dadosLogin?.finalizedPassword)) && <PassawordRecover />}
        {((dadosLogin?.recoverPassword) && (dadosLogin?.recoverToken) && (!dadosLogin?.newPassword) && (!dadosLogin?.finalizedPassword)) && <PassawordToken />}
        {((dadosLogin?.recoverPassword) && (dadosLogin?.recoverToken) && (dadosLogin?.newPassword) && (!dadosLogin?.finalizedPassword)) && <PasswordNew/>}
        {((dadosLogin?.recoverPassword) && (dadosLogin?.recoverToken) && (dadosLogin?.newPassword) && (dadosLogin?.finalizedPassword)) && <PasswordFinalized />}
        
      </StyleLoginContainer>
  );
};