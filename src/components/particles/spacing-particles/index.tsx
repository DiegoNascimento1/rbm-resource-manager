import React, { ReactNode } from "react";
import { useTheme } from "styled-components";
import * as Styled from "./spacing-style";

type SpacingProps = {
	marginTop: string;
};

export default function Spacing(props: SpacingProps) {
	return <Styled.SpacingContainer marginTop={props.marginTop} />;
}
