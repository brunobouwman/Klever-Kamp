import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8rem;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  justify-content: center;
  gap: 1rem;
`;

export const NoAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 2rem 3rem;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;

  > span {
    font-size: 14px;
    color: ${(props) => props.theme.color.offWhite};
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;
`;

export const DepositsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 0;
  gap: 1rem;
`;

export const NetworkAmount = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;
`;

export const NetworkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > img {
    width: 24px;
    height: 24px;
  }
`;

export const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 0;
  gap: 1rem;
`;

export const RewardsAmount = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;
`;
