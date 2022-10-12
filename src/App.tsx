import Router from "./Router";
import theme from "./themes/emotion";
import { reset } from "./styles/global/reset";
import { Global, ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
