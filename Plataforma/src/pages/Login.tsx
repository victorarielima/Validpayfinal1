import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store';
import { Lock, User, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Valid Pay
            </h1>
            <p className="text-gray-600 mt-2">Acesse sua conta com segurança</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Nome de Usuário
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-400"
                  placeholder="Digite seu usuário"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-400"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-sm flex items-center space-x-2">
                <span className="flex-shrink-0">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white py-2.5 px-6 rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <span>Entrar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Implement password recovery logic here
                  alert('Função de recuperação de senha em desenvolvimento');
                }}
              >
                Esqueci minha senha
              </a>
            </div>
          </form>
        </div>

        {/* Right Side - Decorative Content */}
        <div className="hidden md:block relative bg-gradient-to-br from-green-600 to-blue-600 p-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10"></div>
          <div className="relative text-white space-y-6">
            <h2 className="text-3xl font-bold">Bem-vindo ao Valid Pay</h2>
            <p className="text-lg opacity-90">
              Sua experiência bancária mais segura e moderna
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <span>Transações seguras</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <span>Atendimento 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <span>Análise financeira</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;