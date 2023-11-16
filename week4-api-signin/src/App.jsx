import { ThemeProvider } from "styled-components";
import Router from "./Router";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
