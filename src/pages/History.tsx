import React from 'react';
import { useTransactionStore } from '../store';
import { AlertCircle } from 'lucide-react';

const History: React.FC = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Extrato de Transações</h2>
          
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className={`p-4 rounded-lg ${
                  transaction.suspicious
                    ? 'bg-red-50 border border-red-100'
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {transaction.suspicious && (
                      <AlertCircle className="text-red-500" />
                    )}
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                  </div>
                  <p className={`font-medium ${
                    transaction.type === 'credit'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}
                    {transaction.amount.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                </div>
                {transaction.suspicious && (
                  <p className="mt-2 text-sm text-red-600">
                    Transação marcada como suspeita. Entre em contato com o suporte
                    caso não reconheça esta operação.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;