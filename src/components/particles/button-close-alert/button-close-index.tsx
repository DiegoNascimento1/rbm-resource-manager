import React, { ReactNode } from "react";
import { useTheme } from "styled-components";
import { StyledButtonAlert } from "./button-close-style";

type ListButtonProps = {
    color: string;
}

export default function ButtonCloseAlert(props : ListButtonProps) {
	return (<StyledButtonAlert
        color={props.color}
        >x</StyledButtonAlert>);
}
