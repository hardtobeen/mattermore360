import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', views: 4000 },
  { name: 'Tue', views: 3000 },
  { name: 'Wed', views: 2000 },
  { name: 'Thu', views: 2780 },
  { name: 'Fri', views: 1890 },
  { name: 'Sat', views: 2390 },
  { name: 'Sun', views: 3490 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome & Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome back, Sunset Resorts</h1>
          <p className="text-gray-400">Here's how your virtual tours are performing this week.</p>
        </div>
        <div className="flex flex-col gap-2 min-w-[240px]">
          <label className="text-xs font-bold uppercase tracking-wider text-primary">Property Selector</label>
          <div className="relative">
            <select className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none transition-all text-white outline-none">
              <option>All Properties</option>
              <option>Infinity Pool Villa</option>
              <option>Ocean View Suite</option>
              <option>Royal Penthouse</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary">expand_more</span>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Views', value: '18,420', change: '+14%', icon: 'visibility', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Leads Received', value: '126', change: '+21%', icon: 'person_add', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Tour Engagement', value: '3:58', change: '0%', icon: 'avg_time', color: 'text-gray-400', bg: 'bg-gray-400/10' },
          { label: 'Booking Requests', value: '42', change: '+9 new', icon: 'calendar_today', color: 'text-primary', bg: 'bg-primary/10' },
        ].map((kpi, index) => (
          <div key={index} className="bg-surface p-6 rounded-xl border border-border hover:border-primary/30 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform">{kpi.icon}</span>
              <span className={`text-sm font-bold px-2 py-1 rounded ${kpi.color} ${kpi.bg}`}>{kpi.change}</span>
            </div>
            <p className="text-gray-400 text-sm font-medium">{kpi.label}</p>
            <p className="text-2xl font-bold mt-1 text-white">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Charts & Highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Chart */}
        <div className="lg:col-span-7 bg-surface p-6 rounded-xl border border-border flex flex-col h-[400px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white">Views Over Time</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold rounded bg-primary/10 text-primary border border-primary/20">7D</button>
              <button className="px-3 py-1 text-xs font-bold rounded hover:bg-primary/10 text-gray-400 transition-colors">30D</button>
            </div>
          </div>
          <div className="flex-grow w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4a573" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4a573" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#3d352c" tick={{fill: '#6b7280', fontSize: 10}} tickLine={false} axisLine={false} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#1e1914', borderColor: '#3d352c', borderRadius: '8px' }}
                    itemStyle={{ color: '#d4a573' }}
                />
                <Area type="monotone" dataKey="views" stroke="#d4a573" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performer */}
        <div className="lg:col-span-3 bg-surface rounded-xl border border-border overflow-hidden flex flex-col group">
          <div className="h-40 relative overflow-hidden">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs11F0-vDtpXvrjVdcmBO_g-Cjmz7fLyLClvfHMw5-B2dz8uETaekPO3AIaKFhqglW7e3f8mwRh3OWkGN91AaAe0InanQHx4ULZ0yiKcX7Uxx5gK_CqOvxWArIY7oi2NSFWurH4d7nEXeaygjFNdR1VT5fXsP2sCNNV3XANonAViV-aTLIWE1scCqNL_sNYBgsvCXiWe6WsZqshCrbEIoRLVmE0_XABclmzEDaOMuf0w97yon-LtdWQ9TciSjH6GA50jnefVPs3Z1S" 
                alt="Infinity Pool Villa" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-background/80 px-2 py-1 rounded backdrop-blur-sm">Top Performer</span>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-lg font-bold mb-1 text-white">Infinity Pool Villa</h3>
            <div className="flex items-center gap-2 mb-6 text-gray-400">
              <span className="material-symbols-outlined text-sm">visibility</span>
              <span className="text-sm">4,205 views this week</span>
            </div>
            <div className="mt-auto">
              <button className="w-full bg-primary hover:bg-primary-hover text-background font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">open_in_new</span>
                Open Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col">
          <div className="p-5 border-b border-border flex justify-between items-center">
            <h3 className="font-bold text-white">Recent Leads</h3>
            <button className="text-xs font-bold text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 text-[10px] font-bold uppercase text-gray-500 tracking-wider">Name</th>
                  <th className="p-4 text-[10px] font-bold uppercase text-gray-500 tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                    { name: 'James Wilson', detail: 'UK • Royal Suite', status: 'New', statusColor: 'bg-primary/20 text-primary' },
                    { name: 'Elena Rodriguez', detail: 'ES • Infinity Pool', status: 'Contacted', statusColor: 'bg-emerald-500/10 text-emerald-500' },
                    { name: 'M. Tanaka', detail: 'JP • Ocean View', status: 'New', statusColor: 'bg-primary/20 text-primary' }
                ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-4">
                            <p className="text-sm font-bold text-white">{row.name}</p>
                            <p className="text-xs text-gray-500">{row.detail}</p>
                        </td>
                        <td className="p-4">
                            <span className={`inline-block px-2 py-1 rounded text-[10px] font-black uppercase ${row.statusColor}`}>{row.status}</span>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Booking Requests */}
        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex justify-between items-center">
            <h3 className="font-bold text-white">Booking Requests</h3>
            <span className="material-symbols-outlined text-primary cursor-pointer">more_horiz</span>
          </div>
          <div className="divide-y divide-border/50">
            {[
                { initials: 'SR', name: 'Sarah Richards', detail: 'Aug 22-29 • Penthouse' },
                { initials: 'DB', name: 'David Beckham', detail: 'Sep 05-12 • Villa 402' },
                { initials: 'LC', name: 'Linda Chen', detail: 'Dec 20-27 • Suite A' }
            ].map((req, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-background transition-all">
                            {req.initials}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">{req.name}</p>
                            <p className="text-xs text-gray-500">{req.detail}</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary">chevron_right</span>
                </div>
            ))}
          </div>
        </div>

        {/* Visitor Insights */}
        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border">
            <h3 className="font-bold text-white">Visitor Insights</h3>
          </div>
          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Most Frequent Questions</p>
            <div className="space-y-4">
              {[
                { q: '"Is breakfast included?"', val: 85, count: 37 },
                { q: '"Airport transfer cost?"', val: 62, count: 24 },
                { q: '"Pool accessibility hours?"', val: 48, count: 19 },
                { q: '"Early check-in availability?"', val: 30, count: 12 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                    <div className="flex flex-col w-full mr-4">
                        <span className="text-sm font-medium text-gray-300">{item.q}</span>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${item.val}%` }}></div>
                        </div>
                    </div>
                    <span className="text-sm font-bold text-primary">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;