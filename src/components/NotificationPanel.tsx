import { Package, Clock, CheckCircle, AlertTriangle, X } from "lucide-react";

const notifications = [
  { id: 1, title: "Shipment SL-78234 Delivered", desc: "Successfully delivered to New York", icon: CheckCircle, time: "2 min ago", color: "text-green-500" },
  { id: 2, title: "Delay Alert: SL-45123", desc: "Weather delay in Chicago route", icon: AlertTriangle, time: "15 min ago", color: "text-accent" },
  { id: 3, title: "New Shipment Created", desc: "SL-99012 scheduled for pickup", icon: Package, time: "1 hour ago", color: "text-primary" },
  { id: 4, title: "Fleet Update", desc: "Vehicle TRK-042 maintenance complete", icon: Clock, time: "3 hours ago", color: "text-muted-foreground" },
];

export default function NotificationPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-12 w-80 glass-card-elevated rounded-xl overflow-hidden z-50">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-semibold text-sm">Notifications</h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((n) => (
          <div key={n.id} className="flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0">
            <n.icon className={`w-5 h-5 mt-0.5 shrink-0 ${n.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
