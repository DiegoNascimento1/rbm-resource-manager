import styled from "styled-components";

export type StyledDivCircleAndTextProps = {
    backgroundColor: string,      
    width:string,
    widthMin?: string,
    height: string,
    heightMin?: string,
    borderRadius:"50%" | "45%" | "40%" | "35%" | "30%" | "25%" | "20%",
    borderSize?: string,
    borderColor?: string
};

export const StyledDivCircleAndText = styled.div<StyledDivCircleAndTextProps>`
    background-color: ${(props)=> props.backgroundColor};      
    width:${(props)=> props.width};
    height: ${(props)=> props.height};
    min-width: ${(props)=> props.widthMin };
    min-height: ${(props)=> props.heightMin };
    border-radius:${(props)=> props.borderRadius };
    border: ${(props)=> props.borderSize }
             solid 
             ${(props)=> props.borderColor };

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: -10px;

    :hover{
        box-shadow: inset 0px 0px 20px 2px #0000FF,
                     inset 0px 0px 1px 40px white,
                    0px 0px 1px 1px blue
                    /* 10px 10px 0px 0px green  */
                    ;
    }
`;