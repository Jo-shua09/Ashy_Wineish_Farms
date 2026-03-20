import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Wine,
  ChevronDown,
  ArrowUpRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Grape,
  GlassWater,
  Sparkles,
  Award,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

import wineLogo from "@/assets/wine-logo.png";
import heroImg from "@/assets/wine-hero.jpg";
import redBottle from "@/assets/wine-red-bottle.jpg";
import whiteBottle from "@/assets/wine-white-bottle.jpg";
import roseBottle from "@/assets/wine-rose-bottle.jpg";
import sparklingBottle from "@/assets/wine-sparkling.jpg";
import cellarImg from "@/assets/wine-cellar.jpg";
import harvestImg from "@/assets/wine-harvest.jpg";
import tastingImg from "@/assets/wine-tasting.jpg";

const WHATSAPP_URL = "https://wa.me/2349061230796?text=" + encodeURIComponent("Hello, I'd like to order wine from Ashy Wineish.");

const wines = [
  {
    name: "Château Reserve Red",
    type: "Red Wine",
    img: redBottle,
    price: "₦18,500",
    tasting: "Deep ruby with notes of dark cherry, oak, and subtle spice. Full-bodied with velvety tannins.",
    pairing: "Grilled meats, aged cheese, rich pasta dishes",
    volume: "750ml",
    alcohol: "13.5%",
  },
  {
    name: "Domaine Blanc",
    type: "White Wine",
    img: whiteBottle,
    price: "₦15,000",
    tasting: "Crisp and refreshing with citrus, green apple, and floral aromas. Light and mineral-driven.",
    pairing: "Seafood, light salads, goat cheese, poultry",
    volume: "750ml",
    alcohol: "12%",
  },
  {
    name: "Rosé de Provence",
    type: "Rosé",
    img: roseBottle,
    price: "₦16,500",
    tasting: "Delicate salmon pink. Bright strawberry and peach with a dry, elegant finish.",
    pairing: "Mediterranean cuisine, grilled vegetables, sushi",
    volume: "750ml",
    alcohol: "12.5%",
  },
  {
    name: "Cuvée Prestige Brut",
    type: "Sparkling",
    img: sparklingBottle,
    price: "₦22,000",
    tasting: "Fine persistent bubbles. ToAshy brioche, citrus zest, and green apple. Crisp and celebratory.",
    pairing: "Appetizers, oysters, celebrations, desserts",
    volume: "750ml",
    alcohol: "11.5%",
  },
];

const highlights = [
  {
    icon: Award,
    title: "Exceptional Standards",
    text: "Every bottle of Ashy Wineish is a testament to our dedication to quality, crafted for those who appreciate the finer things.",
  },
  {
    icon: Sparkles,
    title: "Perfect for Every Occasion",
    text: "Whether it's a quiet dinner, a grand celebration, or a gift for a loved one, our collection elevates every moment.",
  },
  {
    icon: GlassWater,
    title: "Refined Taste Profile",
    text: "We carefully balance tradition and modern techniques to produce wines with rich aromas, deep flavors, and smooth finishes.",
  },
  {
    icon: Grape,
    title: "Locally Proud, Globally Inspired",
    text: "Rooted in our Nigerian heritage, yet crafted to rival the world's most distinguished vineyards.",
  },
];

const processSteps = [
  {
    icon: Grape,
    title: "Vineyard Selection",
    desc: "Hand-selected grapes from the finest regional vineyards, chosen for optimal ripeness and character.",
  },
  {
    icon: GlassWater,
    title: "Artisan Crafting",
    desc: "Traditional winemaking methods blended with modern techniques for exceptional depth and balance.",
  },
  { icon: Sparkles, title: "Oak Aging", desc: "Patient barrel aging in premium oak develops complexity, texture, and the signature smoothness." },
  {
    icon: Award,
    title: "Quality Certified",
    desc: "Every bottle passes rigorous quality checks before earning the Ashy Wineish seal of excellence.",
  },
];

const galleryImages = [
  { src: cellarImg, caption: "Our Cellar" },
  { src: harvestImg, caption: "Harvest Season" },
  { src: tastingImg, caption: "Wine Tasting" },
  { src: heroImg, caption: "The Vineyard" },
];

