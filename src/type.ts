export interface CreditCard {
  owner: string;
  expirationDate: string;
  bank?: string;
  number: number[];
  securityCode: string;
  password: number[];
}

export interface EachUserInputState {
  isComplete: boolean;
  userInput: string | string[];
}
