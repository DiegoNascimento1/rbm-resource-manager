import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import sucessSvg from "../../../assets/svgs/sucess-recovery.svg";
import { StyledDivContainer } from "./style";
import {THEME} from "contants";
import { useContext } from "react";
import { contextLogin } from "contexts/login-context";

export default function PasswordFinalized(){

    const contextoLogin = useContext(contextLogin);

    const dadosLogin = contextoLogin.funcoes?.dados;
    const fxLogin = contextoLogin.funcoes?.setState;

    const resetLogin = ()=>{
        fxLogin?.setChangeFinalizedPassword(false);
        fxLogin?.setChangeActiveAccount(false);
        fxLogin?.setChangeNewPassword(false);
        fxLogin?.setChangeRecoverToken(false);
        fxLogin?.setChangeRecoverPassword(false);
    };
    
    function handleLogin(){
        alert("Fazer Login");
        resetLogin();
        // fxLogin?.setChangeFinalizedPassword(false);
        // fxLogin?.setChangeActiveAccount(false);
        // fxLogin?.setChangeNewPassword(false);
        // fxLogin?.setChangeRecoverToken(false);
        // fxLogin?.setChangeRecoverPassword(false);
    }

    return (
    <StyledDivContainer>
        <LogoSvg />
        <Spacing marginTop={"104px"}/>
        <img src={sucessSvg}/>
        <Spacing marginTop={"29px"}/>
        <Typography tag="h1" size="20px" fontWeight="700" color={THEME.light.colors.secondary3} margin="0">{dadosLogin?.activeAccount? "Conta ativada!":"Senha alterada!"}</Typography>
        <Spacing marginTop={"29px"}/>
        <Typography tag="h1" size="14px" fontWeight="400" color={THEME.light.colors.secondary3} margin="0">{dadosLogin?.activeAccount? "Sua conta foi ativada. Faça Login e":"Senha alterada com sucesso."}</Typography>
        <Spacing marginTop={"5px"}/>
        <Typography tag="h1" size="14px" fontWeight="400" color={THEME.light.colors.secondary3} margin="0">{dadosLogin?.activeAccount? "acesse sua conta.":"Faça login e acesse sua conta."}</Typography>
        <Spacing marginTop={"100px"}/>
        <ButtonParticle light text="FAZER LOGIN" onClick={()=>handleLogin()}/>
    </StyledDivContainer>)
}