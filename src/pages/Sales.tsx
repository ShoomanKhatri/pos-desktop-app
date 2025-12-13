import { useState } from "react";
import { Search, Plus, Minus, CreditCard, Trash2 } from "lucide-react";

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Food & Beverage",
  "Accessories",
  "Home",
];

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    category: "Electronics",
    image: "📱",
    stock: 15,
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 1999,
    category: "Electronics",
    image: "💻",
    stock: 8,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    category: "Electronics",
    image: "🎧",
    stock: 32,
  },
  {
    id: 4,
    name: "Nike Air Max",
    price: 129,
    category: "Clothing",
    image: "👟",
    stock: 24,
  },
  {
    id: 5,
    name: "Designer T-Shirt",
    price: 45,
    category: "Clothing",
    image: "👕",
    stock: 50,
  },
  {
    id: 6,
    name: "Coffee Beans 1kg",
    price: 18,
    category: "Food & Beverage",
    image: "☕",
    stock: 100,
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 399,
    category: "Electronics",
    image: "⌚",
    stock: 12,
  },
  {
    id: 8,
    name: "Leather Wallet",
    price: 59,
    category: "Accessories",
    image: "👛",
    stock: 35,
  },
];

export default function Sales() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<
    Array<{ id: number; name: string; price: number; quantity: number }>
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: (typeof products)[0]) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + change);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="h-full flex gap-6">
      {/* Products Section */}
      <div className="flex-1 space-y-6">
        {/* Search and Categories */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-200"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 hover:shadow-lg hover:scale-105 transition-all text-left group"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-3 text-5xl group-hover:scale-110 transition-transform">
                {product.image}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-primary-600">
                  ${product.price}
                </p>
                <p className="text-xs text-gray-500">Stock: {product.stock}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="w-96 bg-white rounded-3xl p-6 shadow-soft border border-gray-100 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Order</h2>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto space-y-3 mb-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500">No items in cart</p>
              <p className="text-sm text-gray-400 mt-1">
                Select products to start
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">${item.price} each</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="w-12 text-center font-semibold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Totals */}
        {cart.length > 0 && (
          <>
            <div className="space-y-3 mb-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-300 transition-all flex items-center justify-center gap-2">
              <CreditCard className="w-6 h-6" />
              Charge ${total.toFixed(2)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
