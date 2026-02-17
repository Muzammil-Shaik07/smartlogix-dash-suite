import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <form onSubmit={handleSubmit} className="glass-card-elevated p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Subject</label>
                  <Input placeholder="How can we help?" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  {submitted ? "Message Sent! ✓" : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                </Button>
              </form>
            </motion.div>

            <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "info@smartlogix.com" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                    { icon: MapPin, label: "Address", value: "123 Logistics Avenue, New York, NY 10001" },
                    { icon: Clock, label: "Hours", value: "Mon - Fri: 8AM - 8PM EST" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{c.label}</p>
                        <p className="text-sm text-muted-foreground">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.006%2C40.7128%2C-73.97%2C40.73&layer=mapnik"
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Developer Details Section */}
          <motion.div className="mt-16 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="glass-card-elevated p-8 text-center">
              <h2 className="text-2xl font-bold mb-1">Developed By</h2>
              <p className="text-lg font-semibold text-primary mb-0.5">Muzammil Shaik</p>
              <p className="text-sm text-muted-foreground mb-4">Frontend Developer</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a href="mailto:muzammilshaik877@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> muzammilshaik877@gmail.com
                </a>
                <a href="tel:+918639836268" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> +91 8639836268
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
