import DivAreaIten from "components/particles/div-area-iten";
import DivGridItenArea from "components/particles/div-grid-item-area";
import Typography from "components/particles/typography-particles";
import useTheme from "hooks/useTheme";
import { StyledAreaContainer, StyleDivPhotoAndText, StyleDivTextContainer, StyleDivPhoto } from "./styled";
import GeraldoFerreira from "../../../assets/svgs/GeraldoFerreira.png";


export default function DashbordHeader (){
    const { theme } = useTheme();
    return (
     <>
      <DivGridItenArea tituloArea="Header" colorBackground={theme.colors.background_dashboard} heightMinDefault="76px" sizeBorder="0px" >
        <StyledAreaContainer>

          <DivAreaIten 
                      objAreaIten={{areaTitle:"Header", 
                                    colorBackground: theme.colors.background_dashboard, 
                                    heightMinDefault:"52px", 
                                    sizeBorder:"0px",
                                    alignText:"left",
                                    radiusBorder:"0px", 
                                    paddingLeft: "21px",
                                    paddingTop:"10px" }}>
            <Typography 
                        tag="p" 
                        size="20px"
                        fontWeight="500"

                        >Início</Typography>
          </DivAreaIten>

          <DivAreaIten 
                      objAreaIten={{areaTitle:"Usuario", 
                                    colorBackground:theme.colors.background_dashboard,
                                    heightMinDefault:"52px", 
                                    sizeBorder:"0px",
                                    radiusBorder:"0px" }}>
            <StyleDivPhotoAndText>
              <StyleDivPhoto >
                                
              </StyleDivPhoto>
              <StyleDivTextContainer>
                <Typography 
                            tag="p" 
                            size="14px"
                            >Geraldo Magela</Typography>
              </StyleDivTextContainer>
            </StyleDivPhotoAndText>
          </DivAreaIten>
          
        </StyledAreaContainer>
      </DivGridItenArea>
     </>
    )
};

  
