import "./App.css";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ApplicationRoutes />
    </ThemeProvider>
  );
}

export default App;
