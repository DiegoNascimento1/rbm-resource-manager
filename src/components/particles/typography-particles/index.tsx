import React, { ReactNode } from "react";
import { useTheme } from "styled-components";
import * as Styled from "./typography.style";

type TypographyTypes = {
	size?: string;
	fontWeight?: string;
	color?: string;
	tag: "h1" | "h2" | "p";
	children: ReactNode;
};

export default function Typography(props: TypographyTypes) {
	return (
		<Styled.Text
			as={props.tag}
			color={props.color}
			size={props.size}
			fontWeight={props.fontWeight}
		>
			{props.children}
		</Styled.Text>
	);
}
