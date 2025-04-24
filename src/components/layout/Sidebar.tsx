import React from 'react';
import { 
  Home, 
  Users, 
  FileText, 
  CreditCard, 
  PieChart, 
  Settings, 
  ChevronDown, 
  LogOut
} from 'lucide-react';
import { Link } from '../ui/Link';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="h-full flex flex-col">
        <div className="h-16 px-6 flex items-center border-b border-gray-200">
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold text-blue-600">refrens</span>
            </Link>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-5">
            <Link 
              href="/dashboard" 
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            
            <div className="mt-1">
              <div className="flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50">
                <div className="flex items-center">
                  <FileText className="mr-3 h-5 w-5" />
                  Invoices
                </div>
                <ChevronDown size={16} />
              </div>
              <div className="pl-10 space-y-1">
                <Link href="/invoices" className="block px-2 py-1 text-sm text-gray-500 hover:text-gray-900">
                  All Invoices
                </Link>
                <Link href="/invoices/create" className="block px-2 py-1 text-sm text-gray-500 hover:text-gray-900">
                  Create Invoice
                </Link>
              </div>
            </div>
            
            <Link
              href="/clients"
              className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Users className="mr-3 h-5 w-5" />
              Clients
            </Link>
            
            <Link
              href="/expenses"
              className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <CreditCard className="mr-3 h-5 w-5" />
              Expenses
            </Link>
            
            <Link
              href="/reports"
              className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <PieChart className="mr-3 h-5 w-5" />
              Reports
            </Link>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <Link
            href="/settings"
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <Link
            href="/logout"
            className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;