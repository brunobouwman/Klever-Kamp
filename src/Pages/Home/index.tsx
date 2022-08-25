import { KLV } from "../../Assets";
import React from "react";
import {
  Container,
  DepositContainer,
  AssetAndInputContainer,
  AssetContainer,
  InputContainer,
  InfoContainer,
  Info,
  InputLabel,
  CountDownContainer,
} from "./styles";
import Button from "Components/Button";

const Home: React.FC = () => {
  return (
    <Container>
      <CountDownContainer>
        <span>Join Prize Draw #444</span>
        <span>15:28:35</span>
      </CountDownContainer>
      <DepositContainer>
        <InputLabel>
          <span>Amount</span>
        </InputLabel>
        <AssetAndInputContainer>
          <AssetContainer>
            <img src={KLV} alt="Klv" />
            <span>KLV</span>
            <InputContainer>
              <input type="text" placeholder="0.0" />
            </InputContainer>
          </AssetContainer>
        </AssetAndInputContainer>
        <InfoContainer>
          <Info>
            <span>Winning Chances</span>
            <span>1 in 3.52</span>
          </Info>
          <Info>
            <span>Rewards VAPR</span>
            <span>5.70%</span>
          </Info>
        </InfoContainer>
        <Button content="Join Now" padding="12" />
      </DepositContainer>
    </Container>
  );
};

export default Home;
