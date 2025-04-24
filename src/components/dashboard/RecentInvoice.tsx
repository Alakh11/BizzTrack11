import React from 'react';
import { Link } from '../ui/Link';

interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
}

interface RecentInvoiceProps {
  invoice: Invoice;
}

const RecentInvoice: React.FC<RecentInvoiceProps> = ({ invoice }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <div className="font-medium text-gray-900">{invoice.client}</div>
        <div className="text-sm text-gray-500">Invoice #{invoice.id}</div>
      </div>
      
      <div className="text-right">
        <div className="font-medium text-gray-900">₹{invoice.amount.toLocaleString()}</div>
        <div className="text-sm text-gray-500">{invoice.date}</div>
      </div>
      
      <div className="ml-4">
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(invoice.status)}`}>
          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
        </span>
      </div>
      
      <Link href={`/invoices/${invoice.id}`} className="ml-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
        View
      </Link>
    </div>
  );
};

export default RecentInvoice;