import { Link, useLocation, Outlet } from "react-router-dom";
import { LayoutDashboard, Package, TruckIcon, BarChart3, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Bell } from "lucide-react";
import NotificationPanel from "@/components/NotificationPanel";

const sidebarLinks = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/shipments", label: "Shipments", icon: Package },
  { to: "/dashboard/fleet", label: "Fleet", icon: TruckIcon },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar */}
      <aside className={`${collapsed ? "w-16" : "w-60"} bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 flex flex-col fixed inset-y-0 left-0 z-40`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          {!collapsed && (
            <span className="font-bold text-lg">
              Smart<span className="text-accent">Logix</span>
            </span>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-1">
          {sidebarLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <l.icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span>{l.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Back to Home</span>}
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className={`flex-1 ${collapsed ? "ml-16" : "ml-60"} transition-all duration-300`}>
        {/* Top bar */}
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-30">
          <h2 className="font-semibold">
            {sidebarLinks.find((l) => l.to === location.pathname)?.label || "Dashboard"}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative">
              <button onClick={() => setNotifOpen(!notifOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
              {notifOpen && <NotificationPanel onClose={() => setNotifOpen(false)} />}
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm ml-2">
              JD
            </div>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
