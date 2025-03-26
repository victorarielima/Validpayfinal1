export interface User {
  name: string;
  accountNumber: string;
  balance: number;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  suspicious?: boolean;
}

export interface Notification {
  id: string;
  message: string;
  type: 'warning' | 'info' | 'error';
  date: string;
}