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

type ErroStatus = {
  inputUm:"erro" | null ;
  inputDois:"erro" | null ;
};

type ErroStatusType =  "erro" | null;

type InputSelectNumber = 1 | 2 ;

export default function PasswordMaster() {

  const[loginInput,setLogin] = useState("");
  const[senhaInput,setSenha] = useState("");
  const{login}  = useAuth();
  const [erroStatus, setErroStatus] =useState<ErroStatus>({
    inputUm:null,
    inputDois:null,
  });

  const contextoLogin = useContext(contextLogin);

  const fxLogin = contextoLogin.funcoes?.setState;

  const validatedPassword = ( senhaInput.length >=8)
          && ( fxRegexValidateUppercase(senhaInput))
          && ( fxRegexValidateNumber(senhaInput))
          && ( fxRegexValidateSpecialCharacters(senhaInput))
    ;
    
  const fxErrorInput = (error: ErroStatusType, inputSelect: InputSelectNumber)=>{
    switch(inputSelect) {
      case 1:
        setErroStatus({...erroStatus, inputUm: error});
        break;
      case 2:
        setErroStatus({...erroStatus, inputDois: error});
        break;
      default:
        setErroStatus({inputUm: null, inputDois: null});
    };
 };

 const fxErroValidarLogin = (validatedLogin: boolean)=>{
  if(!validatedLogin){
    alert("Digite um login válido");
    setLogin("");
    setSenha("");
    fxErrorInput("erro", 1);  };
};
    
 const fxErroValidarPassword = (validatedPassword: boolean)=>{
  if (!validatedPassword) { 
    setSenha("")
    fxErrorInput("erro", 2);
    alert("Senha não preenche os requesitos necessários!");
  }
};

const fxExecutaRecorverPassword = (validatedLogin: boolean, validatedPassword: boolean)=>{
  if(validatedLogin && validatedPassword){
    alert("fazer a conecção");
    login(loginInput,senhaInput); //conecção provisoria
  };
};

  function handleLogin() {
    const validatedLogin = loginInput.length >=6;
    const validateSenha = senhaInput.length >=8 && fxRegexValidateNumber(senhaInput) && fxRegexValidateUppercase(senhaInput) && fxRegexValidateSpecialCharacters(senhaInput);
    !validatedLogin && fxErroValidarLogin(validatedLogin);
    validatedLogin &&!validateSenha && fxErroValidarPassword(validateSenha);
    validatedLogin && validateSenha && fxExecutaRecorverPassword(validatedLogin,validatedPassword);
  };

  function ativar(){
    fxLogin?.setChangeRecoverPassword(true);
    fxLogin?.setChangeActiveAccount(true);
  };

  useEffect(()=>{
    // loginContext.dadosData?.fx.fxTrocarNome('Trocado por objeto contruido');
  },[]);

  useEffect(()=>{
    loginInput.length>1 && fxErrorInput(null,1);
    loginInput.length === 0 && fxErrorInput(null,2);
 },[loginInput]);
 
 useEffect(()=>{
   senhaInput.length>1 && fxErrorInput(null,2);
},[senhaInput]);

  return (
    <>
      <LogoSvg/>
      <Spacing marginTop={"54px"}/>
      <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>Entrar na minha conta</Typography>
      <Spacing marginTop={"10px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Acesse sua conta abaixo =)</Typography>
      <Spacing marginTop={"32px"}/>
      <InputContainer setInput={setLogin} placeholder={"email@rbmweb.com.br"} labelName={"E-mail"} password={false} elementFocus={true} statusError={erroStatus.inputUm} value={loginInput}/>
      <InputContainer setInput={setSenha} placeholder={"Digite sua senha"} labelName={"Senha"} password={true} statusError={erroStatus.inputDois} value={senhaInput}/>
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