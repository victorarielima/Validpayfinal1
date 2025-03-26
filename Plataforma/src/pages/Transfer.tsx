import React, { useState } from 'react';
import { useAuthStore, useTransactionStore, useNotificationStore } from '../store';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Transfer: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [cpf, setCpf] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const user = useAuthStore((state) => state.user);
  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const addNotification = useNotificationStore((state) => state.addNotification);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);

    if (amountValue > (user?.balance || 0)) {
      setStatus({
        type: 'error',
        message: 'Saldo insuficiente para realizar a transferência.'
      });
      return;
    }

    if (cpf === '1') {
      setStatus({
        type: 'warning',
        message: 'Atenção! O CPF informado (1) foi reportado por múltiplos usuários como suspeito de fraude. Para prosseguir, confirme a transação no seu celular.'
      });
      return;
    }

    if (amountValue > 1000) {
      setStatus({
        type: 'warning',
        message: 'Transação de alto valor! Para continuar, confirme sua identidade no seu celular.'
      });
      setShowConfirmation(true);
      return;
    }

    completeTransfer();
  };

  const completeTransfer = () => {
    const amountValue = parseFloat(amount);

    addTransaction({
      description: `Transferência para ${recipient}`,
      amount: amountValue,
      type: 'debit'
    });

    addNotification({
      message: `Transferência de ${amountValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })} realizada para ${recipient}`,
      type: 'info'
    });

    setStatus({
      type: 'success',
      message: 'Transferência realizada com sucesso!'
    });

    // Reset form
    setAmount('');
    setRecipient('');
    setCpf('');
    setShowConfirmation(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Transferência Bancária</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valor da Transferência
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                R$
              </span>
              <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="0,00"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Destinatário
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CPF do Destinatário
            </label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {status.type && (
            <div className={`p-4 rounded-md ${
              status.type === 'success' ? 'bg-green-50 text-green-700' :
              status.type === 'error' ? 'bg-red-50 text-red-700' :
              'bg-yellow-50 text-yellow-700'
            }`}>
              <div className="flex items-center gap-2">
                {status.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
                <p>{status.message}</p>
              </div>
            </div>
          )}

          {showConfirmation ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Um código de confirmação foi enviado para seu celular.
                Para simular a confirmação, clique no botão abaixo.
              </p>
              <button
                type="button"
                onClick={completeTransfer}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Confirmar Transferência
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Transferir
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Transfer;