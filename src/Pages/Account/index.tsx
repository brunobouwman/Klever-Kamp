import React, { useEffect, useState } from "react";
import { KLV } from "Assets";
import {
  AccountContainer,
  DepositsContainer,
  Container,
  SubContainer,
  RewardsContainer,
  NetworkAmount,
  NetworkContainer,
  RewardsAmount,
  NoAccountContainer,
} from "./styles";
import { useProvider } from "Context";
import Button from "Components/Button";
import axios from "axios";
import { ITransaction } from "Types";

const Account: React.FC = () => {
  const { getAddress, setAddress, setDepositAmount, getDepositAmount } =
    useProvider();
  const [rewards, setRewards] = useState(0);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const defaultAddress = process.env.KUSTODY_WALLET;

  useEffect(() => {
    if (getAddress().length === 0) return;

    const url = `https://klever-data.services.klever.io/v1/transactions/KLV/${getAddress()}`;

    const config = {
      headers: {
        SECRET: "askhdjt981yhgfs76du1yfw7d6t1utfd1",
      },
    };

    axios
      .get(url, config)
      .then((res) => setTransactions(res.data.transactions))
      .catch((err) => console.log(err));
  }, [getAddress()]);

  useEffect(() => {
    if (transactions.length === 0) return;

    console.log(transactions);

    const total = transactions
      .filter(
        (tnx) =>
          tnx.toAddress ===
          "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace"
      )
      .map((tnx) => tnx.amount)
      .reduce((prev, cur) => prev + cur);
    setDepositAmount(Number(total.toFixed(2)));
  }, [transactions]);

  const handleConnect = () => {
    setAddress((window as any).kleverWeb.address);
  };

  return (
    <Container>
      <SubContainer>
        {getAddress().length === 0 ? (
          <NoAccountContainer>
            <h3>Klever Pool Party is a saving rewards crypto Protocol</h3>
            <span>
              To interact with the protocol a wallet must be connected
            </span>
            <Button
              content="Connect Wallet"
              padding="5"
              onClick={handleConnect}
            />
          </NoAccountContainer>
        ) : (
          <>
            <AccountContainer>
              <h3>Total Balance</h3>
              <h3>{getDepositAmount() + rewards} KLV</h3>
            </AccountContainer>
            <DepositsContainer>
              <span>Deposits</span>
              <NetworkAmount>
                <NetworkContainer>
                  <img src={KLV} alt="KLV" />
                  <span>Klever Chain</span>
                </NetworkContainer>
                <span>{`${getDepositAmount()} KLV`}</span>
              </NetworkAmount>
            </DepositsContainer>
            <RewardsContainer>
              <span>Rewards</span>
              <RewardsAmount>
                <span>To be Claimed</span>
                <span>{rewards} KLV</span>
              </RewardsAmount>
            </RewardsContainer>
          </>
        )}
      </SubContainer>
    </Container>
  );
};

export default Account;
