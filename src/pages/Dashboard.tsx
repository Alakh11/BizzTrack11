import React from 'react';
import { Calendar, CreditCard, FileText, Users } from 'lucide-react';
import MetricsCard from '../components/dashboard/MetricsCard';
import RecentInvoice from '../components/dashboard/RecentInvoice';
import ActivityItem from '../components/dashboard/ActivityItem';
import Button from '../components/ui/Button';
import { Link } from '../components/ui/Link';
import BarChart from '../components/charts/BarChart';

const Dashboard: React.FC = () => {
  // Sample data
  const invoices = [
    { id: 'INV-001', client: 'Acme Inc.', amount: 120000, date: '12 May 2024', status: 'paid' as const },
    { id: 'INV-002', client: 'Globex Corp', amount: 65000, date: '08 May 2024', status: 'pending' as const },
    { id: 'INV-003', client: 'ABC Solutions', amount: 89500, date: '03 May 2024', status: 'overdue' as const },
  ];

  const activities = [
    { type: 'invoice' as const, title: 'Invoice Created', description: 'Invoice #INV-004 created for Widget Co.', time: '2h ago' },
    { type: 'payment' as const, title: 'Payment Received', description: 'Payment of ₹25,000 received from Acme Inc.', time: '5h ago' },
    { type: 'client' as const, title: 'New Client Added', description: 'Added Tech Solutions as a new client', time: '1d ago' },
    { type: 'expense' as const, title: 'Expense Recorded', description: 'Recorded ₹4,500 for office supplies', time: '2d ago' },
  ];

  const revenueData = [
    { label: 'Jan', value: 45000 },
    { label: 'Feb', value: 52000 },
    { label: 'Mar', value: 48000 },
    { label: 'Apr', value: 70000 },
    { label: 'May', value: 65000 },
    { label: 'Jun', value: 85000 },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your business.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricsCard
          title="Total Revenue"
          value="3,65,000"
          change={12}
          icon={<CreditCard size={20} />}
          currency
        />
        <MetricsCard
          title="Total Invoices"
          value="24"
          change={8}
          icon={<FileText size={20} />}
        />
        <MetricsCard
          title="Active Clients"
          value="18"
          change={5}
          icon={<Users size={20} />}
        />
        <MetricsCard
          title="Pending Invoices"
          value="5"
          change={-2}
          icon={<Calendar size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Revenue Overview</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Monthly</Button>
              <Button variant="outline" size="sm">Quarterly</Button>
              <Button variant="outline" size="sm">Yearly</Button>
            </div>
          </div>
          
          <BarChart data={revenueData} height={250} />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <Link href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All
            </Link>
          </div>
          
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                type={activity.type}
                title={activity.title}
                description={activity.description}
                time={activity.time}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Invoices</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="primary" size="sm">
              Create Invoice
            </Button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="divide-y divide-gray-200">
            {invoices.map((invoice, index) => (
              <RecentInvoice key={index} invoice={invoice} />
            ))}
          </div>
          
          <div className="mt-4 flex justify-center">
            <Link href="/invoices" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All Invoices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;