import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

export const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 40rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: ${(props) => props.theme.color.selection};
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 1rem 0;
  align-items: center;
  justify-content: center;
`;

export const PoolReward = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > h3:last-of-type {
    color: ${(props) => props.theme.color.primary};
  }
`;
