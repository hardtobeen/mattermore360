import React from 'react';

interface HeaderProps {
  title: string;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, toggleSidebar }) => {
  return (
    <header className="h-20 bg-background/50 backdrop-blur-md border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8 z-20 sticky top-0">
      <div className="flex items-center gap-4">
        <button 
            onClick={toggleSidebar}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            title="Toggle Menu"
        >
            <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Breadcrumb-like title or section context */}
        <h2 className="text-lg font-medium text-gray-400 hidden sm:block">
            Platform <span className="mx-2">/</span> <span className="text-white font-semibold">{title}</span>
        </h2>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button className="relative p-2 text-gray-400 hover:text-primary transition-colors hover:bg-white/5 rounded-full">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-3 sm:pl-6 border-l border-border">
            <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none text-white">Sunset Resorts</p>
                <p className="text-xs text-primary">Premium Partner</p>
            </div>
            <div className="h-10 w-10 rounded-full border-2 border-primary/20 overflow-hidden shadow-sm">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbPfmWf77hOcDOCDIFa88lnYleVPX6DJ2tMRdRoskzDXPkX-KARn7U6-yd53rjRIIJFiaAxtxwbQ3AUN9X4_KBYokNbaHLibBD84mTsQWtS4-ou4ttvakrzxoCPd1meI6umzFDFEoNFZ9UOVf-NVwy6q5euh25tYeWTo8VpFHIZNbZvek3lm7CupoeDpEFTUitvEkJ8D8-lnDirSQFV-IDo0mq_D22M5S4COh7cRTZhvxo9V6cZ6O1BVTtyRXK9n9HXWV6Tl8hfci" 
                    alt="Property Logo" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;