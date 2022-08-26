import React from "react";
import { Container, PoolReward, RewardsContainer, Title } from "./styles";

const Rewards: React.FC = () => {
  return (
    <Container>
      <RewardsContainer>
        <Title>
          <h2>Last Rewards</h2>
        </Title>
        <PoolReward>
          <h3>Pool # 1</h3>
          <h3>50000 KLV</h3>
        </PoolReward>
        <PoolReward>
          <h3>Pool # 2</h3>
          <h3>75000 KLV</h3>
        </PoolReward>
        <PoolReward>
          <h3>Pool # 3</h3>
          <h3>100000 KLV</h3>
        </PoolReward>
      </RewardsContainer>
    </Container>
  );
};

export default Rewards;
