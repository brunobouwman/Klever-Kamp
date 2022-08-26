import { Logo } from "Assets";
import { useProvider } from "Context";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shortAddress } from "Utils";
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
  const { setAddress, getAddress } = useProvider();
  const navigate = useNavigate();
  const customize = "customize";
  const rewards = "rewards";
  const account = "account";

  const [selected, setSelected] = useState("");

  const handleSelect = (selection: string) => {
    setSelected(selection);
    navigate(`/${selection}`, { replace: true });
  };

  const handleConnect = async () => {
    setAddress((window as any).kleverWeb.address);
  };

  return (
    <Container>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <SelectionContainer>
          <Selection
            onClick={handleSelect.bind(null, "")}
            selected={selected === ""}
          >
            <span>Pool Parties</span>
          </Selection>
          <Selection
            onClick={handleSelect.bind(null, customize)}
            selected={selected === customize}
          >
            <span>Community Pools</span>
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

        {getAddress().length == 0 ? (
          <Button
            content="Connect Wallet"
            padding="3"
            onClick={handleConnect}
          />
        ) : (
          <Button content={shortAddress(getAddress(), 6)} padding="3.1" />
        )}
      </NavBar>
      {children}
    </Container>
  );
};

export default Layout;
