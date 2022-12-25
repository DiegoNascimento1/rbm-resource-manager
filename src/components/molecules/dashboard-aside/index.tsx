import DivAreaIten from "components/particles/div-area-iten";
import useTheme from "hooks/useTheme";
import { StyledAreaContainer } from "./style";

export default function DashbordAside (){
    const { theme } = useTheme();
    return (
     <>
     <DivAreaIten objAreaIten={{areaTitle:"Aside", colorBackground:theme.colors.background_dashboard2, sizeBorder:"0px"}}>
        <StyledAreaContainer>
          <DivAreaIten objAreaIten={{areaTitle:"Datas", colorBackground:"red", heightMinDefault:"56px"}}>Datas</DivAreaIten>
          <DivAreaIten objAreaIten={{areaTitle:"Calendario", colorBackground:"blue", heightMinDefault:"56px"}}>Calendario</DivAreaIten>
          <DivAreaIten objAreaIten={{areaTitle:"Listagem", colorBackground:"green"}}>Listagem</DivAreaIten>
          <DivAreaIten objAreaIten={{areaTitle:"MeusAgendamento", colorBackground:"pink"}}>MeusAgendamento</DivAreaIten>
        </StyledAreaContainer>
      </DivAreaIten>
     </>
  
    )
};