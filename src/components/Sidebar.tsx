import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: ShoppingCart, label: "Sales", path: "/sales" },
  { icon: Package, label: "Products", path: "/products" },
  { icon: Users, label: "Customers", path: "/customers" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 shadow-sm">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
            <ShoppingCart
              className="w-5 h-5 text-orange-500"
              strokeWidth={2.5}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ModernPOS</h1>
            <p className="text-xs text-gray-500">Point of Sale</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              <Icon className="w-5 h-5" strokeWidth={2} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
            SK
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Suman Khatri</p>
            <p className="text-xs text-gray-500">Store Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
