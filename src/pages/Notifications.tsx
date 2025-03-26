import React from 'react';
import { useNotificationStore } from '../store';
import { AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Notifications: React.FC = () => {
  const notifications = useNotificationStore((state) => state.notifications);

  const getIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="text-red-500" />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" />;
      default:
        return <Info className="text-blue-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Notificações</h2>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.type === 'error'
                    ? 'bg-red-50'
                    : notification.type === 'warning'
                    ? 'bg-yellow-50'
                    : 'bg-blue-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notification.type)}
                  <div>
                    <p className="font-medium">{notification.message}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;