import React from 'react';
import { useAuthStore } from '../store';
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Percent,
  AlertCircle,
  Gift,
  CreditCard as CardIcon,
  Briefcase,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-lg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] mix-blend-overlay opacity-20"></div>
        <div className="relative p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Olá, {user?.name}! 👋</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-6 w-6" />
                <span className="font-medium">Saldo Disponível</span>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(user?.balance || 0)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <CreditCard className="h-6 w-6" />
                <span className="font-medium">Conta</span>
              </div>
              <p className="text-xl">{user?.accountNumber}</p>
              <p className="text-sm opacity-80">Valid Pay</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6" />
                <span className="font-medium">Cotações</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-green-300" />
                  <span>Dólar: R$ 5,20</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="h-4 w-4 text-red-300" />
                  <span>Euro: R$ 5,70</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Special Offers */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Gift className="h-5 w-5 text-green-600" />
            Ofertas Especiais
          </h3>
          <div className="space-y-4">
            <div className="group p-4 border border-gray-100 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <PiggyBank className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Antecipe seu FGTS</h4>
                  <p className="text-sm text-gray-600">Taxas especiais para você</p>
                </div>
              </div>
            </div>
            <div className="group p-4 border border-gray-100 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <CardIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Cartão de Crédito</h4>
                  <p className="text-sm text-gray-600">Anuidade grátis no primeiro ano</p>
                </div>
              </div>
            </div>
            <div className="group p-4 border border-gray-100 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Empréstimo Pessoal</h4>
                  <p className="text-sm text-gray-600">Taxa a partir de 1,8% ao mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investments */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Investimentos
          </h3>
          <div className="space-y-4">
            <div className="group p-4 border border-gray-100 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Percent className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">CDB</h4>
                  <p className="text-sm text-gray-600">Rendimento: 100% do CDI</p>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Rentabilidade no mês: 0.95%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group p-4 border border-gray-100 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Fundos de Investimento</h4>
                  <p className="text-sm text-gray-600">Diversos perfis disponíveis</p>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Rentabilidade no mês: 1.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Alert */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <AlertCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-yellow-800">Aviso de Segurança</h4>
            <p className="text-yellow-700 mt-1">
              Nunca compartilhe suas senhas ou códigos de acesso. O Valid Pay jamais
              solicita dados sensíveis por telefone ou mensagem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;