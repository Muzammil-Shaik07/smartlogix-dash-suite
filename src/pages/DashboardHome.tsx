import { motion } from "framer-motion";
import { Package, TrendingUp, Truck, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const statsCards = [
  { title: "Total Shipments", value: "2,847", change: "+12.5%", up: true, icon: Package },
  { title: "Revenue", value: "$184,230", change: "+8.3%", up: true, icon: DollarSign },
  { title: "Active Fleet", value: "42", change: "+3", up: true, icon: Truck },
  { title: "Delivery Rate", value: "99.2%", change: "+0.5%", up: true, icon: TrendingUp },
];

const shipmentData = [
  { month: "Jan", shipments: 180, revenue: 12000 },
  { month: "Feb", shipments: 220, revenue: 15000 },
  { month: "Mar", shipments: 280, revenue: 18500 },
  { month: "Apr", shipments: 310, revenue: 21000 },
  { month: "May", shipments: 350, revenue: 24000 },
  { month: "Jun", shipments: 420, revenue: 28000 },
  { month: "Jul", shipments: 390, revenue: 26000 },
];

const recentShipments = [
  { id: "SL-78234", origin: "Los Angeles", dest: "New York", status: "In Transit", date: "Feb 16" },
  { id: "SL-45123", origin: "Chicago", dest: "Miami", status: "Delivered", date: "Feb 14" },
  { id: "SL-99012", origin: "Seattle", dest: "Denver", status: "Pending", date: "Feb 17" },
  { id: "SL-33456", origin: "Houston", dest: "Atlanta", status: "In Transit", date: "Feb 15" },
  { id: "SL-11789", origin: "Boston", dest: "Dallas", status: "Delivered", date: "Feb 13" },
];

const statusColors: Record<string, string> = {
  "In Transit": "bg-accent/10 text-accent",
  Delivered: "bg-green-500/10 text-green-600 dark:text-green-400",
  Pending: "bg-muted text-muted-foreground",
};

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((s, i) => (
          <motion.div key={s.title} className="glass-card p-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-medium ${s.up ? "text-green-600 dark:text-green-400" : "text-destructive"}`}>
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {s.change}
              </span>
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Shipment Trends</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={shipmentData}>
              <defs>
                <linearGradient id="shipGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Area type="monotone" dataKey="shipments" stroke="hsl(217, 91%, 60%)" fill="url(#shipGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={shipmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Bar dataKey="revenue" fill="hsl(25, 95%, 53%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Shipments */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold">Recent Shipments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-sm text-muted-foreground">
                <th className="text-left p-4 font-medium">Tracking ID</th>
                <th className="text-left p-4 font-medium">Origin</th>
                <th className="text-left p-4 font-medium">Destination</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentShipments.map((s) => (
                <tr key={s.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-primary">{s.id}</td>
                  <td className="p-4 text-sm">{s.origin}</td>
                  <td className="p-4 text-sm">{s.dest}</td>
                  <td className="p-4"><span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[s.status]}`}>{s.status}</span></td>
                  <td className="p-4 text-sm text-muted-foreground">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
