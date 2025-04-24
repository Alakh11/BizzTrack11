import React, { useState } from 'react';
import { ChevronDown, Filter, Plus, Search, User } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from '../components/ui/Link';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  outstandingAmount: number;
  lastInvoice: string;
}

const Clients: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample clients data
  const clients: Client[] = [
    {
      id: 'C001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 9876543210',
      company: 'Acme Inc.',
      outstandingAmount: 25000,
      lastInvoice: '12 May 2024',
    },
    {
      id: 'C002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91 9876543211',
      company: 'Globex Corp',
      outstandingAmount: 0,
      lastInvoice: '05 May 2024',
    },
    {
      id: 'C003',
      name: 'Robert Johnson',
      email: 'robert@example.com',
      phone: '+91 9876543212',
      company: 'Stark Industries',
      outstandingAmount: 18500,
      lastInvoice: '28 Apr 2024',
    },
    {
      id: 'C004',
      name: 'Emily Clark',
      email: 'emily@example.com',
      phone: '+91 9876543213',
      company: 'Wayne Enterprises',
      outstandingAmount: 5000,
      lastInvoice: '15 Apr 2024',
    },
    {
      id: 'C005',
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+91 9876543214',
      company: 'Umbrella Corp',
      outstandingAmount: 35000,
      lastInvoice: '10 Apr 2024',
    },
  ];

  const filteredClients = clients.filter((client) => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-500">Manage your client relationships</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button 
              variant="primary" 
              icon={<Plus size={16} />}
            >
              Add Client
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Button 
                variant="outline" 
                icon={<Filter size={16} />}
                className="w-full sm:w-auto"
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Outstanding
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Invoice
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <User size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-500">{client.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{client.email}</div>
                    <div className="text-sm text-gray-500">{client.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${client.outstandingAmount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {client.outstandingAmount > 0 ? `₹${client.outstandingAmount.toLocaleString()}` : 'Paid'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.lastInvoice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/clients/${client.id}`} className="text-blue-600 hover:text-blue-900">
                        View
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link href={`/invoices/create?client=${client.id}`} className="text-gray-600 hover:text-gray-900">
                        Invoice
                      </Link>
                      <span className="text-gray-300">|</span>
                      <button className="text-gray-600 hover:text-gray-900">
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredClients.length === 0 && (
          <div className="py-12 text-center">
            <User size={48} className="mx-auto text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No clients found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
        
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredClients.length}</span> of <span className="font-medium">{filteredClients.length}</span> clients
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <Link href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </Link>
                <Link href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;