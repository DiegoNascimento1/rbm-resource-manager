import styled from "styled-components";

type TextProps = {
	size?: string;
	fontWeight?: string;
	color?: string;
	decoration?: "underline" | "line-through" | "none";
	margin?:string;
	cursorHover?:string;
	heightLine?: string;
};

export const Text = styled.span<TextProps>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.fontWeight};
	text-decoration: ${(props) => props.decoration};
	margin: ${(props) => props.margin};
	line-height: ${(props) => props.heightLine};;
	&:hover{
		cursor: ${(props) => props.cursorHover ? props.cursorHover : "auto"};
	}
`;
