import { Link } from "react-router-dom";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>Smart<span className="text-accent">Logix</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Next-generation logistics platform powering seamless supply chain operations worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["/services", "/tracking", "/pricing", "/contact"].map((l) => (
                <Link key={l} to={l} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.slice(1).charAt(0).toUpperCase() + l.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>About Us</span>
              <span>Careers</span>
              <span>Blog</span>
              <span>Privacy Policy</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@smartlogix.com</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> 123 Logistics Ave, NY</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2026 SmartLogix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
