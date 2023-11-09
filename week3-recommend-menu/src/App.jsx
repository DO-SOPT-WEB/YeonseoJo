import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import MainHome from "./components/MainHome";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainHome />
    </ThemeProvider>
  );
}

export default App;
