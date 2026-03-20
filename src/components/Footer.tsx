import { Link, useLocation } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/2349061230796?text=" + encodeURIComponent("Hello, I'd like to place an order from Ashy Wineish Farms.");

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/wines") return null;

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl lg:text-4xl font-black text-center lg:text-left leading-tight max-w-lg">
            Ready to get farm-fresh
            <br />
            produce <span className="text-accent">delivered?</span>
          </h3>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-10 h-14 animate-pulse">
              Order on WhatsApp <ArrowUpRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" flex items-start justify-between md:flex-nowrap flex-wrap gap-10">
          <div className="space-y-5 w-full flex-[2]">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="text-lg font-black">Ashy Wineish Farms</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Providing healthy crops & livestock for a healthy society. Farm-fresh produce delivered from Owode-Idiroko to your table.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className=" flex items-start justify-between lg:flex-nowrap flex-wrap gap-10 flex-[2]">
            <div className="w-full lg:flex-1">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about" },
                  { label: "Products", to: "/products" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:flex-1">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-accent">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-primary-foreground/50">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  Owode, Ogun State, Yewa South, Owode-Idiroko
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  09061230796
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  Kasalikabiru1993@gmail.com
                </li>
              </ul>
            </div>

            <div className="w-full lg:flex-1">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-accent">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors font-medium">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors font-medium">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
              <p className="text-xs text-primary-foreground/30 mt-8">Mon — Sun: 8am — 6pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Ashy Wineish Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
