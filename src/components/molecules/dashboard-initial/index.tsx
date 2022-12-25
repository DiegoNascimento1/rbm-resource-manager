import DashbordAside from "components/atoms/dashboard-aside";
import DashbordMenu from "components/atoms/dashboard-menu";
import DivGridItenArea from "components/particles/div-grid-item-area";
import useTheme from "hooks/useTheme";
import DashbordHeader from "../../atoms/dashboard-header";
import { StyledDivContainerGridArea } from "./styled";


export default function DashbordInicial (){
    const { theme } = useTheme();
    return (
     <>
     
     <StyledDivContainerGridArea>
  
      <DashbordHeader/>
  
      <DashbordMenu/>
  
      <DashbordAside/>
  
    </StyledDivContainerGridArea>
     </>
  
    )
};