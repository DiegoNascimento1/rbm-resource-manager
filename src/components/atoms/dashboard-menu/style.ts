import styled from "styled-components";

export const DivMenuIten = styled.div`
    border-radius:12px;
    background-color: #ffffff;
    width:233px;
    height: 56px;
    padding-left:16px;
    margin: 0px auto;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding-top: 10px;
    
    :hover{
        background-color: #C3E4F6;
        box-shadow: 1px 1px 3px #33E4F6;
        cursor: pointer;
    }

`;

export const DivMenuItenFinal = styled.div`
    border-radius:12px;
    background-color: #ffffff;
    width:233px;
    height: 56px;
    padding-left:16px;
    margin: 16px 32px;
    display: flex;
    align-items: center;
    padding-top: 10px;
    position: absolute;
    bottom: 0; 
    :hover{
        background-color: #C3E4F6;
        box-shadow: 1px 1px 3px #33E4F6;
        cursor: pointer;
    }

`;

export const StyledDivCircleInformation = styled.div`
    background-color: #003971;      // background_information1:
    width:24px;
    min-width: 24px;
    height: 24px;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
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