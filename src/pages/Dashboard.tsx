import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Mon", sales: 4000 },
  { name: "Tue", sales: 3000 },
  { name: "Wed", sales: 5000 },
  { name: "Thu", sales: 4500 },
  { name: "Fri", sales: 6000 },
  { name: "Sat", sales: 7500 },
  { name: "Sun", sales: 5500 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's your store overview.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:shadow-lg hover:shadow-primary-200 transition-all font-medium">
          <Plus className="w-5 h-5" />
          New Sale
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sales */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600">
              <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              12.5%
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">
            Total Sales
          </h3>
          <p className="text-3xl font-bold text-gray-900">$45,231</p>
          <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600">
              <ShoppingBag className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              8.2%
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">
            Total Orders
          </h3>
          <p className="text-3xl font-bold text-gray-900">356</p>
          <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
        </div>

        {/* Customers */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600">
              <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              3.1%
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">
            New Customers
          </h3>
          <p className="text-3xl font-bold text-gray-900">48</p>
          <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
        </div>

        {/* Avg Order Value */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
              <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-red-600">
              <ArrowDownRight className="w-4 h-4" />
              2.4%
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">
            Avg Order Value
          </h3>
          <p className="text-3xl font-bold text-gray-900">$127</p>
          <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Sales Overview</h2>
            <p className="text-sm text-gray-500 mt-1">
              Weekly sales performance
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
              7 Days
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg shadow-primary-200">
              30 Days
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
              90 Days
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 transition-all text-left group">
              <div className="p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <Plus className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">New Sale</p>
                <p className="text-sm text-gray-500">Start a new transaction</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent-50 to-accent-100 hover:from-accent-100 hover:to-accent-200 transition-all text-left group">
              <div className="p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <ShoppingBag className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Manage Products</p>
                <p className="text-sm text-gray-500">View and edit inventory</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all text-left group">
              <div className="p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">View Reports</p>
                <p className="text-sm text-gray-500">
                  Check analytics and insights
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              {
                action: "New sale",
                amount: "$234.50",
                customer: "John Doe",
                time: "2 mins ago",
              },
              {
                action: "Product added",
                amount: "15 units",
                customer: "iPhone 15 Pro",
                time: "15 mins ago",
              },
              {
                action: "New customer",
                amount: "",
                customer: "Sarah Wilson",
                time: "1 hour ago",
              },
              {
                action: "Refund processed",
                amount: "-$89.99",
                customer: "Mike Johnson",
                time: "2 hours ago",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.customer}</p>
                </div>
                <div className="text-right">
                  {activity.amount && (
                    <p
                      className={`font-semibold ${
                        activity.amount.startsWith("-")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {activity.amount}
                    </p>
                  )}
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
