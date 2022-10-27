import "./App.css";

import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import InitialPage from "pages/initial-page";
import MateusTestPage from "pages/page-for-test";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/mateus-test" element={<MateusTestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
