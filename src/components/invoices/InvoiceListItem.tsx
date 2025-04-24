import React from 'react';
import { Link } from '../ui/Link';
import InvoiceStatus from './InvoiceStatus';

interface InvoiceListItemProps {
  id: string;
  client: {
    name: string;
    company: string;
  };
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'draft';
}

const InvoiceListItem: React.FC<InvoiceListItemProps> = ({
  id,
  client,
  date,
  dueDate,
  amount,
  status,
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-blue-600">
          <Link href={`/invoices/${id}`}>
            #{id}
          </Link>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{client.name}</div>
        <div className="text-xs text-gray-500">{client.company}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{date}</div>
        <div className="text-xs text-gray-500">Due: {dueDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        ₹{amount.toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <InvoiceStatus status={status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-end space-x-2">
          <Link href={`/invoices/${id}`} className="text-blue-600 hover:text-blue-900">
            View
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={`/invoices/${id}/edit`} className="text-gray-600 hover:text-gray-900">
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default InvoiceListItem;