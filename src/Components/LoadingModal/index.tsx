import React from "react";
import { Container, LdsDefault, ResultContainer } from "./styles";

interface ILoadingModal {
  title: string;
  result: string;
  isLoading: boolean;
}

const LoadingModal: React.FC<ILoadingModal> = ({
  title,
  result,
  isLoading = true,
}) => {
  return (
    <Container>
      {isLoading ? (
        <>
          <span>{title}</span>
          <LdsDefault>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </LdsDefault>
        </>
      ) : (
        <>
          <ResultContainer status={result === "Welcome to the Party!"}>
            {/* <img src={result ? GreenCheck : RedX} alt="Fail" /> */}
            <span>{result}</span>
          </ResultContainer>
        </>
      )}
    </Container>
  );
};

export default LoadingModal;
