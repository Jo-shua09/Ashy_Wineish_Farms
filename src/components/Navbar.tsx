import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, MessageCircle, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/2349061230796?text=" + encodeURIComponent("Hello, I'd like to place an order from Ashy Wineish Farms.");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (location.pathname === "/wines") return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="h-7 w-7 text-background/70 font-bold transition-transform group-hover:rotate-12" />
            <span className="text-lg md:text-xl font-bold text-background">
              Ashy Wineish <span className="text-background/70 font-bold">Farms</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === link.to ? "text-primary bg-background" : "text-white hover:text-primary hover:bg-background"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/wines">
              <Button variant="outline" className="rounded-full gap-2 border-[#8B1A1A]/40 bg-white hover:bg-[#8B1A1A]/10 font-bold text-sm">
                <Wine className="h-4 w-4" />
                Ashy Wines
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="animate-pulse bg-accent hover:bg-accent/90 text-accent-foreground rounded-full gap-2">
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-background hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border/50 overflow-y-auto flex flex-col"
          >
            <div className="w-full flex-1 flex flex-col justify-between pb-32 pt-4">
              <div className="container mx-auto px-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.to ? "text-white bg-primary" : "text-primary hover:text-white hover:bg-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col w-full px-4 gap-4 mt-8">
                <Link to="/wines" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-full gap-2 border-[#8B1A1A]/40 text-[#8B1A1A] hover:bg-[#8B1A1A]/10 font-bold h-14"
                  >
                    <Wine className="h-5 w-5" />
                    Ashy Wines
                  </Button>
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full gap-2 font-bold h-14">
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
