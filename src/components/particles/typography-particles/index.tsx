import  { ReactNode } from "react";
import * as Styled from "./typography-style";

export type TypographyTypes = {
	size?: string;
	fontWeight?: string;
	color?: string;
	tag: "h1" | "h2" | "p" | "label";
	children: ReactNode;
	decoration?: "underline" | "line-through" | "none";
	margin?:string;
	cursorHover?: string;
	heightLine?: string;
};

export default function Typography(props: TypographyTypes) {
	return (
		<Styled.Text
			as={props.tag}
			color={props.color}
			size={props.size}
			fontWeight={props.fontWeight}
			decoration={props.decoration}
			margin={props.margin}
			cursorHover={props.cursorHover}
			heightLine={props.heightLine}
		>
			{props.children}
		</Styled.Text>
	);
}
