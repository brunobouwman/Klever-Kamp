import { Logo } from "Assets";
import React, { useState } from "react";
import Button from "../Button";
import {
  Container,
  LogoContainer,
  LogoExtension,
  NavBar,
  Selection,
  SelectionContainer,
} from "./styles";

export interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  const deposit = "deposit";
  const customize = "customize";
  const rewards = "rewards";
  const account = "account";

  const [selected, setSelected] = useState(deposit);

  const handleSelect = (selection: string) => {
    setSelected(selection);
  };

  return (
    <Container>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
          <LogoExtension>
            <h2>Pool</h2>
            <h2>Party</h2>
          </LogoExtension>
        </LogoContainer>
        <SelectionContainer>
          <Selection
            onClick={handleSelect.bind(null, deposit)}
            selected={selected === deposit}
          >
            <span>Deposit</span>
          </Selection>
          <Selection
            onClick={handleSelect.bind(null, customize)}
            selected={selected === customize}
          >
            <span>Customize</span>
          </Selection>
          <Selection
            onClick={handleSelect.bind(null, rewards)}
            selected={selected === rewards}
          >
            <span>Rewards</span>
          </Selection>
          <Selection
            onClick={handleSelect.bind(null, account)}
            selected={selected === account}
          >
            <span>Account</span>
          </Selection>
        </SelectionContainer>

        <Button content="Connect Wallet" padding="1" />
      </NavBar>
      {children}
    </Container>
  );
};

export default Layout;
