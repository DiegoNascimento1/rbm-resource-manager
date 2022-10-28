import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import ListParticleColumn from "components/particles/ul-list-column-particle/list-index";
import ListParticleRow from "components/particles/ul-list-row-particle/list-index";
import { useTheme } from "styled-components";
import * as Styled from "./information-container-styles";

export default function InformationContainer() {
	const theme = useTheme();

	return (
		<Styled.Container>
			<Spacing marginTop="-55px" />
			<Typography tag={"h1"} color={theme.colors.primary2} size="62.18px">
				Lorem ipsum
			</Typography>
			<Spacing marginTop="-55px" />
			<Typography tag={"h2"} size="31.09px" fontWeight="400">
				Lorem ipsun 🚀
			</Typography>
			<Styled.ContainerListRow>
				<ListParticleColumn />
			</Styled.ContainerListRow>
			<Spacing marginTop="45px" />
			<Typography tag={"p"} size="18.65px" fontWeight="400">
				Lorem Ipsum is simply dummy text of the printing {"\n"} and typesetting
				industry. Lorem Ipsum has been the {"\n"} industry's standard dummy text
				ever since the 1500s, {"\n"} when an unknown printer took a galley of
				type and {"\n"}
				scrambled it to make a type specimen book.
			</Typography>
			<Spacing marginTop="45px" />
			<Typography tag={"p"} size="18.65px" fontWeight="400">
				Equipe
			</Typography>
			<Styled.ContainerListColumn>
				<ListParticleRow />
			</Styled.ContainerListColumn>
		</Styled.Container>
	);
}
