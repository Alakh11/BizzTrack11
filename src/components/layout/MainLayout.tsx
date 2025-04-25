
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-refrens-bg">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
