import LoginContainer from "components/molecules/login-container";
import { useTheme } from "styled-components";
import * as Styled from "./main-container-style";
import InformationContainer from "components/molecules/information-container-molecules";
import LoginProvider, { contextLogin } from "contexts/login-context";
import { useContext } from "react";

export default function MainContainer() {
	const theme = useTheme();
	return (
		<Styled.MainContainer>
			<InformationContainer />
			<LoginProvider>
				<LoginContainer />
			</LoginProvider>
		</Styled.MainContainer>
	);
}
