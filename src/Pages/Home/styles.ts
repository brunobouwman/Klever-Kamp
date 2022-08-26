import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8rem;
  gap: 3rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: fit-content;

  > h2 {
    color: ${(props) => props.theme.color.white};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
`;

export const PoolsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 10rem;
`;

interface ICard {
  onClick: () => void;
  selected: boolean;
}

const selected = css`
  border: 4px solid ${(props) => props.theme.color.primary};
`;

const hover = css`
  box-shadow: 8px 8px;
  filter: opacity(0.8);
`;

export const Card = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 2rem;
  width: 20rem;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    ${(props) => !props.selected && hover}
  }

  ${(props) => props.selected && selected}
`;

export const TotalPoolAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 2rem;

  > h2 {
    white-space: nowrap;
  }

  > h3 {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const CountDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const DepositContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 28.12rem;
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;

  > span {
    color: ${(props) => props.theme.color.offWhite};
  }
`;

export const AssetAndAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;
  width: 100%;
`;

export const AssetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  height: 100%;
  flex: 1;

  > img {
    height: 24px;
    width: 24px;
  }

  > span {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 2rem;
  flex: 3;

  > span {
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding: 0.7rem;
  background: ${(props) => props.theme.color.selection};
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`;
