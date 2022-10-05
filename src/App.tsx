import Router from "./Router";
import theme from "./themes/emotion";
import { reset } from "./styles/reset";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalContainer from "./components/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
