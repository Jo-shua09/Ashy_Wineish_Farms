import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

interface LoaderProps {
  fullScreen?: boolean;
}

const Loader = ({ fullScreen = true }: LoaderProps) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
    : "flex flex-col items-center justify-center w-full h-full min-h-[300px]";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className={containerClasses}>
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/5 shadow-[0_0_40px_rgba(26,71,42,0.1)]">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            <Leaf className="h-10 w-10 text-primary opacity-80" />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[3px] border-primary/20 border-t-primary"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl font-black tracking-tight text-foreground">Ashy Wineish</span>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary"
          >
            Loading
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
