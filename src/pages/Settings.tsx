import { useState } from "react";
import { User, Store, Printer, Palette, Bell, Save } from "lucide-react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">
            Customize your POS system preferences
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:shadow-lg hover:shadow-primary-200 transition-all font-medium">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-primary-50">
              <User className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Profile Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Suman Khatri"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="suman.khatri@modernpos.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Store Manager</option>
                <option>Cashier</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>

        {/* Store Settings */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-accent-50">
              <Store className="w-6 h-6 text-accent-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Store Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Name
              </label>
              <input
                type="text"
                defaultValue="ModernPOS Store"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Address
              </label>
              <textarea
                rows={3}
                defaultValue="123 Business Street, Commerce City, ST 12345"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                defaultValue="10"
                step="0.01"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>JPY (¥)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Printer Settings */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-blue-50">
              <Printer className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Printer Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Receipt Printer
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Epson TM-T88VI</option>
                <option>Star TSP143III</option>
                <option>HP LaserJet Pro</option>
                <option>No Printer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paper Size
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>80mm (3.15")</option>
                <option>58mm (2.28")</option>
                <option>Letter (8.5" x 11")</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Auto-print receipts</p>
                <p className="text-sm text-gray-500">
                  Print automatically after each sale
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* App Theme */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-purple-50">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Appearance</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Theme
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTheme("light")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    theme === "light"
                      ? "border-primary-500 bg-primary-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="w-full h-20 rounded-lg bg-white border border-gray-200 mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Light</p>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    theme === "dark"
                      ? "border-primary-500 bg-primary-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="w-full h-20 rounded-lg bg-gray-900 border border-gray-700 mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Dark</p>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accent Color
              </label>
              <div className="flex gap-3">
                {[
                  "bg-primary-500",
                  "bg-accent-500",
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-orange-500",
                ].map((color, idx) => (
                  <button
                    key={idx}
                    className={`w-12 h-12 rounded-xl ${color} hover:scale-110 transition-transform border-4 border-white shadow-lg`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-orange-50">
            <Bell className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            Notifications & Preferences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">Enable Notifications</p>
              <p className="text-sm text-gray-500">
                Receive alerts for important events
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">Sound Effects</p>
              <p className="text-sm text-gray-500">Play sounds for actions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">Auto Backup</p>
              <p className="text-sm text-gray-500">
                Daily automatic data backup
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoBackup}
                onChange={(e) => setAutoBackup(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">Low Stock Alerts</p>
              <p className="text-sm text-gray-500">
                Get notified when stock is low
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
