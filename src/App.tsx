import React from "react";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import GlobalStyle from "./Styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
