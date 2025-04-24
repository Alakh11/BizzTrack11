import React from 'react';
import { Calendar, CreditCard, FileText, User } from 'lucide-react';

interface ActivityItemProps {
  type: 'invoice' | 'payment' | 'client' | 'expense';
  title: string;
  description: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  type,
  title,
  description,
  time,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'invoice':
        return <FileText className="h-5 w-5" />;
      case 'payment':
        return <CreditCard className="h-5 w-5" />;
      case 'client':
        return <User className="h-5 w-5" />;
      case 'expense':
        return <Calendar className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'invoice':
        return 'bg-blue-100 text-blue-600';
      case 'payment':
        return 'bg-green-100 text-green-600';
      case 'client':
        return 'bg-purple-100 text-purple-600';
      case 'expense':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex py-3">
      <div className={`p-2 rounded-full ${getBgColor()} mr-4`}>
        {getIcon()}
      </div>
      
      <div className="flex-1">
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      
      <div className="text-sm text-gray-500">{time}</div>
    </div>
  );
};

export default ActivityItem;