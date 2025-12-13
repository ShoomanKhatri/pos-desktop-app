import { Search, Bell, User } from "lucide-react";

export default function TopNav() {
  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10 shadow-sm">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products, customers, invoices..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <button className="relative p-3 rounded-xl hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 p-2 pr-4 rounded-2xl hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">Suman Khatri</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </button>
      </div>
    </div>
  );
}
