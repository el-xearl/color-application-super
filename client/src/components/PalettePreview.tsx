import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

type PalettePreviewProps = {
  palette: string[];
  copiedColor: string | null;
  onCopyColor: (color: string) => void;
};

function PalettePreview({
  palette,
  copiedColor,
  onCopyColor,
}: PalettePreviewProps) {
  return (
    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-5 gap-4">
      {palette.map((color) => (
        <motion.button
          key={color}
          onClick={() => onCopyColor(color)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="group relative h-52 overflow-hidden rounded-3xl border border-white/10 text-left shadow-2xl transition"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 opacity-0 backdrop-blur transition group-hover:opacity-100">
            {copiedColor === color ? <Check size={18} /> : <Copy size={18} />}
          </div>

          <div className="absolute bottom-5 left-0 right-0 text-center">
            <p className="text-sm font-semibold tracking-widest text-white drop-shadow">
              {color}
            </p>
            <p className="mt-1 text-xs text-white/70 opacity-0 transition group-hover:opacity-100">
              Click to copy
            </p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export default PalettePreview;