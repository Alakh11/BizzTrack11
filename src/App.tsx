import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Invoices from './pages/Invoices';
import Login from './pages/Login';
import { Link } from './components/ui/Link';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // For demo, set to true
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <Clients />;
      case 'invoices':
        return <Invoices />;
      default:
        return <Dashboard />;
    }
  };

  // Update document title based on current page
  React.useEffect(() => {
    document.title = `Refrens - ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;
  }, [currentPage]);

  // Override the default href behavior to simulate routing
  React.useEffect(() => {
    const linkHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest('a');
      
      if (closestLink && closestLink.getAttribute('href')) {
        const href = closestLink.getAttribute('href');
        
        if (href && !href.startsWith('http') && href !== '#') {
          e.preventDefault();
          
          // Extract the page name from the URL
          const pageName = href.split('/')[1] || 'dashboard';
          setCurrentPage(pageName);
          
          // Update URL without page reload (for browser history)
          window.history.pushState({}, '', href);
        }
      }
    };

    document.addEventListener('click', linkHandler);
    
    return () => {
      document.removeEventListener('click', linkHandler);
    };
  }, []);

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;