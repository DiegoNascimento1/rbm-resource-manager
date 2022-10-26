import "./App.css";

import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import InitialPage from "pages/initial-page";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
