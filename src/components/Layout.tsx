import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <TopNav />
        <main className="mt-20 p-8 overflow-auto h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
