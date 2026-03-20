import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Package, Truck, CreditCard, Map, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { toast } from "sonner";
import heroImg from "@/assets/hero-farm.jpg";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Owode, Ogun State, Yewa South, Owode-Idiroko" },
  { icon: Phone, label: "Phone / WhatsApp", value: "09061230796" },
  { icon: Mail, label: "Email", value: "Kasalikabiru1993@gmail.com" },
  { icon: Clock, label: "Business Hours", value: "Mon — Sun: 8am — 6pm" },
];

const orderInfo = [
  { icon: Package, title: "Minimum Order", desc: "Contact us for minimum order quantities based on product type." },
  { icon: Map, title: "Delivery Areas", desc: "Ogun State (Sango Ota, Ifo, Agbara, Lusada) and Badagry." },
  { icon: Truck, title: "Delivery Methods", desc: "Farm pickup or delivery via trusted logistics partners." },
  { icon: CreditCard, title: "Payment Methods", desc: "Bank Transfer, POS, or cash on pickup." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Contact us" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay)/0.5)] to-transparent" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Reach Out</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mt-4 leading-[0.95] tracking-tight">
              Get in Touch &
              <br />
              <span className="text-accent">Place Your Order</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-card border border-border rounded-3xl p-4 lg:p-6">
                <h2 className="text-2xl font-black text-foreground mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-2xl bg-background h-14 px-5 text-base"
                    maxLength={100}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-2xl bg-background h-14 px-5 text-base"
                    maxLength={255}
                  />
                  <Input
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="rounded-2xl bg-background h-14 px-5 text-base"
                    maxLength={200}
                  />
                  <textarea
                    placeholder="Your Message *"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    maxLength={1000}
                    className="flex w-full rounded-2xl border border-input bg-background px-5 py-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-base font-bold gap-2"
                  >
                    Send Message <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-foreground">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-start gap-4 bg-card border border-border rounded-3xl p-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{c.label}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">How to Order</span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4">Ordering Information</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {orderInfo.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="bg-card border border-border rounded-3xl p-7 text-center shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <o.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{o.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
