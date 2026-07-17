import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function ScorePieChart() {
  
  const chartData = [
    { name: 'Originality & Innovation', value: 20 },
    { name: 'Research Rigour & Quality of Thinking', value: 20 },
    { name: 'Communication & Presentation', value: 20 },
    { name: 'Relevance & Impact for Nigeria / Africa', value: 20 },
    { name: 'Evidence of Original Work', value: 20 },
  ];

  const winners = {
    first: { name: "Astrohub — UNICAL" },
    second: { name: "Space Club — Univ. of Jos" },
    third: { name: "Space Club — FUTMINNA II" }
  };

  const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899'];

  return (
    <div className="w-full min-h-screen bg-[#F7F3EB] flex flex-col items-center justify-start p-6 md:p-12 box-border">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-black text-slate-800 mb-2">How Clubs were Scored</h1>
        <p className="text-slate-600 font-medium text-sm">Each club's final position was determined by combining expert evaluation and public participation.</p>
      </header>
      
      <div className="w-full max-w-xl flex flex-col items-center gap-16">
        
        <div className="w-full h-[320px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, right: 100, bottom: 20, left: 157 }}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={75}
                paddingAngle={0}
                dataKey="value"
                label={({ name }) => name}
                labelLine={true}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full flex justify-center items-end h-[260px] px-4">
          <div className="flex items-end justify-center w-full max-w-sm gap-2">
            
            <div className="flex flex-col items-center flex-1">
              <span className="text-xs font-black text-slate-700 mb-2 text-center truncate w-full px-1">
                {winners.second.name}
              </span>
              <div className="w-full h-28 bg-slate-300 border-t-4 border-slate-400 rounded-t-md flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="text-4xl font-black text-[#C0C0C0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] select-none">
                  2
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center flex-1 z-10">
              <span className="text-sm font-black text-amber-600 mb-2 text-center truncate w-full px-1 animate-pulse">
                🏆 {winners.first.name}
              </span>
              <div className="w-full h-40 bg-amber-500 border-t-4 border-amber-600 rounded-t-md flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105">
                <span className="text-6xl font-black text-[#FFD700] drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] select-none">
                  1
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center flex-1">
              <span className="text-xs font-black text-slate-600 mb-2 text-center truncate w-full px-1">
                {winners.third.name}
              </span>
              <div className="w-full h-16 bg-orange-700 border-t-4 border-orange-800 rounded-t-md flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105">
                <span className="text-3xl font-black text-[#CD7F32] drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] select-none">
                  3
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}