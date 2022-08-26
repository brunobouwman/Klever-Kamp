import { KLV } from "../../Assets";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Container,
  DepositContainer,
  AssetAndAmount,
  AssetContainer,
  AmountContainer,
  InfoContainer,
  Info,
  InputLabel,
  CountDownContainer,
  TotalPoolAmountContainer,
  Card,
  Header,
  PoolsContainer,
  LoadingContainer,
} from "./styles";
import Button from "Components/Button";
import { useProvider } from "Context";
import { core, ITransfer, TransactionType } from "@klever/sdk";
import CountDown from "react-countdown";
import { IPool } from "Types";
import LoadingModal from "Components/LoadingModal";

const Home: React.FC = () => {
  const { getAddress, getPools } = useProvider();
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const basePath = "@klever/Pool-Party";
  const [selection, setSelection] = useState<IPool>({
    poolNumber: 0,
    amount: 0,
    time: 0,
    participants: 0,
  });

  const handleShowResult = () => {
    setShowResult(false);
  };

  const handleJoin = async () => {
    setIsLoading(true);
    const payload: ITransfer = {
      amount: selection.amount * 10 ** 6,
      receiver:
        "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
      kda: "KLV",
    };

    const unsignedTx = await core.buildTransaction([
      {
        payload,
        type: TransactionType.Transfer,
      },
    ]);

    const signedTx = await core.signTransaction(unsignedTx);

    const response = await core.broadcastTransactions([signedTx]);

    if (response.error.length !== 0) {
      setMessage("Sorry, party is full. Try another one!");
      setShowResult(true);
      setIsLoading(false);
      setTimeout(handleShowResult, 2000);
      return;
    }

    setShowResult(true);
    setIsLoading(false);
    setMessage("Welcome to the Party!");
    setTimeout(handleShowResult, 2000);
    const storedValues = localStorage.getItem(basePath);
    if (storedValues) {
      const parsedData: IPool[] = JSON.parse(storedValues);

      const selectedParty = parsedData.filter(
        (data) => data.poolNumber === selection.poolNumber
      );

      const partyIndex = parsedData
        .map((pool) => pool.poolNumber)
        .indexOf(selectedParty[0].poolNumber);

      if (partyIndex !== -1) {
        parsedData.splice(partyIndex, 1);
      }

      const newPoolValue = {
        ...selectedParty[0],
        participants: selectedParty[0].participants + 1,
      };

      parsedData.push(newPoolValue);
      const valuesToStore = JSON.stringify(parsedData);
      localStorage.setItem(basePath, valuesToStore);
    }
  };

  const handleSelection = (selectedPool: IPool) => {
    const selected = getPools().filter(
      (pool) => pool.poolNumber === selectedPool.poolNumber
    );
    setSelection(selected[0]);
  };

  useEffect(() => {
    if (getPools().length === 0) return;

    setSelection(getPools()[1]);
  }, [getPools()]);

  return (
    <Container>
      <Header>
        <h2>Parties</h2>
        <PoolsContainer>
          {getPools().length !== 0 &&
            getPools().map((pool) => (
              <Card
                onClick={handleSelection.bind(null, pool)}
                selected={selection.poolNumber === pool.poolNumber}
              >
                <TotalPoolAmountContainer>
                  <h2>Pool Rewards</h2>
                  <h3>{`up to ${pool.amount * 10} KLV`}</h3>
                </TotalPoolAmountContainer>
                <CountDownContainer>
                  <h3>Join Prize Draw # {pool.poolNumber}</h3>
                  <CountDown date={pool.time} />
                </CountDownContainer>
              </Card>
            ))}
        </PoolsContainer>
      </Header>
      {isLoading || showResult ? (
        <LoadingContainer>
          <LoadingModal
            title="Joining..."
            isLoading={isLoading}
            result={message}
          />
        </LoadingContainer>
      ) : (
        <DepositContainer>
          <InputLabel>
            <span>Amount</span>
          </InputLabel>
          <AssetAndAmount>
            <AssetContainer>
              <img src={KLV} alt="Klv" />
              <span>KLV</span>
            </AssetContainer>
            <AmountContainer>
              <h2>{selection.amount}</h2>
            </AmountContainer>
          </AssetAndAmount>
          <InfoContainer>
            <Info>
              <span>Winning Chances</span>
              <span>1 in {selection.participants}</span>
            </Info>
            <Info>
              <span>Rewards APR (%)</span>
              <span>up to 6.99</span>
            </Info>
          </InfoContainer>
          <Button
            content="Join Now"
            padding="12"
            disabled={getAddress().length === 0}
            onClick={handleJoin}
          />
        </DepositContainer>
      )}
    </Container>
  );
};

export default Home;
