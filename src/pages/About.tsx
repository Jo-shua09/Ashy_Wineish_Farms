import { motion } from "framer-motion";
import { Award, Leaf, Shield, Handshake, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import founderImg from "@/assets/founder.jpg";
import heroAboutImg from "@/assets/hero-about.jpg";
import aboutFarmImg from "@/assets/about-farm.jpg";

const WHATSAPP_URL = "https://wa.me/2349061230796?text=" + encodeURIComponent("Hello, I'd like to learn more about Ashy Wineish Farms.");

const values = [
  { icon: Award, title: "Quality", desc: "We maintain the highest standards in farming through careful monitoring and best practices." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly methods that protect our land for future generations." },
  { icon: Handshake, title: "Reliability", desc: "Consistent supply and timely delivery you can always count on." },
  { icon: Shield, title: "Integrity", desc: "Honest practices and transparent dealings with every customer." },
];

const About = () => (
  <PageTransition>
    {/* Hero — cinematic */}
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <img src={heroAboutImg} alt="Farmer in maize field at sunset" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay)/0.4)] to-transparent" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">About Us</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mt-4 leading-[0.95] tracking-tight">
            Rooted in Passion
            <br />& <span className="text-accent">Quality</span>
          </h1>
        </motion.div>
      </div>
    </section>

    {/* Our Story */}
    <AnimatedSection>
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4 mb-8 leading-tight">
                From a Bold Vision
                <br />
                to Thriving <span className="text-primary">Farmland</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Founded by <strong className="text-foreground">Kasali Kabiru Ayanshina</strong>, Ashy Wineish Farms was born out of a deep passion
                  for agriculture and a bold desire to feed communities with the healthiest produce possible.
                </p>
                <p>
                  In 2024, we took our first major step — planting 2 acres of maize alongside cassava on fertile land in Owode-Idiroko, Ogun State.
                  Through careful irrigation, dedicated monitoring, and strict weed management, we ensure only the healthiest crops and livestock
                  reach our community.
                </p>
                <p>
                  Today, our farm has expanded to include poultry (chicken & turkey), fish farming, piggery, goats, and cattle — all raised with the
                  same commitment to quality and health.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={founderImg} alt="Founder Kasali Kabiru Ayanshina" loading="lazy" className="w-full h-[32rem] object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-4 bg-accent text-accent-foreground rounded-2xl p-6 shadow-2xl hidden lg:block"
              >
                <p className="text-4xl font-black">2024</p>
                <p className="text-sm text-accent-foreground/80 font-medium">
                  Year
                  <br />
                  Founded
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>

    {/* Mission & Vision — Bold typographic */}
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="space-y-6">
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Mission</span>
              <h3 className="text-3xl lg:text-4xl font-black text-primary-foreground leading-tight">
                "To provide premium, sustainably-farmed produce that nourishes our community."
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed text-lg">
                We are committed to sustainable agricultural practices that produce healthy food while preserving the environment for generations to
                come.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Vision</span>
              <h3 className="text-3xl lg:text-4xl font-black text-primary-foreground leading-tight">
                "To become the leading provider of organic, farm-fresh produce in Southwestern Nigeria."
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed text-lg">
                We envision a future where every family has access to affordable, high-quality agricultural products grown with integrity and care.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Full-width image break */}
    <div className="h-[40vh] min-h-[300px] overflow-hidden">
      <img src={aboutFarmImg} alt="Aerial view of our mixed farm" loading="lazy" className="w-full h-full object-cover" />
    </div>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">What Drives Us</span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-3xl p-7 text-center group hover:bg-primary hover:border-primary transition-colors h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <v.icon className="h-7 w-7 text-accent group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary-foreground mb-2 text-lg transition-colors">{v.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed transition-colors">{v.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <AnimatedSection>
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-10 h-14">
              Get in Touch <ArrowUpRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </AnimatedSection>
  </PageTransition>
);

export default About;
