import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store';
import { 
  LayoutDashboard, 
  Send, 
  History, 
  Bell, 
  LogOut, 
  Wallet,
  Menu as MenuIcon
} from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Wallet, label: 'Ver Saldo', path: '/balance' },
    { icon: Send, label: 'Transferência', path: '/transfer' },
    { icon: History, label: 'Extrato', path: '/history' },
    { icon: Bell, label: 'Notificações', path: '/notifications' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (location.pathname === '/') return <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Valid Pay</h1>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          fixed lg:static
          top-0 left-0
          h-screen
          w-64
          bg-white
          shadow-lg
          transition-transform
          duration-300
          z-50
          lg:block
          overflow-y-auto
        `}>
          <div className="p-6 bg-gradient-to-r from-green-600 to-blue-600">
            <h1 className="text-2xl font-bold text-white">
              Valid Pay
            </h1>
          </div>

          <nav className="mt-6 px-3">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full px-4 py-3 flex items-center gap-3 rounded-lg
                  transition-all duration-200
                  hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50
                  ${location.pathname === item.path 
                    ? 'text-green-600 bg-gradient-to-r from-green-50 to-blue-50' 
                    : 'text-gray-700'
                  }
                `}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="w-full mt-4 px-4 py-3 flex items-center gap-3 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-200"
            >
              <LogOut size={20} />
              Sair
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;