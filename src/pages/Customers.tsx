import { useState } from "react";
import {
  Search,
  Plus,
  Mail,
  Phone,
  MapPin,
  Edit2,
  Trash2,
  Star,
} from "lucide-react";

const customersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY",
    totalOrders: 24,
    totalSpent: 3420,
    isVIP: true,
    avatar: "👨‍💼",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.w@email.com",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave, Los Angeles, CA",
    totalOrders: 18,
    totalSpent: 2150,
    isVIP: false,
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.j@email.com",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd, Chicago, IL",
    totalOrders: 32,
    totalSpent: 5280,
    isVIP: true,
    avatar: "👨‍🔧",
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.d@email.com",
    phone: "+1 (555) 456-7890",
    address: "321 Elm St, Houston, TX",
    totalOrders: 15,
    totalSpent: 1890,
    isVIP: false,
    avatar: "👩‍🎨",
  },
  {
    id: 5,
    name: "James Brown",
    email: "james.b@email.com",
    phone: "+1 (555) 567-8901",
    address: "654 Maple Dr, Phoenix, AZ",
    totalOrders: 41,
    totalSpent: 7320,
    isVIP: true,
    avatar: "👨‍🚀",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    phone: "+1 (555) 678-9012",
    address: "987 Cedar Ln, Philadelphia, PA",
    totalOrders: 9,
    totalSpent: 1240,
    isVIP: false,
    avatar: "👩‍🏫",
  },
];

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers] = useState(customersData);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
  );

  const vipCustomers = customers.filter((c) => c.isVIP).length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgOrderValue =
    totalRevenue / customers.reduce((sum, c) => sum + c.totalOrders, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-500 mt-1">
            Manage your customer relationships
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:shadow-lg hover:shadow-primary-200 transition-all font-medium">
          <Plus className="w-5 h-5" />
          Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary-50">
              <Star className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">
                {customers.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent-50">
              <Star className="w-5 h-5 text-accent-600" fill="currentColor" />
            </div>
            <div>
              <p className="text-sm text-gray-500">VIP Customers</p>
              <p className="text-2xl font-bold text-gray-900">{vipCustomers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-green-50">
              <Star className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-50">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-900">
                ${avgOrderValue.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search customers by name, email, or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
        />
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-3xl">
                  {customer.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{customer.name}</h3>
                    {customer.isVIP && (
                      <Star
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {customer.totalOrders} orders
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors group">
                  <Edit2 className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
                  <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="flex-1">{customer.address}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Spent</p>
                <p className="text-lg font-bold text-primary-600">
                  ${customer.totalSpent.toLocaleString()}
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-primary-200 transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
