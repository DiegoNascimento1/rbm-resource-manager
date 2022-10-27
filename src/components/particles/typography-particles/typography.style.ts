import styled from "styled-components";

type TextProps = {
	size?: string;
	fontWeight?: string;
	color?: string;
	decoration?: "underline" | "line-through" | "none";
};

export const Text = styled.span<TextProps>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.fontWeight};
	text-decoration: ${(props) => props.decoration};
`;
