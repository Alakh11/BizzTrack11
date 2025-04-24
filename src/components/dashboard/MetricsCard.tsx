import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
  className?: string;
  currency?: boolean;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  change,
  icon,
  className = '',
  currency = false,
}) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <div className="p-2 rounded-full bg-blue-50 text-blue-600">{icon}</div>
      </div>
      
      <div className="mt-4">
        <div className="text-2xl font-semibold">
          {currency && '₹'}{value}
        </div>
        
        {change !== undefined && (
          <div className="flex items-center mt-2">
            {change >= 0 ? (
              <>
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+{change}% from last month</span>
              </>
            ) : (
              <>
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm text-red-500">{change}% from last month</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricsCard;