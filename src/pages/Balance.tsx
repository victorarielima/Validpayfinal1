import React from 'react';
import { useAuthStore } from '../store';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';

const Balance: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Main Balance Card */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-lg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] mix-blend-overlay opacity-20"></div>
        <div className="relative p-8">
          <div className="flex items-center gap-3 mb-4">
            <Wallet size={28} className="text-white" />
            <span className="text-xl font-medium text-white">Saldo Disponível</span>
          </div>
          <p className="text-5xl font-bold text-white mb-3">
            {user?.balance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
          <div className="flex items-center gap-2 text-white/80">
            <Clock size={16} />
            <span className="text-sm">Atualizado em tempo real</span>
          </div>
        </div>
      </div>

      {/* Transaction Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 text-green-600 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <ArrowDownRight size={24} />
            </div>
            <span className="text-lg font-medium">Últimas Entradas</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold text-gray-900">
                R$ 2.000,00
              </p>
              <p className="text-sm text-gray-600">Depósito recebido</p>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp size={20} />
              <span className="text-sm font-medium">+12% em relação ao mês anterior</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <ArrowUpRight size={24} />
            </div>
            <span className="text-lg font-medium">Últimas Saídas</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold text-gray-900">
                R$ 500,00
              </p>
              <p className="text-sm text-gray-600">PIX para João Silva</p>
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <TrendingDown size={20} />
              <span className="text-sm font-medium">-8% em relação ao mês anterior</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold mb-6">Resumo do Mês</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Receitas</span>
              <span className="text-green-600 font-medium">R$ 5.000,00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Despesas</span>
              <span className="text-red-600 font-medium">R$ 2.500,00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Economia</span>
              <span className="text-blue-600 font-medium">R$ 2.500,00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;