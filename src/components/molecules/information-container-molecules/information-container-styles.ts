import styled from "styled-components";

type SpacingProps = {
	marginTop: string;
};

export const Container = styled.div`
	width: 491.74px;
	height: 670px;
`;

export const Spacing = styled.div<SpacingProps>`
	margin-top: ${(props) => props.marginTop};
`;

export const ContainerListRow = styled.div`
	margin-top: -20px;
	margin-left: -38px;
`;
export const ContainerListColumn = styled.div`
	margin-top: 45px;
	margin-left: -38px;
`;
