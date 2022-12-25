import Typography, { TypographyTypes } from "../typography-particles";
import { StyledDivCircleAndText, StyledDivCircleAndTextProps } from "./style";

type CircleAndTextProps = {
    objText: TypographyTypes;
    objCircle:StyledDivCircleAndTextProps;  
};

const objCircleDefault:StyledDivCircleAndTextProps = {
    backgroundColor: "red",      
    width:"10px",
    widthMin: "10px",
    height: "10px",
    heightMin: "10px",
    borderRadius:"50%",
    borderSize: "0px",
    borderColor: "red"
};

export function CircleAndText  ( props: CircleAndTextProps ){
    return (
        <StyledDivCircleAndText 

            backgroundColor= { props.objCircle.backgroundColor ? props.objCircle.backgroundColor : objCircleDefault.backgroundColor } 
            borderRadius= { props.objCircle.borderRadius ? props.objCircle.borderRadius : objCircleDefault.borderRadius }  
            width= { props.objCircle.width ? props.objCircle.width : objCircleDefault.width } 
            height= { props.objCircle.height ? props.objCircle.height : objCircleDefault.height } 
            widthMin= { props.objCircle.widthMin ? props.objCircle.widthMin : objCircleDefault.widthMin } 
            heightMin= { props.objCircle.heightMin ? props.objCircle.heightMin : objCircleDefault.heightMin }
                                >

            <Typography tag={props.objText.tag} size={props.objText.size} color={props.objText.color} cursorHover={props.objText.cursorHover} >{props.objText.children}</Typography>
        </StyledDivCircleAndText>
    )
};