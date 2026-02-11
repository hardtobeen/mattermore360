import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Chatbot from './pages/Chatbot';
import Media from './pages/Media';
import Requests from './pages/Requests';

export type ViewState = 'overview' | 'analytics' | 'chatbot' | 'media' | 'requests';

const App: React.FC = () => {
  // Initialize state based on screen width: Open (expanded) on desktop, Closed on mobile
  const [currentView, setCurrentView] = useState<ViewState>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth >= 1024);

  // Optional: Handle resize to reset appropriate defaults if needed, 
  // but usually preserving user choice is better. 
  // We'll leave it simple for now.

  const renderContent = () => {
    switch (currentView) {
      case 'overview':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'chatbot':
        return <Chatbot />;
      case 'media':
        return <Media />;
      case 'requests':
        return <Requests />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-white overflow-hidden font-sans selection:bg-primary/30">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar Container 
          Mobile: Off-canvas drawer (translate-x)
          Desktop: Collapsible static panel (width change)
      */}
      <div className={`
        fixed inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out bg-[#16120e] border-r border-border
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isSidebarOpen ? 'w-64' : 'w-64 lg:w-20'}
      `}>
        {/* On mobile, if open, it's full width. On desktop, if !open, it's collapsed. */}
        <Sidebar 
            currentView={currentView} 
            onViewChange={setCurrentView} 
            isCollapsed={!isSidebarOpen} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
            title={currentView.charAt(0).toUpperCase() + currentView.slice(1)} 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;