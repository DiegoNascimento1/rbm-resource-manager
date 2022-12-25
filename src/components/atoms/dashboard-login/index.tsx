import DivAreaIten from "components/particles/div-area-iten";
import Typography from "components/particles/typography-particles";
import useTheme from "hooks/useTheme";
import { StyleDivPhoto, StyleDivPhotoAndText, StyleDivTextContainer } from "./styled";

export function DashboardLogin (){
    const { theme } = useTheme();

    return (
        <>
         <DivAreaIten 
                      objAreaIten={{areaTitle:"Usuario", 
                                    colorBackground:theme.colors.background_dashboard,
                                    heightMinDefault:"52px", 
                                    sizeBorder:"0px",
                                    radiusBorder:"0px",
                                    alignText:"right",
                                    paddingRight:"12px"}}>
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

        </>
    )
};