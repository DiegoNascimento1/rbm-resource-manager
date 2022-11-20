import LoginContainer from "components/molecules/login-container";
import { useTheme } from "styled-components";
import * as Styled from "./main-container-style";
import InformationContainer from "components/molecules/information-container-molecules";

export default function MainContainer() {
	const theme = useTheme();
	return (
		<Styled.MainContainer>
			<InformationContainer />
			<LoginContainer />
		</Styled.MainContainer>
	);
}
