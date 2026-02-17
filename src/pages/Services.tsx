import { motion } from "framer-motion";
import { Truck, Ship, Plane, Train, Package, Warehouse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: Truck, title: "Road Freight", desc: "Full truckload and less-than-truckload shipping across domestic and cross-border routes with real-time GPS tracking.", features: ["Same-day pickup", "Temperature controlled", "Hazmat certified"] },
  { icon: Ship, title: "Ocean Freight", desc: "Cost-effective ocean shipping with FCL and LCL options for international cargo. Door-to-port and port-to-port services.", features: ["FCL & LCL options", "Customs clearance", "Container tracking"] },
  { icon: Plane, title: "Air Freight", desc: "Express air cargo for time-sensitive shipments. Next-day and same-day delivery available for priority packages.", features: ["Express delivery", "Priority handling", "Global coverage"] },
  { icon: Train, title: "Rail Freight", desc: "Eco-friendly and cost-effective rail transport solutions for bulk cargo and intermodal shipments.", features: ["Bulk cargo", "Intermodal", "Eco-friendly"] },
  { icon: Package, title: "Last Mile Delivery", desc: "Efficient last-mile solutions powered by AI route optimization for fast and reliable doorstep deliveries.", features: ["AI-optimized routes", "Real-time ETAs", "Photo proof"] },
  { icon: Warehouse, title: "Warehousing", desc: "Modern warehouse facilities with inventory management, pick-and-pack, and fulfillment services.", features: ["Inventory management", "Pick & pack", "Climate controlled"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive logistics solutions tailored to your business needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="glass-card p-6 hover-lift group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
