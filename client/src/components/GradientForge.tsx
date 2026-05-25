import { motion } from "framer-motion";

type GradientForgeProps = {
  gradients: string[];
  onCopy: (value: string) => void;
};

function GradientForge({ gradients, onCopy }: GradientForgeProps) {
  return (
    <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div className="text-left">
        <h3 className="text-2xl font-semibold">Gradient Forge</h3>
        <p className="mt-2 text-sm text-white/50">
          Auto-generated gradients from the selected style palette.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gradients.map((gradient, index) => (
          <motion.button
            key={gradient}
            onClick={() => onCopy(gradient)}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="group relative h-44 overflow-hidden rounded-3xl border border-white/10 text-left shadow-2xl"
            style={{ background: gradient }}
          >
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />

            <div className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur">
              Gradient {index + 1}
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs text-white/80 opacity-0 transition group-hover:opacity-100">
                Click to copy CSS
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export default GradientForge;