import HeaderAtom from "components/molecules/header-molecules/header-index";
import MainContainer from "components/molecules/main-container/main-container";
import { useTheme } from "styled-components";

export default function InitialPage() {
  const theme = useTheme()
  return (
    <>
      <HeaderAtom />
      <MainContainer/>
    </>
  );
}


//div style={{backgroundColor: theme.colors.background_login}}