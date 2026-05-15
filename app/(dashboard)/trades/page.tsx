import React from "react";
import { Search, Filter, Eye, X, AlertTriangle, ArrowLeftRight } from "lucide-react";

const trades = [
  {
    id: "TRD-001",
    userA: { name: "Alex Brown", color: "bg-blue-500", initial: "A" },
    userB: { name: "Chris Lee", color: "bg-emerald-500", initial: "C" },
    items: { a: "Nike Dunk Low", b: "Casio G-Shock" },
    valueMatch: 95,
    verification: "Verified",
    status: "Pending",
  },
  {
    id: "TRD-002",
    userA: { name: "Emma Davis", color: "bg-indigo-500", initial: "E" },
    userB: { name: "Ryan Clark", color: "bg-green-600", initial: "R" },
    items: { a: "Pokemon Card Set", b: "Adidas Yeezy" },
    valueMatch: 88,
    verification: "Direct",
    status: "Accepted",
  },
  {
    id: "TRD-003",
    userA: { name: "Tom Harris", color: "bg-violet-500", initial: "T" },
    userB: { name: "Lisa White", color: "bg-teal-500", initial: "L" },
    items: { a: "Apple Watch Ultra", b: "iPad Pro" },
    valueMatch: 92,
    verification: "Verified",
    status: "Completed",
  },
  {
    id: "TRD-004",
    userA: { name: "John Miller", color: "bg-blue-600", initial: "J" },
    userB: { name: "Sarah Johnson", color: "bg-emerald-600", initial: "S" },
    items: { a: "Rolex Datejust", b: "Omega Seamaster" },
    valueMatch: 78,
    verification: "Verified",
    status: "Disputed",
    hasAlert: true,
  },
  {
    id: "TRD-005",
    userA: { name: "Mike Brown", color: "bg-indigo-600", initial: "M" },
    userB: { name: "Kate Wilson", color: "bg-teal-600", initial: "K" },
    items: { a: "Jordan 4 Retro", b: "New Balance 550" },
    valueMatch: 85,
    verification: "Direct",
    status: "Pending",
  },
];

export default function TradesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Trades (BidSwap)</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Search by trade ID or user..."
            className="w-full bg-[#111111] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-zinc-300 focus:outline-none focus:border-[#155DFC] transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#111111] border border-white/5 px-4 py-2 rounded-xl text-zinc-300 hover:bg-white/5 transition-colors">
          <Filter size={18} />
          <span className="font-medium">Filter</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-zinc-500 text-sm">
                <th className="px-6 py-4 font-medium">Trade ID</th>
                <th className="px-6 py-4 font-medium">User A</th>
                <th className="px-6 py-4 font-medium">User B</th>
                <th className="px-6 py-4 font-medium">Offered Items</th>
                <th className="px-6 py-4 font-medium text-center">Value Match</th>
                <th className="px-6 py-4 font-medium">Verification</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {trades.map((trade) => (
                <tr key={trade.id} className="text-zinc-300 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-zinc-500">{trade.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${trade.userA.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {trade.userA.initial}
                      </div>
                      <span className="font-medium truncate max-w-[100px]">{trade.userA.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${trade.userB.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {trade.userB.initial}
                      </div>
                      <span className="font-medium truncate max-w-[100px]">{trade.userB.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-200">{trade.items.a}</span>
                      <ArrowLeftRight size={12} className="text-zinc-500 shrink-0" />
                      <span className="text-zinc-200">{trade.items.b}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 min-w-[100px] justify-center">
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden max-w-[60px]">
                        <div 
                          className={`h-full rounded-full ${
                            trade.valueMatch >= 90 ? 'bg-green-500' : trade.valueMatch >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${trade.valueMatch}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold">{trade.valueMatch}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        trade.verification === "Verified"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
                      }`}
                    >
                      {trade.verification}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        trade.status === "Completed"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : trade.status === "Accepted"
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                          : trade.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }`}
                    >
                      {trade.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <button className="hover:text-white transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="hover:text-red-500 transition-colors">
                        <X size={18} />
                      </button>
                      {trade.hasAlert && (
                        <button className="text-red-500 animate-pulse">
                          <AlertTriangle size={18} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
