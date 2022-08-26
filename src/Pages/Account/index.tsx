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
  const mockTransactions = [
    {
      transactions: [
        {
          hash: "a9d8620fa2ad6007ce810059290cd35e9e2cc5d4d5d31ce9d7353180f9618f81",
          type: 1,
          amount: 10,
          precision: 6,
          assetId: "38",
          assetName: "KLV",
          isPublished: true,
          block: 1190001,
          status: 1,
          toAddress:
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          fromAddress:
            "klv1nnu8d0mcqnxunqyy5tc7kj7vqtp4auy4a24gv35fn58n2qytl9xsx7wsjl",
          timestamp: 1661455964000,
          confirmations: 1,
          rawAmount: "10000000",
          toAddresses: [
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          ],
          klv: {
            bandwidth: 1,
            kappfee: 0.5,
            fee: 1.5,
            types: "KLV",
          },
          smartContract: null,
        },
        {
          hash: "b186aff142f3efc0fc786d6eae537bffd0a7999ecce9ca0cb82248e2b31566aa",
          type: 1,
          amount: 10,
          precision: 6,
          assetId: "38",
          assetName: "KLV",
          isPublished: true,
          block: 1187752,
          status: 1,
          toAddress:
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          fromAddress:
            "klv1nnu8d0mcqnxunqyy5tc7kj7vqtp4auy4a24gv35fn58n2qytl9xsx7wsjl",
          timestamp: 1661446968000,
          confirmations: 1,
          rawAmount: "10000000",
          toAddresses: [
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          ],
          klv: {
            bandwidth: 1,
            kappfee: 0.5,
            fee: 1.5,
            types: "KLV",
          },
          smartContract: null,
        },
        {
          hash: "6ebd09acb0382fee7d79a4b867c81fbcb54a45e45ed2abba491c7ecc663d9a2d",
          type: 1,
          amount: 10,
          precision: 6,
          assetId: "38",
          assetName: "KLV",
          isPublished: true,
          block: 1187119,
          status: 1,
          toAddress:
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          fromAddress:
            "klv1nnu8d0mcqnxunqyy5tc7kj7vqtp4auy4a24gv35fn58n2qytl9xsx7wsjl",
          timestamp: 1661444436000,
          confirmations: 1,
          rawAmount: "10000000",
          toAddresses: [
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          ],
          klv: {
            bandwidth: 1,
            kappfee: 0.5,
            fee: 1.5,
            types: "KLV",
          },
          smartContract: null,
        },
        {
          hash: "fb310f68dba8d593cf30a9ef23840cef32a33866681668ebc9ca98f0e7b2125b",
          type: 1,
          amount: 10,
          precision: 6,
          assetId: "38",
          assetName: "KLV",
          isPublished: true,
          block: 1186281,
          status: 1,
          toAddress:
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          fromAddress:
            "klv1nnu8d0mcqnxunqyy5tc7kj7vqtp4auy4a24gv35fn58n2qytl9xsx7wsjl",
          timestamp: 1661441084000,
          confirmations: 1,
          rawAmount: "10000000",
          toAddresses: [
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          ],
          klv: {
            bandwidth: 1,
            kappfee: 0.5,
            fee: 1.5,
            types: "KLV",
          },
          smartContract: null,
        },
        {
          hash: "0fe03c6d02572560ff258b09747f51d583aa857d9258be5fecab65a98c924066",
          type: 1,
          amount: 0.00001,
          precision: 6,
          assetId: "38",
          assetName: "KLV",
          isPublished: true,
          block: 1186252,
          status: 1,
          toAddress:
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          fromAddress:
            "klv1nnu8d0mcqnxunqyy5tc7kj7vqtp4auy4a24gv35fn58n2qytl9xsx7wsjl",
          timestamp: 1661440968000,
          confirmations: 1,
          rawAmount: "10",
          toAddresses: [
            "klv1mz04tw2u6z7fu0eq0l9a5welntpkmak7tcn94ppdp8skmn7heceqsxcace",
          ],
          klv: {
            bandwidth: 1,
            kappfee: 0.5,
            fee: 1.5,
            types: "KLV",
          },
          smartContract: null,
        },
      ],
      totalPages: 1,
      currentPage: 1,
    },
  ];

  useEffect(() => {
    if (getAddress().length === 0) return;

    const url = `http://34.72.12.5/v1/transactions/KLV/${getAddress()}`;

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
