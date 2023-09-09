import { ThemeProvider } from "styled-components";

import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import theme from "./themes/default";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
