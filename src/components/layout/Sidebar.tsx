<<<<<<< HEAD

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  Users,
  ClipboardList,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    {
      name: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      href: "/",
    },
    {
      name: "Invoices",
      icon: <FileText className="h-5 w-5" />,
      href: "/invoices",
    },
    {
      name: "Clients",
      icon: <Users className="h-5 w-5" />,
      href: "/clients",
    },
    {
      name: "Services",
      icon: <ClipboardList className="h-5 w-5" />,
      href: "/services",
    },
    {
      name: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobileMenu}
          className="relative"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="logo-text">Refrens</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link",
                  location.pathname === item.href && "nav-link-active"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile & Logout */}
          <div className="border-t border-border p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-refrens-light-blue flex items-center justify-center">
                <span className="font-medium text-primary">JD</span>
              </div>
              <div>
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile view */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
=======
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
>>>>>>> bizztrack/main
