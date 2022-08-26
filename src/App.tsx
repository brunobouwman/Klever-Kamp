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

    if (!storedValues) {
      const poolsArray: IPool[] = [
        {
          amount: 25000,
          poolNumber: 4,
          time: Date.now() + 86400000,
          participants: 172,
        },
        {
          amount: 50000,
          poolNumber: 5,
          time: Date.now() + 172800000,
          participants: 68,
        },
        {
          amount: 100000,
          poolNumber: 6,
          time: Date.now() + 259200000,
          participants: 32,
        },
      ];

      const toStore = JSON.stringify(poolsArray);
      localStorage.setItem(basePath, toStore);
      setPools(poolsArray);
      return;
    }

    const parsedValues: IPool[] = JSON.parse(storedValues);
    const sorted = parsedValues.sort((a, b) => a.amount - b.amount);
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
