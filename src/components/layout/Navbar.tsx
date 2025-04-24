import React, { useState } from 'react';
import { Bell, ChevronDown, HelpCircle, Menu, Search, X } from 'lucide-react';
import { Link } from '../ui/Link';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            
            {showSearch && (
              <div className="fixed inset-0 z-50 bg-white md:hidden">
                <div className="flex items-center p-4 border-b">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search"
                      autoFocus
                    />
                  </div>
                  <button
                    type="button"
                    className="ml-2 text-gray-500"
                    onClick={() => setShowSearch(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            )}
            
            <button
              type="button"
              className="md:hidden ml-2 p-1 text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setShowSearch(true)}
            >
              <Search size={20} />
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <HelpCircle size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </Link>
            <div className="relative inline-block text-left">
              <div className="flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img 
                    className="h-8 w-8 rounded-full" 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="User profile" 
                  />
                  <span className="hidden md:block">John Doe</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;