import { motion } from "framer-motion";
import type { StylePreset } from "../data/stylePresets";

type StyleExplorerProps = {
  filteredPresets: StylePreset[];
  selectedPreset: StylePreset;
  onSelectPreset: (preset: StylePreset) => void;
};

function StyleExplorer({
  filteredPresets,
  selectedPreset,
  onSelectPreset,
}: StyleExplorerProps) {
  return (
    <section className="mt-12 text-left">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Style Explorer</h3>
          <p className="mt-2 text-sm text-white/50">
            Browse cinematic presets and apply one instantly.
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
          {filteredPresets.length} styles
        </div>
      </div>

      {filteredPresets.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredPresets.map((preset) => (
            <motion.button
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className={`group overflow-hidden rounded-[1.5rem] border bg-white/[0.04] p-4 text-left backdrop-blur transition ${
                selectedPreset.id === preset.id
                  ? "border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              <div className="flex h-24 overflow-hidden rounded-2xl border border-white/10">
                {preset.baseColors.map((color) => (
                  <div
                    key={color}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-white">{preset.name}</h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {preset.category}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {preset.mood}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {preset.temperature}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {preset.intensity}
                  </span>
                </div>

                <p className="mt-4 text-xs text-white/40 opacity-0 transition group-hover:opacity-100">
                  Click to apply this style
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-white/50">
          No style found for this filter combination.
        </div>
      )}
    </section>
  );
}

export default StyleExplorer;