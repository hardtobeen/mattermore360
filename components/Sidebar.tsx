import React from 'react';
import { ViewState } from '../App';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  isCollapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isCollapsed = false }) => {
  // Logic: "Collapsed" only applies visually if we are on desktop (implicit via parent width).
  // However, since the parent controls width via CSS class, we just render conditionally based on prop.
  // Note: On mobile, the parent is w-64 when open, so isCollapsed (which is !isOpen) would be false.
  // When closed on mobile, sidebar is hidden, so this render doesn't matter much.
  // Effectively: Desktop Open -> isCollapsed=false. Desktop Closed -> isCollapsed=true.

  const menuItems: { id: ViewState; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: 'grid_view' },
    { id: 'media', label: 'Virtual Tours', icon: 'view_in_ar' },
    { id: 'chatbot', label: 'AI Chatbot', icon: 'smart_toy' },
    { id: 'analytics', label: 'Analytics', icon: 'bar_chart' },
    { id: 'requests', label: 'Requests', icon: 'assignment' },
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header / Logo */}
      <div className={`h-20 flex items-center border-b border-border/50 transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'px-6'}`}>
        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
             {/* Logo SVG */}
             <div className="relative w-8 h-8 flex items-center justify-center text-primary shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gold-gradient" x1="0" y1="0" x2="24" y2="24">
                            <stop offset="0%" stopColor="#d4a573" />
                            <stop offset="100%" stopColor="#f3dca6" />
                        </linearGradient>
                    </defs>
                    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="url(#gold-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6.5L16.5 9V14L12 16.5L7.5 14V9L12 6.5Z" stroke="url(#gold-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             
             {!isCollapsed && (
                <span className="text-xl font-bold tracking-tight text-primary whitespace-nowrap overflow-hidden animate-fade-in">
                    MatterMore360
                </span>
             )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center transition-all duration-200 group rounded-lg relative
              ${isCollapsed ? 'justify-center py-3 px-2' : 'gap-3 px-4 py-3'}
              ${currentView === item.id
                ? 'bg-primary text-background font-bold shadow-lg shadow-primary/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'}
            `}
            title={isCollapsed ? item.label : undefined}
          >
            <span className={`material-symbols-outlined shrink-0 transition-transform duration-200 ${isCollapsed ? 'text-2xl' : 'text-xl'} ${currentView === item.id ? 'fill-current' : ''}`}>
              {item.icon}
            </span>
            
            {!isCollapsed && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden">{item.label}</span>
            )}

            {/* Tooltip for collapsed mode hover */}
            {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-surface border border-border rounded text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                    {item.label}
                </div>
            )}
          </button>
        ))}
      </div>

      {/* Footer / Profile */}
      <div className={`border-t border-border/50 transition-all duration-300 ${isCollapsed ? 'p-2' : 'p-4'}`}>
        <button className={`w-full flex items-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors ${isCollapsed ? 'justify-center py-3' : 'gap-3 px-4 py-3'}`}>
          <span className="material-symbols-outlined shrink-0">settings</span>
          {!isCollapsed && <span className="text-sm font-medium whitespace-nowrap">Settings</span>}
        </button>
        
        <div className={`mt-4 flex items-center rounded-lg ${isCollapsed ? 'justify-center' : 'gap-3 px-4 py-2'}`}>
            <div className="w-8 h-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                AM
            </div>
            {!isCollapsed && (
                <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="text-sm font-medium text-white truncate">Alex Morgan</p>
                    <p className="text-xs text-gray-500 truncate">Admin</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;