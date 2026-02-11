import React from 'react';

const requests = [
  { type: 'New Virtual Tour', property: '123 Maple St, Heights District', created: 'Oct 12, 2023', update: 'Oct 14, 2023', status: 'Pending', icon: 'view_in_ar', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
  { type: 'Update Photos', property: 'Luxury Penthouse A', created: 'Oct 10, 2023', update: 'Oct 11, 2023', status: 'In Progress', icon: 'photo_camera', iconBg: 'bg-blue-500/20', iconColor: 'text-blue-500' },
  { type: 'Floor Plan Revision', property: '88 Harbor View', created: 'Oct 05, 2023', update: 'Oct 06, 2023', status: 'Completed', icon: 'architecture', iconBg: 'bg-purple-500/20', iconColor: 'text-purple-500' },
  { type: 'Aerial Drone Shots', property: '456 Oak Ave', created: 'Oct 01, 2023', update: 'Oct 02, 2023', status: 'In Progress', icon: 'flight', iconBg: 'bg-orange-500/20', iconColor: 'text-orange-500' },
  { type: 'Walkthrough Video', property: 'Villa Azure', created: 'Sep 28, 2023', update: 'Sep 30, 2023', status: 'Completed', icon: 'videocam', iconBg: 'bg-red-500/20', iconColor: 'text-red-500' },
];

const Requests: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in h-full pb-8">
        {/* Left Col: Table */}
        <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Requests</h1>
                    <p className="text-gray-400">Track all requests between your team and MatterMore360.</p>
                </div>
                <button className="bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">add_circle</span> Create new request
                </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/20 whitespace-nowrap">All Requests</button>
                <button className="px-4 py-2 hover:bg-white/5 text-gray-400 rounded-full text-sm font-bold border border-transparent hover:border-white/10 transition-all whitespace-nowrap">Pending</button>
                <button className="px-4 py-2 hover:bg-white/5 text-gray-400 rounded-full text-sm font-bold border border-transparent hover:border-white/10 transition-all whitespace-nowrap">In Progress</button>
                <button className="px-4 py-2 hover:bg-white/5 text-gray-400 rounded-full text-sm font-bold border border-transparent hover:border-white/10 transition-all whitespace-nowrap">Completed</button>
            </div>

            <div className="bg-surface border border-border rounded-xl overflow-hidden">
                 <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse min-w-[600px]">
                         <thead className="bg-white/5 text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                             <tr>
                                 <th className="p-4 pl-6">Type</th>
                                 <th className="p-4">Property</th>
                                 <th className="p-4">Created On</th>
                                 <th className="p-4">Last Update</th>
                                 <th className="p-4 pr-6 text-right">Status</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-border/50 text-sm">
                             {requests.map((req, i) => (
                                 <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                                     <td className="p-4 pl-6">
                                         <div className="flex items-center gap-3">
                                             <div className={`p-2 rounded-lg ${req.iconBg} ${req.iconColor}`}>
                                                 <span className="material-symbols-outlined text-lg">{req.icon}</span>
                                             </div>
                                             <span className="font-bold text-white">{req.type}</span>
                                         </div>
                                     </td>
                                     <td className="p-4 text-gray-300">{req.property}</td>
                                     <td className="p-4 text-gray-500">{req.created}</td>
                                     <td className="p-4 text-gray-500">{req.update}</td>
                                     <td className="p-4 pr-6 text-right">
                                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold 
                                            ${req.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' : 
                                              req.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' : 
                                              'bg-emerald-500/20 text-emerald-500'}`}>
                                             {req.status}
                                         </span>
                                     </td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
            </div>
        </div>

        {/* Right Col: Messages */}
        <div className="lg:col-span-1 space-y-6">
             <div className="bg-surface border border-border rounded-xl p-6">
                 <div className="flex justify-between items-center mb-6">
                     <h3 className="font-bold text-white uppercase text-xs tracking-wider">Latest Messages</h3>
                     <button className="text-primary text-xs font-bold hover:underline">View All</button>
                 </div>
                 <div className="space-y-6">
                     {[
                         { user: 'MatterMore Team', msg: '"Tour processed - ready for review on Maple St project. Let us know if..."', time: '2h ago', bg: 'bg-primary/10', color: 'text-primary' },
                         { user: 'Alex (Lead Editor)', msg: '"Need access code for the garage at Luxury Penthouse A to complet..."', time: 'Yesterday', bg: 'bg-white/10', color: 'text-gray-300' },
                         { user: 'System Update', msg: '"Photos for \'Luxury Penthouse A\' have been updated and are now..."', time: 'Oct 11', bg: 'bg-blue-500/10', color: 'text-blue-500', icon: 'system_update' },
                         { user: 'MatterMore Team', msg: '"Floor plan revisions for Harbor View are complete. Check your..."', time: 'Oct 06', bg: 'bg-primary/10', color: 'text-primary' },
                     ].map((msg, i) => (
                         <div key={i} className="flex gap-4 group cursor-pointer">
                             <div className={`w-10 h-10 rounded-full ${msg.bg} flex items-center justify-center shrink-0 border border-white/5`}>
                                 <span className={`material-symbols-outlined text-lg ${msg.color}`}>{msg.icon || 'smart_toy'}</span>
                             </div>
                             <div>
                                 <div className="flex justify-between items-center mb-1">
                                     <p className="font-bold text-white text-sm">{msg.user}</p>
                                     <span className="text-[10px] text-gray-500">{msg.time}</span>
                                 </div>
                                 <p className="text-gray-400 text-xs italic leading-relaxed group-hover:text-white transition-colors">{msg.msg}</p>
                             </div>
                         </div>
                     ))}
                 </div>
                 
                 <div className="mt-8 bg-background/50 rounded-lg p-4 border border-border">
                     <div className="flex items-center gap-2 mb-2 text-primary">
                         <span className="material-symbols-outlined text-sm">info</span>
                         <span className="text-xs font-bold uppercase">Quick Tip</span>
                     </div>
                     <p className="text-xs text-gray-500">You can reply to any message directly by clicking on the request row in the table.</p>
                 </div>
             </div>

             <div className="bg-gradient-to-br from-surface to-background border border-primary/30 rounded-xl p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <h3 className="font-bold text-white text-lg mb-2 relative z-10">Need Help?</h3>
                 <p className="text-gray-400 text-sm mb-6 relative z-10">Our dedicated account managers are available 24/7 for urgent requests.</p>
                 <button className="w-full border border-primary text-primary hover:bg-primary hover:text-background font-bold py-3 rounded-lg transition-all relative z-10">
                     Contact Support
                 </button>
             </div>
        </div>
    </div>
  );
};

export default Requests;