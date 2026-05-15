import React from "react";
import { Search, Filter, Eye, RefreshCcw, DollarSign } from "lucide-react";

const orders = [
  {
    id: "ORD-1001",
    buyer: { name: "John Doe", color: "bg-blue-500", initial: "J" },
    seller: "SneakerKing",
    item: "Nike Air Jordan 1 Retro High OG",
    price: "$320",
    status: "Shipped",
    deliveryDate: "2026-04-26",
  },
  {
    id: "ORD-1002",
    buyer: { name: "Jane Smith", color: "bg-purple-500", initial: "J" },
    seller: "WatchMaster",
    item: "Rolex Submariner Date",
    price: "$8,500",
    status: "Pending",
    deliveryDate: "2026-04-30",
  },
  {
    id: "ORD-1003",
    buyer: { name: "Mike Johnson", color: "bg-indigo-500", initial: "M" },
    seller: "CardCollector",
    item: "Pokemon Card Charizard 1st Edition",
    price: "$450",
    status: "Delivered",
    deliveryDate: "2026-04-22",
  },
  {
    id: "ORD-1004",
    buyer: { name: "Sarah Wilson", color: "bg-pink-500", initial: "S" },
    seller: "SneakerHub",
    item: "Adidas Yeezy 350 Boost V2",
    price: "$280",
    status: "Shipped",
    deliveryDate: "2026-04-27",
  },
  {
    id: "ORD-1005",
    buyer: { name: "Alex Brown", color: "bg-blue-600", initial: "A" },
    seller: "TechDeals",
    item: "MacBook Pro M3 Max 16\"",
    price: "$3,200",
    status: "Pending",
    deliveryDate: "2026-04-29",
  },
  {
    id: "ORD-1006",
    buyer: { name: "Emma Davis", color: "bg-violet-600", initial: "E" },
    seller: "LuxuryTime",
    item: "Patek Philippe Nautilus",
    price: "$45,000",
    status: "Cancelled",
    deliveryDate: "—",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Orders & Purchases</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Search orders, buyers or items..."
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
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Buyer</th>
                <th className="px-6 py-4 font-medium">Seller</th>
                <th className="px-6 py-4 font-medium">Item</th>
                <th className="px-6 py-4 font-medium">Total Price</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-center">Delivery Date</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order.id} className="text-zinc-300 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-zinc-500">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${order.buyer.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {order.buyer.initial}
                      </div>
                      <span className="font-medium truncate max-w-[120px]">{order.buyer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-zinc-400 text-sm">{order.seller}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-zinc-200 text-sm font-medium">{order.item}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-[#10b981] text-lg">
                    {order.price}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        order.status === "Delivered"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : order.status === "Shipped"
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                          : order.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-zinc-500 text-sm">{order.deliveryDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <button className="hover:text-white transition-colors" title="View Order">
                        <Eye size={18} />
                      </button>
                      <button className="hover:text-blue-400 transition-colors" title="Refund/Return">
                        <RefreshCcw size={18} />
                      </button>
                      <button className="hover:text-yellow-500 transition-colors" title="Payout">
                        <DollarSign size={18} />
                      </button>
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
