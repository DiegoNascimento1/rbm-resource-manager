import { CircleAndText } from "components/particles/circle-and-text";
import DivAreaIten from "components/particles/div-area-iten";
import IconAndText from "components/particles/icon-and-text";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import useTheme from "hooks/useTheme";
import { useState } from "react";
import { DivMenuIten, DivMenuItenFinal } from "./style";


export default function DashbordMenu (){
    const [ quantItens, setQuantItens ] = useState<number | null>(null);
    const { theme } = useTheme();
    
    return (
     <>
     <DivAreaIten objAreaIten={{areaTitle:"Menu", colorBackground:theme.colors.background_dashboard, sizeBorder:"0px"}}>

        <Spacing marginTop={"22px"}/>
        <LogoSvg/>
        <Spacing marginTop="30px"/>

        <DivMenuIten onClick={()=>alert("Inicio")}> 
            <IconAndText chooseType="ICON + TEXTO" iconName="SvgIncioDeselecionado" alignComponents="Left" gapBetweenComponents="15px" textWritten="Inicio" textSize="16px" iconSize="16px"/>
        </DivMenuIten>

        <DivMenuIten onClick={()=>setQuantItens((a)=>a ? a + 1 : 1)}> 
            <IconAndText chooseType="ICON + TEXTO" iconName="SvgCaixa" alignComponents="Left" gapBetweenComponents="15px" textWritten="Agendamento" textSize="16px" iconSize="16px"/>
            {quantItens && <CircleAndText  
                                objCircle={{borderRadius:"50%", backgroundColor: theme.colors.background_information1, width:"24px", height: "24px", widthMin: "24px", heightMin:"24px"}}
                                objText={{children: quantItens, tag:"p", size:"10px", color: theme.colors.background_dashboard, cursorHover:"pointer"}}
                            />}
        </DivMenuIten>
        
        <DivMenuIten onClick={()=>alert("Cadastrar usuários")}>
            <IconAndText chooseType="ICON + TEXTO" iconName="SvgUsuarioAdd" alignComponents="Left" gapBetweenComponents="15px" textWritten="Cadastrar usuários" textSize="16px" iconSize="16px"/>
        </DivMenuIten>

        <DivMenuIten onClick={()=>alert("Cadastrar itens")}>
            <IconAndText chooseType="ICON + TEXTO" iconName="SvgFiguras" alignComponents="Left" gapBetweenComponents="15px" textWritten="Cadastrar itens" textSize="16px" iconSize="16px"/>
        </DivMenuIten>

        <DivMenuIten onClick={()=>alert("Configuração")}>
            <IconAndText chooseType="ICON + TEXTO" iconName="SvgConfig" alignComponents="Left" gapBetweenComponents="15px" textWritten="Configuração" textSize="16px" iconSize="16px"/>
        </DivMenuIten>

        <DivMenuItenFinal onClick={()=>alert("Sair da conta")}>
            <IconAndText chooseType="ICON + TEXTO" iconName="SvgGoBack" alignComponents="Left" gapBetweenComponents="15px" textWritten="Sair da conta" textSize="16px" iconSize="16px"/>
        </DivMenuItenFinal>
        
    </DivAreaIten>
     </>
  
    )
};

