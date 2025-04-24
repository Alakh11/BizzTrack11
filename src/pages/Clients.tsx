<<<<<<< HEAD

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
=======
import React, { useState } from 'react';
import { ChevronDown, Filter, Plus, Search, User } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from '../components/ui/Link';
>>>>>>> bizztrack/main

interface Client {
  id: string;
  name: string;
<<<<<<< HEAD
  company: string;
  email: string;
  phone: string;
  projects: number;
  invoices: number;
  totalSpent: number;
  initials: string;
}

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const clients: Client[] = [
    {
      id: "1",
      name: "John Smith",
      company: "Acme Inc",
      email: "john.smith@acme.com",
      phone: "+1 (555) 123-4567",
      projects: 8,
      invoices: 12,
      totalSpent: 12500,
      initials: "JS",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      company: "TechGiant Co",
      email: "sarah.j@techgiant.com",
      phone: "+1 (555) 234-5678",
      projects: 5,
      invoices: 7,
      totalSpent: 10800,
      initials: "SJ",
    },
    {
      id: "3",
      name: "Michael Brown",
      company: "Globe Media",
      email: "michael.b@globemedia.com",
      phone: "+1 (555) 345-6789",
      projects: 4,
      invoices: 5,
      totalSpent: 9500,
      initials: "MB",
    },
    {
      id: "4",
      name: "Emily Davis",
      company: "Bright Solutions",
      email: "emily.d@brightsolutions.com",
      phone: "+1 (555) 456-7890",
      projects: 3,
      invoices: 4,
      totalSpent: 7200,
      initials: "ED",
    },
    {
      id: "5",
      name: "Robert Wilson",
      company: "Nova Systems",
      email: "robert.w@novasystems.com",
      phone: "+1 (555) 567-8901",
      projects: 2,
      invoices: 3,
      totalSpent: 5400,
      initials: "RW",
    },
    {
      id: "6",
      name: "Lisa Thompson",
      company: "Quantum Research",
      email: "lisa.t@quantumresearch.com",
      phone: "+1 (555) 678-9012",
      projects: 6,
      invoices: 9,
      totalSpent: 11200,
      initials: "LT",
    },
    {
      id: "7",
      name: "David Clark",
      company: "Sunrise Media",
      email: "david.c@sunrisemedia.com",
      phone: "+1 (555) 789-0123",
      projects: 3,
      invoices: 4,
      totalSpent: 6800,
      initials: "DC",
    },
    {
      id: "8",
      name: "Jennifer Lee",
      company: "Blue Ocean Inc",
      email: "jennifer.l@blueocean.com",
      phone: "+1 (555) 890-1234",
      projects: 5,
      invoices: 6,
      totalSpent: 8900,
      initials: "JL",
    },
    {
      id: "9",
      name: "William Green",
      company: "Green Planet Solutions",
      email: "william.g@greenplanet.com",
      phone: "+1 (555) 901-2345",
      projects: 2,
      invoices: 3,
      totalSpent: 4200,
      initials: "WG",
    },
    {
      id: "10",
      name: "Amanda White",
      company: "Silver Technologies",
      email: "amanda.w@silvertech.com",
      phone: "+1 (555) 012-3456",
      projects: 4,
      invoices: 7,
      totalSpent: 9800,
      initials: "AW",
    },
  ];

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClients = filteredClients.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Clients</h1>
            <p className="text-muted-foreground">
              Manage and track all your clients
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-1" /> Add Client
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Total Clients</p>
            <p className="text-2xl font-bold">32</p>
          </div>
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Active Projects</p>
            <p className="text-2xl font-bold">18</p>
          </div>
          <div className="dashboard-card">
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-bold">$45,231.89</p>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Clients</CardTitle>
            <CardDescription>
              View and manage your client relationships.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and filter */}
            <div className="flex mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search clients..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Clients Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Invoices</TableHead>
                    <TableHead className="text-right">Total Spent</TableHead>
                    <TableHead className="w-[60px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedClients.length > 0 ? (
                    paginatedClients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 bg-refrens-light-blue text-primary">
                              <AvatarFallback>{client.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{client.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {client.company}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm">{client.email}</p>
                          <p className="text-xs text-muted-foreground">
                            {client.phone}
                          </p>
                        </TableCell>
                        <TableCell>{client.projects}</TableCell>
                        <TableCell>{client.invoices}</TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(client.totalSpent)}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Client</DropdownMenuItem>
                              <DropdownMenuItem>Edit Client</DropdownMenuItem>
                              <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                Delete Client
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        No clients found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {filteredClients.length > 0 && (
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(startIndex + itemsPerPage, filteredClients.length)} of{" "}
                  {filteredClients.length} entries
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm">
                    Page {currentPage} of {totalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Clients;
=======
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
>>>>>>> bizztrack/main
