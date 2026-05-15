import React from "react";
import { Search, Filter, Eye, UserMinus, ShieldCheck, Star } from "lucide-react";

const users = [
  {
    id: "USR-001",
    name: "John Doe",
    username: "@johndoe",
    email: "john@example.com",
    role: "Buyer/Seller",
    rating: 4.8,
    transactions: 45,
    status: "Active",
    color: "bg-blue-500",
  },
  {
    id: "USR-002",
    name: "Jane Smith",
    username: "@janesmith",
    email: "jane@example.com",
    role: "Seller",
    rating: 4.9,
    transactions: 128,
    status: "Active",
    color: "bg-purple-500",
  },
  {
    id: "USR-003",
    name: "Mike Johnson",
    username: "@mikej",
    email: "mike@example.com",
    role: "Buyer",
    rating: 4.5,
    transactions: 23,
    status: "Active",
    color: "bg-indigo-500",
  },
  {
    id: "USR-004",
    name: "Sarah Wilson",
    username: "@sarahw",
    email: "sarah@example.com",
    role: "Trader",
    rating: 4.7,
    transactions: 67,
    status: "Suspended",
    color: "bg-pink-500",
  },
  {
    id: "USR-005",
    name: "Alex Brown",
    username: "@alexb",
    email: "alex@example.com",
    role: "Seller",
    rating: 4.6,
    transactions: 89,
    status: "Active",
    color: "bg-blue-600",
  },
  {
    id: "USR-006",
    name: "Emma Davis",
    username: "@emmad",
    email: "emma@example.com",
    role: "Buyer/Seller",
    rating: 4.9,
    transactions: 156,
    status: "Active",
    color: "bg-violet-600",
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Users Management</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Search by name, username, or email..."
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
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-zinc-500 text-sm">
                <th className="px-6 py-4 font-medium">User ID</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Username</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Rating</th>
                <th className="px-6 py-4 font-medium">Transactions</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user) => (
                <tr key={user.id} className="text-zinc-300 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-sm">{user.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white font-bold`}>
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-lg">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400">{user.username}</td>
                  <td className="px-6 py-4 text-zinc-400">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#155DFC]/10 text-[#155DFC] px-3 py-1 rounded-full text-xs font-medium border border-[#155DFC]/20">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{user.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{user.transactions}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        user.status === "Active"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <button className="hover:text-white transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="hover:text-red-500 transition-colors">
                        <UserMinus size={18} />
                      </button>
                      <button className="hover:text-green-500 transition-colors">
                        <ShieldCheck size={18} />
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
