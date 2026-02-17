import { motion } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

const monthlyData = [
  { month: "Aug", shipments: 320, onTime: 310, delayed: 10 },
  { month: "Sep", shipments: 380, onTime: 370, delayed: 10 },
  { month: "Oct", shipments: 420, onTime: 405, delayed: 15 },
  { month: "Nov", shipments: 460, onTime: 448, delayed: 12 },
  { month: "Dec", shipments: 510, onTime: 495, delayed: 15 },
  { month: "Jan", shipments: 480, onTime: 468, delayed: 12 },
  { month: "Feb", shipments: 540, onTime: 530, delayed: 10 },
];

const regionData = [
  { name: "North America", value: 45 },
  { name: "Europe", value: 25 },
  { name: "Asia Pacific", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = ["hsl(217, 91%, 60%)", "hsl(25, 95%, 53%)", "hsl(160, 60%, 45%)", "hsl(280, 60%, 55%)"];

const costData = [
  { month: "Aug", fuel: 8500, labor: 12000, maintenance: 3200 },
  { month: "Sep", fuel: 9200, labor: 12500, maintenance: 2800 },
  { month: "Oct", fuel: 10100, labor: 13000, maintenance: 4100 },
  { month: "Nov", fuel: 9800, labor: 13500, maintenance: 3500 },
  { month: "Dec", fuel: 11200, labor: 14000, maintenance: 3000 },
  { month: "Jan", fuel: 10500, labor: 13800, maintenance: 3800 },
  { month: "Feb", fuel: 9900, labor: 14200, maintenance: 2900 },
];

const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  fontSize: "12px",
};

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Comprehensive overview of your logistics performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="glass-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="font-semibold mb-4">Delivery Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="onTimeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Area type="monotone" dataKey="onTime" name="On Time" stroke="hsl(217, 91%, 60%)" fill="url(#onTimeGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="delayed" name="Delayed" stroke="hsl(25, 95%, 53%)" fill="hsl(25, 95%, 53%, 0.1)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="glass-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="font-semibold mb-4">Shipments by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={regionData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={4} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {regionData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="glass-card p-6 lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="font-semibold mb-4">Cost Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Bar dataKey="fuel" name="Fuel" fill="hsl(217, 91%, 60%)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="labor" name="Labor" fill="hsl(25, 95%, 53%)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="maintenance" name="Maintenance" fill="hsl(160, 60%, 45%)" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
