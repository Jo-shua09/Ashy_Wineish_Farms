import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Heart, MessageSquare, ShieldCheck, Truck, Leaf, ArrowUpRight, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import heroImg from "@/assets/hero-farm.jpg";
import maizeImg from "@/assets/maize.jpg";
import chickenImg from "@/assets/chicken.jpg";
import fishImg from "@/assets/fish.jpg";
import aboutFarmImg from "@/assets/about-farm.jpg";
import wineRedImg from "@/assets/wine-red-bottle.jpg";
import { useRef } from "react";

const WHATSAPP_URL = "https://wa.me/2349061230796?text=" + encodeURIComponent("Hello, I'd like to place an order.");

const featuredProducts = [
  { name: "Fresh Maize", desc: "Irrigated & carefully cultivated maize from our Owode-Idiroko farm.", img: maizeImg },
  { name: "Healthy Chicken", desc: "Free-range poultry raised with quality feed and regular health checks.", img: chickenImg },
  { name: "Farm-Fresh Fish", desc: "Responsibly farmed fish, fresh and ready for your table.", img: fishImg },
];

const whyCards = [
  {
    icon: Heart,
    title: "Healthy Society Focus",
    desc: "Our produce is grown and raised with your health as our top priority.",
    stat: "100%",
    statLabel: "Natural",
  },
  {
    icon: MessageSquare,
    title: "Real Feedback",
    desc: "We listen to our customers and continuously improve our practices.",
    stat: "200+",
    statLabel: "Happy Clients",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Strict monitoring, irrigation control, and weed management standards.",
    stat: "98%",
    statLabel: "Quality Rate",
  },
  {
    icon: Truck,
    title: "Speedy Delivery",
    desc: "Fast delivery across Ogun State — Sango Ota, Ifo, Agbara, and Badagry.",
    stat: "24hr",
    statLabel: "Delivery",
  },
];

const marqueeWords = ["Sustainable", "Organic", "Fresh", "Quality", "Reliable", "Farm-to-Table", "Healthy", "Natural", "Premium", "Trusted"];

const stats = [
  { value: "2+", label: "Acres of Farmland" },
  { value: "8+", label: "Product Categories" },
  { value: "200+", label: "Satisfied Customers" },
  { value: "98%", label: "On-time Delivery" },
];

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageTransition>
      {/* Hero — Full-bleed cinematic like HarvestHill */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center md:items-end overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Lush green farm at Ashy Wineish Farms"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: heroScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay)/0.5)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.7)] to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full flex items-center md:items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
            <div className="flex md:flex-nowrap flex-wrap justify-end gap-x-8 items-end ">
              {/* Left — headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className=" w-full md:flex-[2]"
              >
                <div className="flex items-end gap-2">
                  <Leaf className="h-4 w-4 text-accent" />
                  <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Established 2024</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-8 tracking-tight">
                  Sustainable Farming for a <span className="text-accent">Healthier</span> Society.
                </h1>
              </motion.div>

              {/* Right — description + CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="lg:pb-10 w-full md:flex-1"
              >
                <p className="text-lg text-primary-foreground/70 max-w-md mb-8 leading-relaxed">
                  Providing premium crops and healthy livestock, delivered fresh from our Owode-Idiroko farm to your table.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 h-14">
                      Explore Produce <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 text-base px-8 h-14"
                    >
                      Order Now <ArrowUpRight className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-1">
        <div className="bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/10">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.1}>
                  <div className="py-8 lg:py-10 px-6 text-center">
                    <p className="text-3xl lg:text-4xl font-black text-primary-foreground mb-1">{s.value}</p>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-wider font-medium">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-card border-y border-border overflow-hidden py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="mx-6 text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground/50 flex items-center gap-6">
              {word}
              <span className="w-2 h-2 rounded-full bg-accent/40" />
            </span>
          ))}
        </div>
      </section>

      {/* Intro Snippet */}
      <AnimatedSection>
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">What We Do</span>
                <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4 mb-8 leading-tight">
                  Growing Quality,
                  <br />
                  Nurturing <span className="text-primary">Health</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  At Ashy Wineish Farms, we cultivate premium maize and cassava across 2 acres of fertile land in Owode-Idiroko, alongside raising
                  healthy livestock including chicken, turkey, fish, goats, and cattle. Every product is nurtured with care.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-3 text-primary font-bold hover:text-accent transition-colors text-lg">
                  Read Our Full Story
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={aboutFarmImg} alt="Farm workers tending crops" className="w-full h-[28rem] lg:h-[32rem] object-cover img-zoom" />
                </div>
                {/* Floating card overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-2xl hidden lg:block"
                >
                  <p className="text-4xl font-black">2+</p>
                  <p className="text-sm text-primary-foreground/70 font-medium">
                    Acres of
                    <br />
                    Farmland
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Products */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Produce</span>
              <h2 className="text-4xl sm:text-5xl font-black text-primary-foreground mt-4 leading-tight">Featured Products</h2>
            </div>
            <Link to="/products">
              <Button
                variant="outline"
                className="rounded-full gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary-foreground/10 group"
                >
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">{p.name}</h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Bento Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Promise</span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4">Why Choose Us</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 24px 48px -12px hsl(153 43% 18% / 0.12)" }}
                  className="bg-card border border-border rounded-3xl p-7 group transition-colors hover:bg-primary hover:border-primary relative overflow-hidden h-full"
                >
                  <div className="absolute top-6 right-6 text-5xl font-black text-border/50 group-hover:text-primary-foreground/10 transition-colors">
                    {c.stat}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors">
                    <c.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">{c.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed transition-colors">{c.desc}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-wider font-bold text-muted-foreground/50 group-hover:text-primary-foreground/40 transition-colors">
                    {c.statLabel}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Promotional Banner */}
      <AnimatedSection>
        <section className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a]">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-4 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Wine className="h-4 w-4 text-[#8B1A1A]" />
                    <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">Premium Wine</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5f0e8] mb-4 leading-tight">
                    Discover Our
                    <br />
                    Exclusive Wine
                    <br />
                    <span className="text-[#d4a574]">Collection</span>
                  </h2>
                  <p className="text-[#f5f0e8]/50 mb-8 leading-relaxed max-w-md">
                    From our vineyards to your glass — premium red, white, rosé, and sparkling wines crafted with passion by Ashy Wineish Nigeria
                    Limited.
                  </p>
                  <Link to="/wines">
                    <Button size="lg" className="rounded-full bg-[#8B1A1A] hover:bg-[#6d1414] text-[#f5f0e8] gap-2 text-base px-10 h-14">
                      Visit the Winery <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="relative h-64 lg:h-full min-h-[320px]">
                  <img src={wineRedImg} alt="Premium red wine from Ashy  Wineish" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent lg:block hidden" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection>
        <section className="py-12 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay))] to-[hsl(var(--hero-overlay)/0.8)]" />
              <div className="relative z-10 py-20 lg:py-28 px-8 lg:px-16 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">Ready to Order Fresh Produce?</h2>
                <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
                  Get farm-fresh crops and healthy livestock delivered directly to you.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-10 h-14">
                    Order on WhatsApp <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PageTransition>
  );
};

export default Index;
