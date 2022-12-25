import DivGridItenArea from "components/particles/div-grid-item-area";
import useTheme from "hooks/useTheme";
import { StyledDivContainerGridArea } from "./styled";
import DashbordHeader from "../dashboard-header";
import DashbordMenu from "../dashboard-menu";
import DashbordAside from "../dashboard-aside";


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