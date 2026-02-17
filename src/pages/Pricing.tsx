import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "Perfect for small businesses getting started with logistics management.",
    features: ["Up to 100 shipments/mo", "Basic tracking", "Email support", "1 user", "Standard analytics"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    desc: "For growing businesses that need advanced logistics tools.",
    features: ["Up to 1,000 shipments/mo", "Real-time tracking", "Priority support", "5 users", "Advanced analytics", "Fleet management", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    period: "/month",
    desc: "For large operations requiring custom solutions and dedicated support.",
    features: ["Unlimited shipments", "Live GPS tracking", "24/7 dedicated support", "Unlimited users", "Custom analytics", "Full fleet management", "Custom integrations", "SLA guarantee"],
    popular: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your business. Scale as you grow.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`rounded-2xl p-8 hover-lift relative ${
                  plan.popular
                    ? "bg-primary text-primary-foreground ring-2 ring-accent"
                    : "glass-card"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${plan.popular ? "text-accent" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
