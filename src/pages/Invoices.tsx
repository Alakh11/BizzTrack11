<<<<<<< HEAD
import MainLayout from "@/components/layout/MainLayout";
import InvoicesList from "@/components/invoices/InvoicesList";
import CreateInvoiceDialog from "@/components/invoices/CreateInvoiceDialog";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Invoices = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCreateInvoice = (data: any) => {
    toast({
      title: "Invoice Created",
      description: `Invoice ${data.invoiceNumber} has been created successfully.`,
    });
    setIsCreateDialogOpen(false);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Invoices</h1>
            <p className="text-muted-foreground">
              Manage and track all your invoices
            </p>
          </div>
          <Button className="btn-primary" onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-1" /> Create Invoice
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Total Invoices</p>
            <p className="text-2xl font-bold">145</p>
          </div>
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Paid</p>
            <p className="text-2xl font-bold text-success">89</p>
          </div>
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-warning">42</p>
          </div>
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Overdue</p>
            <p className="text-2xl font-bold text-destructive">14</p>
          </div>
        </div>

        <InvoicesList />

        <CreateInvoiceDialog 
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onSubmit={handleCreateInvoice}
        />
      </div>
    </MainLayout>
  );
};

export default Invoices;
=======
import React, { useState } from 'react';
import { Download, Filter, Plus, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import InvoiceListItem from '../components/invoices/InvoiceListItem';

interface Invoice {
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

const Invoices: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample invoices data
  const invoices: Invoice[] = [
    {
      id: 'INV001',
      client: {
        name: 'John Doe',
        company: 'Acme Inc.',
      },
      date: '12 May 2024',
      dueDate: '26 May 2024',
      amount: 25000,
      status: 'pending',
    },
    {
      id: 'INV002',
      client: {
        name: 'Jane Smith',
        company: 'Globex Corp',
      },
      date: '05 May 2024',
      dueDate: '19 May 2024',
      amount: 18500,
      status: 'paid',
    },
    {
      id: 'INV003',
      client: {
        name: 'Robert Johnson',
        company: 'Stark Industries',
      },
      date: '28 Apr 2024',
      dueDate: '12 May 2024',
      amount: 35000,
      status: 'overdue',
    },
    {
      id: 'INV004',
      client: {
        name: 'Emily Clark',
        company: 'Wayne Enterprises',
      },
      date: '15 Apr 2024',
      dueDate: '29 Apr 2024',
      amount: 8500,
      status: 'paid',
    },
    {
      id: 'INV005',
      client: {
        name: 'Michael Brown',
        company: 'Umbrella Corp',
      },
      date: '10 Apr 2024',
      dueDate: '24 Apr 2024',
      amount: 12000,
      status: 'draft',
    },
  ];

  const filteredInvoices = invoices.filter((invoice) => 
    invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
            <p className="text-gray-500">Manage your invoices and payments</p>
          </div>
          <div className="mt-4 sm:mt-0 space-x-2">
            <Button 
              variant="outline" 
              icon={<Download size={16} />}
            >
              Export
            </Button>
            <Button 
              variant="primary" 
              icon={<Plus size={16} />}
            >
              Create Invoice
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
                placeholder="Search invoices..."
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
                  Invoice
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInvoices.map((invoice) => (
                <InvoiceListItem 
                  key={invoice.id}
                  id={invoice.id}
                  client={invoice.client}
                  date={invoice.date}
                  dueDate={invoice.dueDate}
                  amount={invoice.amount}
                  status={invoice.status}
                />
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredInvoices.length === 0 && (
          <div className="py-12 text-center">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M9 12h6m-6 4h6m-6-8h6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" 
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No invoices found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
        
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredInvoices.length}</span> of <span className="font-medium">{filteredInvoices.length}</span> invoices
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
>>>>>>> bizztrack/main
