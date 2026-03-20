import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroImg from "@/assets/hero-farm.jpg";
import founderImg from "@/assets/founder.jpg";
import aboutFarmImg from "@/assets/about-farm.jpg";

const images = [
  { src: gallery1, caption: "Expansive crop fields", span: "col-span-1 row-span-1" },
  { src: gallery2, caption: "Harvest season workers", span: "col-span-1 row-span-2" },
  { src: gallery3, caption: "Fresh maize seedlings", span: "col-span-1 row-span-1" },
  { src: gallery4, caption: "Modern poultry facility", span: "col-span-1 row-span-1" },
  { src: gallery5, caption: "Farm-fresh produce", span: "col-span-1 row-span-2" },
  { src: gallery6, caption: "Sunset over farmland", span: "col-span-1 row-span-1" },
  { src: heroImg, caption: "Aerial view of our farm", span: "col-span-2 row-span-1" },
  { src: founderImg, caption: "Our founder in the field", span: "col-span-1 row-span-1" },
  { src: aboutFarmImg, caption: "Community farming", span: "col-span-1 row-span-1" },
];

const Gallery = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={gallery1} alt="Farm gallery" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay)/0.5)] to-transparent" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Gallery</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mt-4 leading-[0.95] tracking-tight">
            Life on
            <br />
            the <span className="text-accent">Farm</span>
          </h1>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden group break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full object-cover ${i % 3 === 1 ? "h-80 lg:h-96" : "h-56 lg:h-72"} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-primary-foreground text-sm font-bold">{img.caption}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Gallery;
