import React, { useEffect } from "react";
import Layout from "./Components/Layout";

import GlobalStyle from "./Styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import Routes from "Routes";
import { IPool } from "Types";
import { useProvider } from "Context";

const App: React.FC = () => {
  const { setPools } = useProvider();
  const basePath = "@klever/Pool-Party";
  const init = async () => {
    await (window as any).kleverWeb.initialize();
  };

  useEffect(() => {
    setTimeout(init, 1000);
    
    const storedValues = localStorage.getItem(basePath);
    if (storedValues) {
      const parsedValues: IPool[] = JSON.parse(storedValues);
      const sorted = parsedValues.sort((a, b) => a.amount - b.amount);
      setPools(sorted);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
