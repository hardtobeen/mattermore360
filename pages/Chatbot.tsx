import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const engagementData = [
  { time: '12am', val: 20 }, { time: '1am', val: 15 }, { time: '2am', val: 10 }, 
  { time: '3am', val: 12 }, { time: '4am', val: 25 }, { time: '5am', val: 30 },
  { time: '6am', val: 45 }, { time: '7am', val: 55 }, { time: '8am', val: 65 },
  { time: '9am', val: 75 }, { time: '10am', val: 80 }, { time: '11am', val: 60 },
  { time: '12pm', val: 50 }, { time: '1pm', val: 40 }, { time: '2pm', val: 35 },
  { time: '3pm', val: 45 }, { time: '4pm', val: 55 }, { time: '5pm', val: 40 },
  { time: '6pm', val: 30 }, { time: '7pm', val: 25 }, { time: '8pm', val: 20 },
  { time: '9pm', val: 15 }, { time: '10pm', val: 10 }, { time: '11pm', val: 5 }
];

const Chatbot: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fade-in h-full pb-8">
      {/* Left Column: Analytics */}
      <div className="xl:col-span-2 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-white">AI Chatbot Analytics</h1>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-xl border border-border relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Total Conversations</p>
                <p className="text-4xl font-bold text-white mt-2">842</p>
                <p className="text-emerald-500 text-sm font-bold mt-2">↗ 12.5% <span className="text-gray-500 font-normal">vs last month</span></p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">chat_bubble</span>
              </div>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-border">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Avg. Response Time</p>
                <p className="text-4xl font-bold text-white mt-2">1.2s</p>
                <p className="text-emerald-500 text-sm font-bold mt-2">↓ 0.3s <span className="text-gray-500 font-normal">improvement</span></p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">timer</span>
              </div>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-border">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Lead Qualification Rate</p>
                <p className="text-4xl font-bold text-white mt-2">68%</p>
                <p className="text-primary text-sm mt-2">572 <span className="text-gray-500">Qualified Leads generated</span></p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Topics & Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl border border-border p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-white">Most Asked Questions</h3>
                    <button className="text-primary text-sm hover:underline">View All</button>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="text-gray-500 border-b border-border/50">
                        <tr>
                            <th className="pb-3 font-medium">Topic</th>
                            <th className="pb-3 font-medium text-right">Count</th>
                            <th className="pb-3 font-medium text-right">Change</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        <tr>
                            <td className="py-3 text-white">Pricing & Fees</td>
                            <td className="py-3 text-right text-white">342</td>
                            <td className="py-3 text-right text-emerald-500">+12%</td>
                        </tr>
                        <tr>
                            <td className="py-3 text-white">Amenities</td>
                            <td className="py-3 text-right text-white">215</td>
                            <td className="py-3 text-right text-emerald-500">+8%</td>
                        </tr>
                         <tr>
                            <td className="py-3 text-white">Booking Process</td>
                            <td className="py-3 text-right text-white">188</td>
                            <td className="py-3 text-right text-red-500">-2%</td>
                        </tr>
                         <tr>
                            <td className="py-3 text-white">Pet Policy</td>
                            <td className="py-3 text-right text-white">97</td>
                            <td className="py-3 text-right text-gray-500">0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-surface rounded-xl border border-border p-6 flex flex-col items-center justify-center">
                 <h3 className="font-bold text-white self-start mb-4">Quality Score</h3>
                 <div className="relative size-40 flex items-center justify-center">
                     {/* Circular Progress Mock using SVG */}
                     <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3d352c" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#d4a573" strokeWidth="3" strokeDasharray="89, 100" />
                     </svg>
                     <div className="absolute flex flex-col items-center">
                         <span className="text-4xl font-bold text-white">89%</span>
                         <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Excellent</span>
                     </div>
                 </div>
                 <div className="flex gap-4 mt-8 w-full">
                     <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                         <p className="text-[10px] text-gray-500 uppercase font-bold">Resolution Rate</p>
                         <p className="text-xl font-bold text-white">94%</p>
                     </div>
                     <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                         <p className="text-[10px] text-gray-500 uppercase font-bold">Sentiment</p>
                         <p className="text-xl font-bold text-emerald-500">Positive</p>
                     </div>
                 </div>
            </div>
        </div>

        {/* Engagement Activity Chart */}
        <div className="bg-surface rounded-xl border border-border p-6 flex flex-col flex-1 min-h-[300px]">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white">Engagement Activity</h3>
                <div className="flex bg-background rounded-lg p-1 border border-border">
                    <button className="px-3 py-1 bg-primary text-background text-xs font-bold rounded shadow-sm">Hourly</button>
                    <button className="px-3 py-1 text-gray-400 text-xs font-medium hover:text-white">Daily</button>
                </div>
            </div>
            <div className="flex-grow w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={engagementData}>
                        <Bar dataKey="val" fill="#937554" radius={[2, 2, 0, 0]}>
                            {engagementData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index >= 12 && index <= 18 ? '#d4a573' : '#6b5742'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                <span>12am</span><span>6am</span><span>12pm</span><span>6pm</span><span>11pm</span>
            </div>
        </div>
      </div>

      {/* Right Column: Live Session */}
      <div className="xl:col-span-1 h-full">
          <div className="bg-surface border border-border rounded-xl h-[600px] xl:h-full flex flex-col xl:sticky xl:top-6">
              <div className="p-4 border-b border-border flex justify-between items-center bg-white/5">
                  <div>
                      <h3 className="font-bold text-white text-sm">Live Session #4922</h3>
                      <div className="flex items-center gap-2 mt-1">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                          <span className="text-xs text-gray-400">Active now • 2m ago</span>
                      </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 cursor-pointer">more_horiz</span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-background/50">
                  {/* Message AI */}
                  <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold border border-primary/30 shrink-0">AI</div>
                      <div className="bg-surface border border-border/50 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                          <p className="text-sm text-gray-200 leading-relaxed">Hello! Welcome to The Aston Apartments virtual tour. How can I help you explore this property today?</p>
                          <span className="text-[10px] text-gray-600 block mt-2">10:42 AM</span>
                      </div>
                  </div>

                   {/* Message User */}
                   <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-primary p-3 rounded-2xl rounded-tr-none max-w-[85%] text-background">
                          <p className="text-sm font-medium leading-relaxed">Does the rent include utilities? Specifically internet and electricity?</p>
                          <span className="text-[10px] text-black/40 block mt-2 text-right">10:43 AM</span>
                      </div>
                  </div>

                  {/* Message AI */}
                  <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold border border-primary/30 shrink-0">AI</div>
                      <div className="bg-surface border border-border/50 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                          <p className="text-sm text-gray-200 leading-relaxed">The monthly rent includes water, sewage, and trash removal. Electricity and high-speed internet are billed separately by local providers.</p>
                          <span className="text-[10px] text-gray-600 block mt-2">10:43 AM</span>
                      </div>
                  </div>

                   {/* Message AI */}
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold border border-primary/30 shrink-0">AI</div>
                      <div className="bg-surface border border-border/50 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                          <p className="text-sm text-gray-200 leading-relaxed">Would you like me to send you a breakdown of estimated utility costs for a 2-bedroom unit?</p>
                          <span className="text-[10px] text-gray-600 block mt-2">10:43 AM</span>
                      </div>
                  </div>

                   {/* Message User */}
                   <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-primary p-3 rounded-2xl rounded-tr-none max-w-[85%] text-background">
                          <p className="text-sm font-medium leading-relaxed">Yes, that would be great. Thanks.</p>
                          <span className="text-[10px] text-black/40 block mt-2 text-right">10:44 AM</span>
                      </div>
                  </div>
              </div>

              {/* Bot Monitoring Footer */}
              <div className="p-4 bg-surface border-t border-border">
                  <div className="flex items-center gap-3 bg-background p-3 rounded-lg border border-border mb-3">
                      <div className="flex-1">
                          <p className="text-xs text-gray-400 italic">This session is being monitored by AI...</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/10 rounded hover:bg-white/20 transition"><span className="material-symbols-outlined text-sm">pan_tool</span></button>
                        <button className="p-2 bg-primary text-background rounded hover:brightness-110 transition"><span className="material-symbols-outlined text-sm">send</span></button>
                      </div>
                  </div>
                  <div className="text-center">
                    <button className="text-[10px] text-primary hover:underline flex items-center justify-center gap-1 w-full">
                        <span className="material-symbols-outlined text-[10px]">flag</span> Flag conversation for review
                    </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Chatbot;