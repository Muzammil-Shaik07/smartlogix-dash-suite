import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dummyShipments: Record<string, {
  id: string; status: string; origin: string; destination: string; eta: string;
  steps: { label: string; time: string; done: boolean }[];
}> = {
  "SL-78234": {
    id: "SL-78234", status: "In Transit", origin: "Los Angeles, CA", destination: "New York, NY", eta: "Feb 19, 2026",
    steps: [
      { label: "Order Placed", time: "Feb 15, 10:00 AM", done: true },
      { label: "Picked Up", time: "Feb 15, 3:00 PM", done: true },
      { label: "In Transit", time: "Feb 16, 8:00 AM", done: true },
      { label: "Out for Delivery", time: "Pending", done: false },
      { label: "Delivered", time: "Pending", done: false },
    ],
  },
  "SL-45123": {
    id: "SL-45123", status: "Delivered", origin: "Chicago, IL", destination: "Miami, FL", eta: "Feb 14, 2026",
    steps: [
      { label: "Order Placed", time: "Feb 10, 9:00 AM", done: true },
      { label: "Picked Up", time: "Feb 10, 2:00 PM", done: true },
      { label: "In Transit", time: "Feb 11, 7:00 AM", done: true },
      { label: "Out for Delivery", time: "Feb 13, 6:00 AM", done: true },
      { label: "Delivered", time: "Feb 14, 11:30 AM", done: true },
    ],
  },
};

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<typeof dummyShipments["SL-78234"] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleTrack = () => {
    const key = trackingId.trim().toUpperCase();
    if (dummyShipments[key]) {
      setResult(dummyShipments[key]);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Track Your <span className="gradient-text">Shipment</span></h1>
            <p className="text-muted-foreground">Enter your tracking ID to get real-time status updates.</p>
          </motion.div>

          <motion.div className="glass-card-elevated p-6 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter Tracking ID (e.g. SL-78234)"
                  className="pl-10"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                />
              </div>
              <Button onClick={handleTrack} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Track <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Try: SL-78234 or SL-45123</p>
          </motion.div>

          {notFound && (
            <motion.div className="glass-card p-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-medium">Shipment not found</p>
              <p className="text-sm text-muted-foreground">Please check the tracking ID and try again.</p>
            </motion.div>
          )}

          {result && (
            <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Status overview */}
              <div className="glass-card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tracking ID</p>
                    <p className="text-lg font-bold">{result.id}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    result.status === "Delivered"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-accent/10 text-accent"
                  }`}>
                    {result.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Origin</p>
                      <p className="font-medium">{result.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-muted-foreground">Destination</p>
                      <p className="font-medium">{result.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">ETA</p>
                      <p className="font-medium">{result.eta}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-6">Shipment Timeline</h3>
                <div className="space-y-0">
                  {result.steps.map((step, i) => (
                    <div key={step.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          step.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          {step.done ? <CheckCircle className="w-4 h-4" /> : <Truck className="w-4 h-4" />}
                        </div>
                        {i < result.steps.length - 1 && (
                          <div className={`w-0.5 h-10 ${step.done ? "bg-primary" : "bg-border"}`} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className={`font-medium text-sm ${step.done ? "" : "text-muted-foreground"}`}>{step.label}</p>
                        <p className="text-xs text-muted-foreground">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
