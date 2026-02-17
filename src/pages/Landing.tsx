import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package, Globe, Shield, BarChart3, Clock, Truck, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Package, title: "Real-Time Tracking", desc: "Monitor your shipments 24/7 with live GPS tracking and instant status updates." },
  { icon: Globe, title: "Global Network", desc: "Access our worldwide logistics network spanning 150+ countries and 500+ routes." },
  { icon: Shield, title: "Secure & Insured", desc: "Every shipment is fully insured with end-to-end security protocols." },
  { icon: BarChart3, title: "Smart Analytics", desc: "AI-powered insights to optimize routes, reduce costs, and improve delivery times." },
  { icon: Clock, title: "On-Time Guarantee", desc: "99.7% on-time delivery rate backed by our performance guarantee." },
  { icon: Truck, title: "Fleet Management", desc: "Complete visibility and control over your entire fleet from one dashboard." },
];

const testimonials = [
  { name: "Sarah Chen", role: "VP Operations, TechFlow Inc.", text: "SmartLogix reduced our shipping costs by 35% while improving delivery times. The real-time tracking is a game changer.", rating: 5 },
  { name: "Marcus Johnson", role: "CEO, GlobalMart", text: "The analytics dashboard gives us insights we never had before. We've optimized our entire supply chain.", rating: 5 },
  { name: "Priya Patel", role: "Logistics Manager, FreshGoods", text: "Switching to SmartLogix was the best decision. Their customer support and platform reliability are outstanding.", rating: 5 },
];

const stats = [
  { value: "10M+", label: "Shipments Delivered" },
  { value: "150+", label: "Countries Covered" },
  { value: "99.7%", label: "On-Time Rate" },
  { value: "24/7", label: "Support Available" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Global logistics network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container-custom relative z-10 text-center py-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Next-Gen Logistics Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Smarter Logistics,{" "}
              <span className="gradient-text">Faster Delivery</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Transform your supply chain with AI-powered route optimization, real-time tracking, and seamless fleet management — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base">
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/tracking">
                <Button size="lg" variant="outline" className="px-8 text-base border-border hover:bg-muted">
                  Track Shipment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <div className="text-3xl sm:text-4xl font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to <span className="gradient-text">Ship Smarter</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive tools and features designed to streamline every aspect of your logistics operations.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="glass-card p-6 hover-lift group cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
            <p className="text-muted-foreground">See what our customers have to say about SmartLogix.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} className="glass-card p-6 hover-lift" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
            style={{ background: "var(--gradient-hero)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-foreground">Ready to Transform Your Logistics?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join thousands of businesses that trust SmartLogix for their shipping and logistics needs.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                Start Free Trial <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
