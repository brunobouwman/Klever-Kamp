import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10rem;
`;

export const CountDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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

export const AssetAndInputContainer = styled.div`
  display: flex;
  align-items: center;
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

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2rem;
  flex: 3;

  > input {
    background: transparent;
    text-align: right;
    padding: 0 1rem;
    font-size: 24px;
    font-weight: 700;
    border: none;
    max-width: 20rem;
    color: white;

    &:focus,
    &:active {
      outline: none;
    }
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
