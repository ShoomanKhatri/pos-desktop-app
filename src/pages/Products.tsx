import { useState } from "react";
import { Search, Plus, Edit2, Trash2, Package } from "lucide-react";

const productsData = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    stock: 15,
    category: "Electronics",
    image: "📱",
    sku: "IPH-15P-256",
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 1999,
    stock: 8,
    category: "Electronics",
    image: "💻",
    sku: "MBP-M3-16",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    stock: 32,
    category: "Electronics",
    image: "🎧",
    sku: "APP-2ND",
  },
  {
    id: 4,
    name: "Nike Air Max",
    price: 129,
    stock: 24,
    category: "Clothing",
    image: "👟",
    sku: "NIK-AM-90",
  },
  {
    id: 5,
    name: "Designer T-Shirt",
    price: 45,
    stock: 50,
    category: "Clothing",
    image: "👕",
    sku: "TSH-DES-L",
  },
  {
    id: 6,
    name: "Coffee Beans 1kg",
    price: 18,
    stock: 100,
    category: "Food & Beverage",
    image: "☕",
    sku: "CFE-BEN-1K",
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 399,
    stock: 12,
    category: "Electronics",
    image: "⌚",
    sku: "SMW-PRO-44",
  },
  {
    id: 8,
    name: "Leather Wallet",
    price: 59,
    stock: 35,
    category: "Accessories",
    image: "👛",
    sku: "WAL-LEA-BR",
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 49,
    stock: 45,
    category: "Electronics",
    image: "🖱️",
    sku: "MSE-WRL-BK",
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 35,
    stock: 28,
    category: "Sports",
    image: "🧘",
    sku: "YOG-MAT-BL",
  },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products] = useState(productsData);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">
            Manage your inventory and product catalog
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:shadow-lg hover:shadow-primary-200 transition-all font-medium">
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, SKU, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
          />
        </div>
        <button className="px-6 py-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
          Filters
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary-50">
              <Package className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">
                {products.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-green-50">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">In Stock</p>
              <p className="text-2xl font-bold text-gray-900">
                {products.filter((p) => p.stock > 10).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-50">
              <Package className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Low Stock</p>
              <p className="text-2xl font-bold text-gray-900">
                {products.filter((p) => p.stock <= 10).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent-50">
              <Package className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="text-2xl font-bold text-gray-900">
                {new Set(products.map((p) => p.category)).size}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-2xl">
                        {product.image}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm text-gray-600">
                      {product.sku}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-lg bg-primary-50 text-primary-700 text-sm font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">
                      ${product.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        product.stock > 20
                          ? "bg-green-50 text-green-700"
                          : product.stock > 10
                          ? "bg-orange-50 text-orange-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors group">
                        <Edit2 className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
                        <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold">{filteredProducts.length}</span> of{" "}
            <span className="font-semibold">{products.length}</span> products
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium">
              1
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
              2
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
