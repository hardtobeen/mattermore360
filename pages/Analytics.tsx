import React from 'react';
import { BarChart, Bar, XAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';

const propertyData = [
  { name: 'Grand Plaza', views: 1240, leads: 412 },
  { name: 'Summit Ridge', views: 980, leads: 196 },
  { name: 'Oakwood Hts', views: 1560, leads: 702 },
  { name: 'The Legacy', views: 820, leads: 123 },
  { name: 'Harbor View', views: 1120, leads: 280 },
  { name: 'Azure Loft', views: 520, leads: 52 },
];

const trafficData = [
    { name: 'Website', value: 45, color: '#d4a573' },
    { name: 'Google Maps', value: 25, color: '#ffffff' }, // using white/40 in CSS, here simulated
    { name: 'Social Media', value: 20, color: '#a0a0a0' },
    { name: 'Email', value: 10, color: '#505050' },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics Performance</h1>
          <p className="text-gray-400 text-sm">Deep dive into your property marketing metrics</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none justify-center bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-sm">download</span> Export
          </button>
          <button className="flex-1 md:flex-none bg-primary text-background px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all">
            Update Dashboard
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filters & Donut */}
        <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface border border-border rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined">filter_list</span>
                    <h3 className="font-semibold">Analytics Filters</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date Range</label>
                        <button className="w-full bg-background border border-border rounded-lg p-3 flex items-center justify-between text-sm hover:border-primary/50 transition-colors">
                            <span className="flex items-center gap-2 text-gray-300">
                                <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                                Oct 1, 2023 - Oct 31, 2023
                            </span>
                            <span className="material-symbols-outlined text-gray-500">expand_more</span>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Select Property</label>
                        <select className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:ring-primary focus:border-primary text-gray-300 outline-none">
                            <option>All Properties (12)</option>
                            <option>The Grand Plaza</option>
                            <option>Summit Ridge Apartments</option>
                            <option>Oakwood Heights</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Traffic Sources Donut */}
            <div className="bg-surface border border-border rounded-xl p-6 min-h-[400px] flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="font-semibold text-lg text-white">Traffic Sources</h3>
                    <span className="material-symbols-outlined text-gray-600">info</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center relative">
                    {/* Simulated Donut Chart */}
                    <div className="w-48 h-48 rounded-full border-[16px] border-primary flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-[-16px] rounded-full border-[16px] border-t-white/20 border-r-white/40 border-b-transparent border-l-transparent rotate-45 pointer-events-none"></div>
                        <div className="text-center">
                            <span className="text-3xl font-bold text-white">8.4k</span>
                            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Total Visits</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 w-full gap-4 mt-8">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="text-xs text-gray-400">Website (45%)</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/40"></span><span className="text-xs text-gray-400">Google Maps (25%)</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/20"></span><span className="text-xs text-gray-400">Social Media (20%)</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/10"></span><span className="text-xs text-gray-400">Email (10%)</span></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bar Chart Section */}
        <div className="lg:col-span-8">
            <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col min-h-[400px]">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                    <div>
                        <h3 className="font-semibold text-lg text-white">Performance by Property</h3>
                        <p className="text-sm text-gray-500">Comparison of Views and Lead Conversion</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-primary"></span><span className="text-gray-400">Views</span></div>
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-white/60"></span><span className="text-gray-400">Leads</span></div>
                    </div>
                </div>
                <div className="flex-1 w-full min-h-[300px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={propertyData} barGap={2} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fill: '#6b7280', fontSize: 10, transform: 'rotate(-45)', textAnchor: 'end'}} 
                                interval={0}
                                height={60}
                            />
                            <RechartsTooltip 
                                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                contentStyle={{ backgroundColor: '#1e1914', borderColor: '#3d352c', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Bar dataKey="views" fill="#d4a573" radius={[2, 2, 0, 0]} barSize={12} />
                            <Bar dataKey="leads" fill="rgba(255,255,255,0.6)" radius={[2, 2, 0, 0]} barSize={12} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-white">Conversion Funnel</h3>
                    <p className="text-gray-500">Tracking the customer journey from discovery to booking</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full self-start sm:self-auto">
                    <span className="text-primary font-bold text-sm">Overall Efficiency: 12.4%</span>
                </div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-stretch gap-2">
                 {/* Step 1 */}
                 <div className="flex-1 relative group">
                    <div className="bg-primary h-24 rounded-lg md:rounded-l-lg md:rounded-r-none flex flex-col items-center justify-center p-4 relative z-10 clip-path-funnel-start">
                        <span className="text-background font-black text-2xl">24,500</span>
                        <span className="text-background/80 text-[10px] font-bold uppercase tracking-widest">Views</span>
                    </div>
                 </div>
                 <div className="flex items-center justify-center py-2 md:py-0 px-2">
                    <div className="flex flex-col items-center transform rotate-90 md:rotate-0 transition-transform">
                        <span className="text-xs font-bold text-primary mb-1 md:mb-0 transform -rotate-90 md:rotate-0">32%</span>
                        <span className="material-symbols-outlined text-primary">arrow_forward</span>
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex-1 relative group">
                    <div className="bg-primary/80 h-24 rounded-lg md:rounded-none flex flex-col items-center justify-center p-4 relative z-10">
                        <span className="text-background font-black text-2xl">7,840</span>
                        <span className="text-background/80 text-[10px] font-bold uppercase tracking-widest">Clicks</span>
                    </div>
                 </div>
                 <div className="flex items-center justify-center py-2 md:py-0 px-2">
                    <div className="flex flex-col items-center transform rotate-90 md:rotate-0 transition-transform">
                        <span className="text-xs font-bold text-primary/80 mb-1 md:mb-0 transform -rotate-90 md:rotate-0">15%</span>
                        <span className="material-symbols-outlined text-primary/80">arrow_forward</span>
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex-1 relative group">
                    <div className="bg-primary/60 h-24 rounded-lg md:rounded-none flex flex-col items-center justify-center p-4 relative z-10">
                        <span className="text-background font-black text-2xl">1,176</span>
                        <span className="text-background/80 text-[10px] font-bold uppercase tracking-widest">Form Subs</span>
                    </div>
                 </div>
                 <div className="flex items-center justify-center py-2 md:py-0 px-2">
                    <div className="flex flex-col items-center transform rotate-90 md:rotate-0 transition-transform">
                        <span className="text-xs font-bold text-primary/60 mb-1 md:mb-0 transform -rotate-90 md:rotate-0">45%</span>
                        <span className="material-symbols-outlined text-primary/60">arrow_forward</span>
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex-1 relative group">
                    <div className="bg-primary/40 h-24 rounded-lg md:rounded-r-lg md:rounded-l-none flex flex-col items-center justify-center p-4 relative z-10">
                        <span className="text-background font-black text-2xl">529</span>
                        <span className="text-background/80 text-[10px] font-bold uppercase tracking-widest">Bookings</span>
                    </div>
                 </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 border-b border-r-0 md:border-b-0 md:border-r border-border even:border-l md:even:border-l-0">
                    <p className="text-gray-600 text-[10px] uppercase font-bold mb-1">Cost Per View</p>
                    <p className="text-lg font-bold text-white">$0.04</p>
                </div>
                <div className="p-4 border-b md:border-b-0 md:border-r border-border">
                    <p className="text-gray-600 text-[10px] uppercase font-bold mb-1">Click Thru Rate</p>
                    <p className="text-lg font-bold text-white">4.2%</p>
                </div>
                <div className="p-4 border-r-0 md:border-r border-border">
                    <p className="text-gray-600 text-[10px] uppercase font-bold mb-1">Form Lead Quality</p>
                    <p className="text-lg font-bold text-white">High</p>
                </div>
                <div className="p-4">
                    <p className="text-gray-600 text-[10px] uppercase font-bold mb-1">Avg. Booking Value</p>
                    <p className="text-lg font-bold text-white">$1,450</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Analytics;