const Wines = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#0a0a0a] text-[#f5f0e8] min-h-screen overflow-x-hidden font-mulish">
      {/* Wine Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#f5f0e8]/5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <img src={wineLogo} alt="Ashy Wineish" className="h-10 w-10 object-contain" />
              <span className="text-lg md:text-xl font-bold tracking-tight">
                Ashy <span className="text-[#8B1A1A]">Wineish</span>
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {["Collection", "Process", "Gallery", "Experience"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[#f5f0e8]/60 hover:text-[#d4a574] transition-colors tracking-wide"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/" className="hidden lg:inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" />
                Farm
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-[#8B1A1A] hover:bg-[#6d1414] text-[#f5f0e8] gap-2 text-sm px-6">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Order Wine</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Vineyard at sunset"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: heroScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <img src={wineLogo} alt="Ashy Wineish Logo" className="h-20 w-20 lg:h-28 md:w-28 mx-auto my-2 !mb-0 object-contain" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <span className="text-[#d4a574] text-xs font-bold tracking-[0.3em] uppercase">Premium Wine Collection</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mt-3 mb-3 leading-[0.9] tracking-tight">
              Taste the
              <br />
              <span className="text-[#8B1A1A]">Extraordinary</span>
            </h1>
            <p className="text-lg md:text-xl text-[#f5f0e8]/50 max-w-xl mx-auto mb-10 leading-relaxed">
              Curated wines of distinction, crafted with passion and precision. From our cellar to your occasion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#collection">
                <Button size="lg" className="rounded-full bg-[#8B1A1A] hover:bg-[#6d1414] text-[#f5f0e8] gap-2 text-base px-10 h-14">
                  Explore Collection <Wine className="h-5 w-5" />
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#f5f0e8]/20 text-[#f5f0e8] hover:bg-[#f5f0e8]/5 gap-2 text-base px-10 h-14"
                >
                  Order Now <ArrowUpRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="relative z-20 border-y border-[#f5f0e8]/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#f5f0e8]/5">
            {[
              { value: "4", label: "Wine Varieties" },
              { value: "100%", label: "Premium Quality" },
              { value: "500+", label: "Bottles Sold" },
              { value: "4.9★", label: "Customer Rating" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="py-8 lg:py-10 px-6 text-center">
                  <p className="text-3xl lg:text-4xl font-black text-[#d4a574] mb-1">{s.value}</p>
                  <p className="text-[10px] text-[#f5f0e8]/40 uppercase tracking-[0.15em] font-medium">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story / About */}
      <AnimatedSection>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">Our Heritage</span>
                <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-8 leading-tight">
                  Where Tradition
                  <br />
                  Meets <span className="text-[#d4a574]">Craft</span>
                </h2>
                <p className="text-[#f5f0e8]/50 leading-relaxed mb-6 text-lg">
                  Ashy Wineish Nigeria Limited is a premium wine brand born from the same passion for quality that drives Ashj Klineish Farms. We
                  believe that exceptional wine begins with exceptional care — from vineyard selection to the final pour.
                </p>
                <p className="text-[#f5f0e8]/50 leading-relaxed mb-8">
                  Our collection features carefully curated wines sourced from distinguished vineyards and crafted using time-honored methods. Each
                  bottle carries our commitment to excellence and the warmth of Nigerian hospitality.
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-black text-[#8B1A1A]">2024</p>
                    <p className="text-[10px] text-[#f5f0e8]/40 uppercase tracking-wider">Founded</p>
                  </div>
                  <div className="w-px h-12 bg-[#f5f0e8]/10" />
                  <div className="text-center">
                    <p className="text-3xl font-black text-[#8B1A1A]">4</p>
                    <p className="text-[10px] text-[#f5f0e8]/40 uppercase tracking-wider">Varieties</p>
                  </div>
                  <div className="w-px h-12 bg-[#f5f0e8]/10" />
                  <div className="text-center">
                    <p className="text-3xl font-black text-[#8B1A1A]">Premium</p>
                    <p className="text-[10px] text-[#f5f0e8]/40 uppercase tracking-wider">Quality</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img src={cellarImg} alt="Wine cellar with oak barrels" className="w-full h-[28rem] lg:h-[34rem] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#8B1A1A] rounded-2xl p-6 shadow-2xl hidden lg:block">
                  <Wine className="h-8 w-8 text-[#d4a574] mb-2" />
                  <p className="text-sm font-bold">Crafted with</p>
                  <p className="text-xs text-[#f5f0e8]/60">Passion & Precision</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Wine Collection */}
      <section id="collection" className="py-12 lg:py-20 bg-[#111111]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">The Collection</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4">Our Finest Wines</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wines.map((wine, i) => (
              <AnimatedSection key={wine.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1a1a1a] border border-[#f5f0e8]/5 rounded-3xl overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden bg-[#0d0d0d] flex items-center justify-center p-6 pt-8">
                    <img
                      src={wine.img}
                      alt={wine.name}
                      className="w-full h-72 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#8B1A1A] text-[#f5f0e8] text-xs font-bold px-3 py-1.5 rounded-full">{wine.type}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold">{wine.name}</h3>
                    </div>
                    <p className="text-[#f5f0e8]/40 text-sm leading-relaxed mb-4">{wine.tasting}</p>
                    <div className="space-y-2 mb-5 text-xs text-[#f5f0e8]/30">
                      <div className="flex justify-between">
                        <span>Volume</span>
                        <span className="text-[#f5f0e8]/60">{wine.volume}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Alcohol</span>
                        <span className="text-[#f5f0e8]/60">{wine.alcohol}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pairs with</span>
                        <span className="text-[#f5f0e8]/60 text-right max-w-[60%]">{wine.pairing}</span>
                      </div>
                    </div>
                    <a
                      href={`${WHATSAPP_URL.replace("order wine", `order ${wine.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button className="w-full rounded-full bg-[#8B1A1A] hover:bg-[#6d1414] text-[#f5f0e8] gap-2">
                        <MessageCircle className="h-3.5 w-3.5" />
                        Order Now
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">The Process</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4">From Vine to Glass</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(139, 26, 26, 0.15)" }}
                  className="bg-[#1a1a1a] border border-[#f5f0e8]/5 rounded-3xl p-8 group hover:border-[#8B1A1A]/30 transition-colors h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#8B1A1A]/10 flex items-center justify-center mb-6 group-hover:bg-[#8B1A1A]/20 transition-colors">
                    <step.icon className="h-7 w-7 text-[#8B1A1A]" />
                  </div>
                  <div className="text-5xl font-black text-[#f5f0e8]/5 mb-4">0{i + 1}</div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#f5f0e8]/40 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <AnimatedSection>
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={harvestImg} alt="Grape harvest" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                Every Bottle Tells
                <br />a <span className="text-[#d4a574]">Story</span>
              </h2>
              <p className="text-[#f5f0e8]/50 max-w-lg mx-auto">
                From sun-drenched vineyards to your glass, we honor every step of the journey with care and craftsmanship.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery */}
      <section id="gallery" className="py-12 lg:py-20 bg-[#111111]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">Gallery</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4">Behind the Scenes</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.caption} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[3/4]"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-sm font-bold">{img.caption}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button onClick={() => setLightboxIdx(null)} className="absolute top-6 right-6 text-[#f5f0e8]/60 hover:text-[#f5f0e8]">
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 md:left-8 text-[#f5f0e8]/60 hover:text-[#f5f0e8]"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx + 1) % galleryImages.length);
              }}
              className="absolute right-4 md:right-8 text-[#f5f0e8]/60 hover:text-[#f5f0e8]"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].caption}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Experience / Promise */}
      <section id="experience" className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">Our Promise</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4">The Ashy Wineish Experience</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#1a1a1a] border border-[#f5f0e8]/5 rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center mb-5">
                    <h.icon className="h-5 w-5 text-[#d4a574]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#f5f0e8] mb-3">{h.title}</h3>
                  <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">{h.text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-12 lg:py-20 bg-[#111111]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="text-[#8B1A1A] font-bold text-xs uppercase tracking-[0.2em]">Get In Touch</span>
                <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-8 leading-tight">
                  Ready to
                  <br />
                  <span className="text-[#d4a574]">Order?</span>
                </h2>
                <p className="text-[#f5f0e8]/50 leading-relaxed mb-10 text-lg">
                  Order your favourite wines directly via WhatsApp. We deliver across Ogun State, Lagos, and beyond. Minimum order: 6 bottles.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-[#8B1A1A] hover:bg-[#6d1414] text-[#f5f0e8] gap-2 text-base px-10 h-14">
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </Button>
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Location", value: "Owode, Ogun State, Yewa South, Owode-Idiroko" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "09061230796" },
                  { icon: Mail, label: "Email", value: "Kasalikabiru1993@gmail.com" },
                  { icon: Clock, label: "Business Hours", value: "Mon — Sun: 8am — 6pm" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 bg-[#1a1a1a] border border-[#f5f0e8]/5 rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-[#8B1A1A]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#f5f0e8]/30 uppercase tracking-wider font-bold mb-1">{label}</p>
                      <p className="text-sm text-[#f5f0e8]/70">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Wine Footer */}
      <footer className="border-t border-[#f5f0e8]/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={wineLogo} alt="Ashy Wineish" className="h-8 w-8 object-contain" />
              <span className="font-bold">Ashy Wineish Nigeria Limited</span>
            </div>
            <p className="text-xs text-[#f5f0e8]/30 text-center">A premium brand by Ashy Wineish Limited • Crafted with passion</p>
            <Link to="/" className="text-sm text-[#f5f0e8]/40 hover:text-[#d4a574] transition-colors flex items-center gap-2">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Farms
            </Link>
          </div>
        </div>
        <div className="border-t border-[#f5f0e8]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-[#f5f0e8]/20">
            © {new Date().getFullYear()} Ashy Wineish Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Wines;
