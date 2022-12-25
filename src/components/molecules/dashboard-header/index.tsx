import DivAreaIten from "components/particles/div-area-iten";
// import DivGridItenArea from "components/particles/div-grid-item-area";
import Typography from "components/particles/typography-particles";
import useTheme from "hooks/useTheme";
import { StyledAreaContainer } from "./styled";
import GeraldoFerreira from "../../../assets/svgs/GeraldoFerreira.png";
import { DashboardLogin } from "components/atoms/dashboard-login";


export default function DashbordHeader (){
    const { theme } = useTheme();
    return (
     <>
     <DivAreaIten objAreaIten={{areaTitle:"Header", colorBackground:theme.colors.background_dashboard, heightMinDefault:"76px", sizeBorder:"0px"}}>
         <StyledAreaContainer>

          <DivAreaIten 
                      objAreaIten={{areaTitle:"Header", 
                                    colorBackground: theme.colors.background_dashboard, 
                                    heightMinDefault:"52px", 
                                    sizeBorder:"0px",
                                    alignText:"left",
                                    radiusBorder:"0px", 
                                    paddingLeft: "21px",
                                    paddingTop:"22px" }}>
            <Typography 
                        tag="p" 
                        size="20px"
                        fontWeight="500"

                        >Início</Typography>
          </DivAreaIten>

          <DashboardLogin/>
          
        </StyledAreaContainer>
      </DivAreaIten>
     </>
    )
};

  
