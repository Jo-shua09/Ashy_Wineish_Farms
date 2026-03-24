import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Briefcase, BookOpen, Users, ArrowUpRight, Wine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import maizeImg from "@/assets/maize.jpg";
import cassavaImg from "@/assets/cassava.jpg";
import chickenImg from "@/assets/chicken.jpg";
import turkeyImg from "@/assets/turkey.jpg";
import fishImg from "@/assets/fish.jpg";
import piggeryImg from "@/assets/piggery.jpg";
import goatImg from "@/assets/goat.jpg";
import cowImg from "@/assets/cow.jpg";
import dryfishProcessImg from "@/assets/dryfish-process.jpg";
import dryfishDisplayImg from "@/assets/dryfish-display.jpg";
import dryfishOvenImg from "@/assets/dryfish-oven.jpg";
import heroImg from "@/assets/hero-farm.jpg";
import wineRedImg from "@/assets/wine-red-bottle.jpg";

const WHATSAPP_URL = "https://wa.me/2349061230796?text=" + encodeURIComponent("Hello, I'd like to place an order.");
const WHATSAPP_BASE = "https://wa.me/2349061230796?text=";

type Category = "all" | "crop" | "livestock" | "dryfish";

const products = [
  {
    name: "Maize",
    category: "crop" as const,
    img: maizeImg,
    details: ["Irrigated farming", "Harvest: Aug–Oct", "Bulk & retail packaging"],
    desc: "Premium quality maize grown on 2 acres of fertile Owode-Idiroko soil.",
  },
  {
    name: "Cassava",
    category: "crop" as const,
    img: cassavaImg,
    details: ["Companion cropping with maize", "Year-round harvest", "Fresh tubers & processed"],
    desc: "Healthy cassava tubers cultivated alongside our maize fields.",
  },
  {
    name: "Chicken",
    category: "livestock" as const,
    img: chickenImg,
    details: ["Free-range & broiler breeds", "1.5–3kg weight range", "Vaccinated & health-certified"],
    desc: "Healthy poultry raised with quality feed and regular veterinary care.",
  },
  {
    name: "Turkey",
    category: "livestock" as const,
    img: turkeyImg,
    details: ["Local & hybrid breeds", "4–8kg weight range", "Natural feed supplements"],
    desc: "Well-nourished turkeys reared in clean, spacious enclosures.",
  },
  {
    name: "Fish",
    category: "livestock" as const,
    img: fishImg,
    details: ["Catfish & Tilapia", "0.5–2kg per fish", "Pond-raised, fresh water"],
    desc: "Farm-raised fish from our clean ponds, harvested fresh daily.",
  },
  {
    name: "Piggery",
    category: "livestock" as const,
    img: piggeryImg,
    details: ["Large White breed", "Healthy feed program", "Regular health monitoring"],
    desc: "Well-maintained pigs raised in modern, hygienic facilities.",
  },
  {
    name: "Goat",
    category: "livestock" as const,
    img: goatImg,
    details: ["West African Dwarf", "Pasture-fed", "Dewormed & vaccinated"],
    desc: "Healthy goats grazing on lush pasture, raised naturally.",
  },
  {
    name: "Cow",
    category: "livestock" as const,
    img: cowImg,
    details: ["Mixed breeds", "Grass-fed", "Regular veterinary checks"],
    desc: "Grass-fed cattle raised on open pasture with dedicated care.",
  },
  {
    name: "Dry Fish",
    category: "dryfish" as const,
    img: dryfishDisplayImg,
    details: ["Catfish & Tilapia varieties", "Smoked in custom steel oven", "Hygienically processed", "Bulk & retail packaging"],
    desc: "Premium quality dried fish, traditionally smoked using our custom-built steel oven for rich flavour and long shelf life.",
  },
];

