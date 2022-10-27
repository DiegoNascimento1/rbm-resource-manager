import styled from "styled-components";

type SpacingProps = {
	marginTop: string;
};

export const SpacingContainer = styled.div<SpacingProps>`
	margin-top: ${(props) => props.marginTop};
`;
