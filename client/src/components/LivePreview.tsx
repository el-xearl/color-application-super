type ContrastScore = {
  ratio: number;
  level: string;
};

type DesignSystem = {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  text: string;
};

type LivePreviewProps = {
  designSystem: DesignSystem;
  contrastScore: ContrastScore;
};

function LivePreview({ designSystem, contrastScore }: LivePreviewProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div
        className="overflow-hidden rounded-[1.5rem] border border-white/10"
        style={{ backgroundColor: designSystem.primary }}
      >
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: designSystem.secondary }}
        >
          <span className="font-semibold">Live Preview</span>
          <button
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: designSystem.accent,
              color: designSystem.text,
            }}
          >
            Action
          </button>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2">
          <div
            className="rounded-3xl p-5"
            style={{ backgroundColor: designSystem.surface }}
          >
            <p className="text-sm opacity-70">Dashboard Card</p>
            <h4 className="mt-3 text-3xl font-bold">{contrastScore.ratio}</h4>
            <p className="mt-2 text-sm opacity-70">
              Contrast score: {contrastScore.level}
            </p>
          </div>

          <div
            className="rounded-3xl p-5"
            style={{ backgroundColor: designSystem.surface }}
          >
            <p className="text-sm opacity-70">Accent Color</p>
            <div
              className="mt-4 h-16 rounded-2xl"
              style={{ backgroundColor: designSystem.accent }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LivePreview;