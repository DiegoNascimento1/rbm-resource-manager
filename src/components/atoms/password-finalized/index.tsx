import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import sucessSvg from "../../../assets/svgs/sucess-recovery.svg";
import { StyledDivContainer } from "./style";
import {THEME} from "contants";

type PropsPasswordFinalized= {
    setRecoverPassword: React.Dispatch<React.SetStateAction<boolean>>;
    setRecoverToken: React.Dispatch<React.SetStateAction<boolean>>;
    setNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
    setFinalizedPassword: React.Dispatch<React.SetStateAction<boolean>>;    
    setActivateAccount: React.Dispatch<React.SetStateAction<boolean>>;
    activate: true | false;
}

export default function PasswordFinalized(props:PropsPasswordFinalized){
    
    function handleLogin(){
        alert("Fazer Login");
        props.setFinalizedPassword(false)
        props.setRecoverPassword(false)
        props.setRecoverToken(false)
        props.setNewPassword (false)
        props.setActivateAccount(false)
    }

    return (
    <StyledDivContainer>
        <LogoSvg />
        <Spacing marginTop={"104px"}/>
        <img src={sucessSvg}/>
        <Spacing marginTop={"29px"}/>
        <Typography tag="h1" size="20px" fontWeight="700" color={THEME.light.colors.secondary3} margin="0">{props.activate? "Conta ativada!":"Senha alterada!"}</Typography>
        <Spacing marginTop={"29px"}/>
        <Typography tag="h1" size="14px" fontWeight="400" color={THEME.light.colors.secondary3} margin="0">{props.activate? "Sua conta foi ativada. Faça Login e":"Senha alterada com sucesso."}</Typography>
        <Spacing marginTop={"5px"}/>
        <Typography tag="h1" size="14px" fontWeight="400" color={THEME.light.colors.secondary3} margin="0">{props.activate? "acesse sua conta.":"Faça login e acesse sua conta."}</Typography>
        <Spacing marginTop={"100px"}/>
        <ButtonParticle light text="FAZER LOGIN" onClick={()=>handleLogin()}/>
    </StyledDivContainer>)
}