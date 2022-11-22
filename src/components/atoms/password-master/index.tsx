import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import LoginChecked from "components/atoms/login-checked-link";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "contexts/auth-context";
import { fxRegexValidateUppercase, fxRegexValidateSpecialCharacters, fxRegexValidateNumber, fxRegexValidateEmail} from "functions/regex-validate";
import { contextLogin } from "contexts/login-context";


export default function PasswordMaster() {

  const[loginInput,setLogin] = useState("");
  const[senhaInput,setSenha] = useState("");
  const{login}  = useAuth();

  const contextoLogin = useContext(contextLogin);

  const fxLogin = contextoLogin.funcoes?.setState;

  function handleLogin() {
    const validatedEmail = loginInput.length >=6;
    const validateSenha = senhaInput.length >=8 && fxRegexValidateNumber(senhaInput) && fxRegexValidateUppercase(senhaInput) && fxRegexValidateSpecialCharacters(senhaInput);
    // const validatedEmail = fxRegexValidateEmail(loginInput);

    !validatedEmail && alert("Email errado");
    !validateSenha && alert("Senha fora do padrão")
    validatedEmail && validateSenha && login(loginInput,senhaInput);
    // validateSenha && login(loginInput,senhaInput);
  }

  function ativar(){
    fxLogin?.setChangeRecoverPassword(true);
    fxLogin?.setChangeActiveAccount(true);
  };

  useEffect(()=>{
    // loginContext.dadosData?.fx.fxTrocarNome('Trocado por objeto contruido');
  },[]);

  return (
    <>
      <LogoSvg/>
      <Spacing marginTop={"54px"}/>
      <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>Entrar na minha conta</Typography>
      <Spacing marginTop={"10px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Acesse sua conta abaixo =)</Typography>
      <Spacing marginTop={"32px"}/>
      <InputContainer setInput={setLogin} placeholder={"email@rbmweb.com.br"} labelName={"E-mail"} password={false} elementFocus={true}/>
      <InputContainer setInput={setSenha} placeholder={"Digite sua senha"} labelName={"Senha"} password={true}/>
      <LoginChecked textoLabel={"Salvar login"} textoLink={"Esqueci a senha"} />
      <ButtonParticle light text={'ENTRAR'} onClick={()=>handleLogin()}/>
      <Spacing marginTop={"32px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'underline'} fontWeight={"400"}>
        Primeiro acesso? 
        <a href="#" style={{fontWeight:"600",color:"black"}} onClick={()=>ativar()}>Ative sua conta.</a>
        </Typography>
      <Spacing marginTop={"32px"}/>
    </>
  );
};