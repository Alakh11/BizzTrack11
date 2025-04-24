import React from 'react';

type StatusType = 'paid' | 'pending' | 'overdue' | 'draft';

interface InvoiceStatusProps {
  status: StatusType;
  className?: string;
}

const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status, className = '' }) => {
  const getStatusStyles = (status: StatusType) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(status)} ${className}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default InvoiceStatus;