const services = [
  { icon: Briefcase, title: "Produce Supply", desc: "Bulk and retail supply of fresh farm produce across Ogun State and Lagos." },
  { icon: BookOpen, title: "Farm Consultancy", desc: "Expert guidance on crop and livestock farming for aspiring agricultural entrepreneurs." },
  { icon: Users, title: "Training Programs", desc: "Hands-on training sessions for poultry management, crop cultivation, and fish farming." },
];

const tabs: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Crop Products", value: "crop" },
  { label: "Livestock / Poultry", value: "livestock" },
  { label: "Dry Fish", value: "dryfish" },
];

const Products = () => {
  const [tab, setTab] = useState<Category>("all");
  const filtered = tab === "all" ? products : products.filter((p) => p.category === tab || (tab === "dryfish" && p.name === "Dry Fish"));

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Farm produce" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay)/0.5)] to-transparent" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">What We Offer</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mt-4 leading-[0.95] tracking-tight">
              Our Premium
              <br />
              <span className="text-accent">Produce</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <div className="inline-flex bg-card border border-border rounded-full p-1.5 gap-1 whitespace-nowrap">
              {tabs.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTab(t.value)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    tab === t.value ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((p, i) => (
                <AnimatedSection key={p.name} delay={i * 0.06}>
                  <motion.div whileHover={{ y: -6 }} className="bg-card border border-border rounded-3xl overflow-hidden group h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img src={p.img} alt={p.name} className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{p.desc}</p>
                      <ul className="space-y-1.5 mb-5">
                        {p.details.map((d) => (
                          <li key={d} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`${WHATSAPP_BASE}${encodeURIComponent(`Hi, I'd like to order ${p.name} from Ashy Wineish Farms.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto"
                      >
                        <Button size="sm" className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                          <MessageCircle className="h-3.5 w-3.5" />
                          Request Quote
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Dry Fish Process Showcase */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-black text-primary-foreground mt-4">Dry Fish Production</h2>
            <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto">
              From fresh catch to premium dried fish — we use a custom-built stainless steel smoking oven for consistent quality, rich smoky flavour,
              and extended shelf life.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: dryfishProcessImg,
                title: "Traditional Smoking",
                desc: "Fresh catfish and tilapia smoked over controlled heat for authentic Nigerian flavour.",
              },
              {
                img: dryfishOvenImg,
                title: "Custom Steel Oven",
                desc: "Our purpose-built stainless steel oven ensures even heat distribution and hygienic processing.",
              },
              {
                img: dryfishDisplayImg,
                title: "Ready for Market",
                desc: "Perfectly dried, beautifully golden fish packaged for bulk and retail customers.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl overflow-hidden backdrop-blur-sm"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary-foreground mb-2 text-lg">{item.title}</h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Service Banner */}
      <AnimatedSection>
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-[#f5f0e8]/5">
              <div className="grid md:grid-cols-5 items-center">
                <div className="md:col-span-2 relative h-56 md:h-full min-h-[280px]">
                  <img src={wineRedImg} alt="Premium wine" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="md:col-span-3 p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-3">
                    <Wine className="h-4 w-4 text-[#8B1A1A]" />
                    <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">Event Wine Service</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#f5f0e8] mb-3 leading-tight">
                    Ashy Wineish <span className="text-[#d4a574]">Premium Wine Service</span>
                  </h3>
                  <p className="text-[#f5f0e8]/50 mb-6 text-sm leading-relaxed max-w-lg">
                    We serve premium wines at weddings, parties, corporate events, and private gatherings. Let us bring elegance to your occasion.
                  </p>
                  <Link to="/wines">
                    <Button className="rounded-full bg-[#8B1A1A] hover:bg-[#6d1414] text-[#f5f0e8] gap-2 px-8">
                      Visit the Winery <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Beyond Farming</span>
            <h2 className="text-4xl sm:text-5xl font-black text-primary-foreground mt-4">Our Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl p-8 text-center backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-primary-foreground mb-2 text-lg">{s.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Products;
