import React from 'react';

const tours = [
    {
        title: "Oceanfront Suite Virtual Tour",
        date: "Updated 2 days ago",
        status: "PUBLISHED",
        featured: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        buttons: ["Open Tour"]
    },
    {
        title: "Penthouse B - 360 Walkthrough",
        date: "Updated 5 days ago",
        status: "PUBLISHED",
        featured: false,
        image: "https://images.unsplash.com/photo-1512918580421-b2feee0b8508?q=80&w=2074&auto=format&fit=crop",
        buttons: ["Open Tour"]
    },
    {
        title: "Lobby Renovation Concept",
        date: "Last sync 10 mins ago",
        status: "PROCESSING",
        featured: false,
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        overlayText: "RENDERING 75%",
        buttons: ["Coming Soon"]
    },
    {
        title: "Master Bedroom Panorama",
        date: "Updated 1 week ago",
        status: "PUBLISHED",
        featured: false,
        image: "https://images.unsplash.com/photo-1616594039964-40891a904d0f?q=80&w=2000&auto=format&fit=crop",
        buttons: ["Open Tour"]
    },
    {
        title: "Rooftop Garden Tour",
        date: "Updated 2 weeks ago",
        status: "PUBLISHED",
        featured: true,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
        buttons: ["Open Tour"]
    },
    {
        title: "Fitness Center 3D",
        date: "Updated 1 month ago",
        status: "DRAFT",
        featured: false,
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
        buttons: ["Continue Editing"]
    }
];

const Media: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-3xl font-bold text-white">My Media Library</h1>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                 <div className="bg-surface border border-border rounded-lg p-1 flex">
                     <button className="p-2 text-white bg-white/10 rounded"><span className="material-symbols-outlined text-sm">grid_view</span></button>
                     <button className="p-2 text-gray-500 hover:text-white"><span className="material-symbols-outlined text-sm">list</span></button>
                 </div>
                 <button className="bg-primary hover:bg-primary-hover text-background px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                     + Request virtual tour
                 </button>
            </div>
        </div>

        {/* Filters */}
        <div className="flex gap-6 border-b border-border pb-4 overflow-x-auto scrollbar-hide">
            <button className="text-primary font-bold border-b-2 border-primary pb-4 -mb-4.5 whitespace-nowrap">All Tours</button>
            <button className="text-gray-400 font-medium hover:text-white pb-4 whitespace-nowrap">Published</button>
            <button className="text-gray-400 font-medium hover:text-white pb-4 whitespace-nowrap">Featured</button>
            <button className="text-gray-400 font-medium hover:text-white pb-4 whitespace-nowrap">Drafts</button>
            <span className="flex-1 min-w-[20px]"></span>
            <span className="text-xs text-gray-500 self-center whitespace-nowrap">Showing 12 projects</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, i) => (
                <div key={i} className="bg-surface rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="h-48 relative overflow-hidden">
                        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                        
                        <div className="absolute top-3 right-3 flex gap-2">
                             {tour.featured && <span className="bg-primary text-background text-[10px] font-bold px-2 py-1 rounded shadow-sm">FEATURED</span>}
                             <span className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${tour.status === 'PUBLISHED' ? 'bg-emerald-500 text-white' : tour.status === 'DRAFT' ? 'bg-gray-500 text-white' : 'bg-yellow-600 text-white'}`}>
                                 {tour.status}
                             </span>
                        </div>

                        {tour.overlayText && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-2"></div>
                                <span className="text-xs font-bold text-primary">{tour.overlayText}</span>
                            </div>
                        )}
                    </div>
                    <div className="p-5">
                        <h3 className="text-white font-bold mb-1 truncate">{tour.title}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                            {tour.date}
                        </div>
                        <div className="flex gap-2 mt-4">
                            <div className="flex gap-1">
                                <button className="p-2 bg-white/5 border border-border rounded text-gray-400 hover:text-white hover:border-primary/50"><span className="material-symbols-outlined text-sm">link</span></button>
                                <button className="p-2 bg-white/5 border border-border rounded text-gray-400 hover:text-white hover:border-primary/50"><span className="material-symbols-outlined text-sm">qr_code</span></button>
                            </div>
                            <button className={`flex-1 ${tour.status === 'PROCESSING' ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-white/5 text-primary border border-primary/30 hover:bg-primary hover:text-background'} rounded font-medium text-sm transition-colors`}>
                                {tour.buttons[0]}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Request New Card */}
            <div className="border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center p-8 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">add</span>
                </div>
                <h3 className="text-white font-bold mb-1">Request New Tour</h3>
                <p className="text-gray-500 text-sm text-center">Our experts will handle the rest</p>
            </div>
        </div>

        {/* Showcase Spotlight */}
        <div className="mt-10">
            <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <h2 className="text-xl font-bold text-white">Recommended for Showcase</h2>
            </div>
            <div className="bg-surface border border-border rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                 <div className="h-64 lg:h-auto relative">
                     <img src="https://images.unsplash.com/photo-1600596542815-e32c0d540e32?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury Home" />
                 </div>
                 <div className="p-8 flex flex-col justify-center">
                     <span className="inline-block bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider self-start mb-4">Spotlight Project</span>
                     <h2 className="text-3xl font-bold text-white mb-4">Elite Estate Virtual Marketing Package</h2>
                     <p className="text-gray-400 mb-8 leading-relaxed">
                         This project has received high engagement. Consider sharing the QR code on your printed marketing materials to increase traffic to the virtual walkthrough.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4">
                         <button className="bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                             <span className="material-symbols-outlined">share</span> Share Showcase
                         </button>
                         <button className="border border-border text-white hover:bg-white/5 px-6 py-3 rounded-lg font-bold transition-colors">
                             View Performance
                         </button>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default Media;