export interface ITransactionResponse {
  transactions: ITransaction[];
}

export interface ITransaction {
  hash: string;
  type: number;
  amount: number;
  precision: number;
  assetID: string;
  assetName: string;
  isPublished: boolean;
  block: number;
  status: number;
  toAddress: string;
  fromAddress: string;
  timestamp: number;
  confirmations: number;
  rawAmount: string;
  toAddresses: string[];
  klv: {
    bandwith: number;
    kappfee: number;
    fee: number;
    types: string;
  };
  smartContract: any;
}

export interface IPool {
  poolNumber: number;
  amount: number;
  time: number;
  participants: number;
}
