import { Wand2 } from "lucide-react";

type ActionButtonsProps = {
  onRandomStyle: () => void;
  onGenerateVariation: () => void;
  onSavePalette: () => void;
  saveStatus: string;
};

function ActionButtons({
  onRandomStyle,
  onGenerateVariation,
  onSavePalette,
  saveStatus,
}: ActionButtonsProps) {
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <button
          onClick={onRandomStyle}
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
        >
          <Wand2 size={18} />
          Generate Random Style
        </button>

        <button
          onClick={onGenerateVariation}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
        >
          Generate Variation
        </button>

        <button
          onClick={onSavePalette}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-7 py-4 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-emerald-500/30"
        >
          Save Palette
        </button>
      </div>

      {saveStatus && (
        <p className="mt-4 text-sm text-white/60">{saveStatus}</p>
      )}
    </>
  );
}

export default ActionButtons;