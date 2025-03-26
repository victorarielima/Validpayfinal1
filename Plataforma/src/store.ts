import { create } from 'zustand';
import { User, Transaction, Notification } from './types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    if (username === 'Victor Ariel' && password === '123') {
      set({
        isAuthenticated: true,
        user: {
          name: 'Victor Ariel',
          accountNumber: '1234-5678',
          balance: 25000.00
        }
      });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, user: null })
}));

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [
    {
      id: '1',
      date: '14/03/2025',
      description: 'PIX para João Silva',
      amount: 500.00,
      type: 'debit'
    },
    {
      id: '2',
      date: '12/03/2025',
      description: 'Depósito recebido',
      amount: 2000.00,
      type: 'credit'
    },
    {
      id: '3',
      date: '10/03/2025',
      description: 'Pagamento de boleto',
      amount: 350.00,
      type: 'debit'
    },
    {
      id: '4',
      date: '05/03/2025',
      description: 'Transferência para CPF suspeito',
      amount: 9800.00,
      type: 'debit',
      suspicious: true
    }
  ],
  addTransaction: (transaction) => set((state) => ({
    transactions: [{
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('pt-BR'),
      ...transaction
    }, ...state.transactions]
  }))
}));

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'date'>) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [
    {
      id: '1',
      message: 'Detectamos uma tentativa de transferência para um CPF suspeito. Caso não tenha sido você, entre em contato com o suporte.',
      type: 'warning',
      date: '14/03/2025'
    },
    {
      id: '2',
      message: 'Sua última transação foi de R$ 15.000. Confirme se foi você quem realizou.',
      type: 'warning',
      date: '13/03/2025'
    },
    {
      id: '3',
      message: 'Seu saldo caiu abaixo de R$ 1.000. Fique atento ao seu limite disponível.',
      type: 'info',
      date: '12/03/2025'
    }
  ],
  addNotification: (notification) => set((state) => ({
    notifications: [{
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('pt-BR'),
      ...notification
    }, ...state.notifications]
  }))
}));