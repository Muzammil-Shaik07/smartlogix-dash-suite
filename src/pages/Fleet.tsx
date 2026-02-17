import { motion } from "framer-motion";
import { Truck, MapPin, Fuel, Wrench, CheckCircle, AlertTriangle } from "lucide-react";

const fleet = [
  { id: "TRK-001", type: "Semi Truck", driver: "Mike Johnson", status: "Active", location: "I-95, Virginia", fuel: 78, mileage: "124,500 mi" },
  { id: "TRK-002", type: "Box Truck", driver: "Sarah Williams", status: "Active", location: "US-20, Ohio", fuel: 65, mileage: "87,200 mi" },
  { id: "TRK-003", type: "Refrigerated", driver: "Carlos Garcia", status: "Maintenance", location: "Depot A, Chicago", fuel: 45, mileage: "156,800 mi" },
  { id: "TRK-004", type: "Flatbed", driver: "Lisa Chen", status: "Active", location: "I-10, Texas", fuel: 92, mileage: "98,300 mi" },
  { id: "TRK-005", type: "Semi Truck", driver: "James Brown", status: "Idle", location: "Depot B, LA", fuel: 100, mileage: "201,400 mi" },
  { id: "TRK-006", type: "Van", driver: "Emily Davis", status: "Active", location: "I-75, Georgia", fuel: 54, mileage: "45,600 mi" },
];

const statusIcons: Record<string, { icon: typeof CheckCircle; cls: string }> = {
  Active: { icon: CheckCircle, cls: "text-green-600 dark:text-green-400" },
  Maintenance: { icon: Wrench, cls: "text-accent" },
  Idle: { icon: AlertTriangle, cls: "text-muted-foreground" },
};

export default function Fleet() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Fleet Management</h1>
          <p className="text-sm text-muted-foreground">Monitor and manage your entire fleet in real-time.</p>
        </div>
        <div className="flex gap-2">
          {["Active", "Maintenance", "Idle"].map((s) => {
            const count = fleet.filter((v) => v.status === s).length;
            const S = statusIcons[s];
            return (
              <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-xs font-medium">
                <S.icon className={`w-3.5 h-3.5 ${S.cls}`} />
                {count} {s}
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fleet.map((v, i) => {
          const S = statusIcons[v.status];
          return (
            <motion.div key={v.id} className="glass-card p-5 hover-lift" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{v.id}</p>
                    <p className="text-xs text-muted-foreground">{v.type}</p>
                  </div>
                </div>
                <span className={`flex items-center gap-1 text-xs font-medium ${S.cls}`}>
                  <S.icon className="w-3.5 h-3.5" />
                  {v.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{v.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Fuel className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Fuel</span>
                      <span>{v.fuel}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${v.fuel > 60 ? "bg-green-500" : v.fuel > 30 ? "bg-accent" : "bg-destructive"}`}
                        style={{ width: `${v.fuel}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground pt-1 border-t border-border/50">
                  <span>Driver: {v.driver}</span>
                  <span>{v.mileage}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
