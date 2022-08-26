import React, { createContext, useContext, useState } from "react";
import { IPool } from "Types";

export interface IContext {
  getAddress(): string;
  setAddress(address: string): void;
  getPools(): IPool[];
  setPools(poolsArr: IPool[]): void;
  getDepositAmount(): number;
  setDepositAmount(amount: number): void;
}

export interface IProvider {
  children?: React.ReactNode;
}

const Context = createContext({} as IContext);

const Provider: React.FC<IProvider> = ({ children }) => {
  const [address, setAddress] = useState("");
  const [pools, setPools] = useState<IPool[]>([]);
  const [depositAmount, setDepositAmount] = useState(0);

  const getAddress = () => address;
  const getPools = () => pools;
  const getDepositAmount = () => depositAmount;

  const values: IContext = {
    getAddress,
    setAddress: (address: string) => setAddress(address),
    getPools,
    setPools: (poolsArr: IPool[]) => setPools(poolsArr),
    getDepositAmount,
    setDepositAmount: (amount: number) => setDepositAmount(amount),
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useProvider = () => {
  const context = useContext(Context);

  return context;
};

export { Provider, useProvider };
