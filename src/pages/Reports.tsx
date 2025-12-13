import { FileText, TrendingUp } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500 mt-1">
            View and analyze your business performance
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-6">
          <FileText className="w-16 h-16 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Reports Coming Soon
        </h2>
        <p className="text-gray-500 text-center max-w-md">
          Advanced analytics and reporting features will be available here.
          Track sales trends, inventory insights, and customer behavior.
        </p>
      </div>

      {/* Quick Stats Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-primary-50">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-bold text-gray-900">Sales Report</h3>
          </div>
          <p className="text-sm text-gray-500">
            Detailed breakdown of sales by day, week, and month
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-accent-50">
              <TrendingUp className="w-6 h-6 text-accent-600" />
            </div>
            <h3 className="font-bold text-gray-900">Inventory Report</h3>
          </div>
          <p className="text-sm text-gray-500">
            Stock levels, low inventory alerts, and reorder suggestions
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-blue-50">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900">Customer Report</h3>
          </div>
          <p className="text-sm text-gray-500">
            Customer purchase patterns and loyalty insights
          </p>
        </div>
      </div>
    </div>
  );
}
