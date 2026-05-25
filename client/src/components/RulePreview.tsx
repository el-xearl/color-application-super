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

type RulePreviewProps = {
  designSystem: DesignSystem;
  contrastScore: ContrastScore;
};

function RulePreview({ designSystem, contrastScore }: RulePreviewProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur">
      <h3 className="text-2xl font-semibold">30-60-10 Rule</h3>
      <p className="mt-2 text-sm text-white/50">
        Practical distribution for real UI design.
      </p>

      <div className="mt-8 space-y-5">
        {[
          ["60% Primary / Background", designSystem.primary, "60%"],
          ["30% Secondary / Surface", designSystem.secondary, "30%"],
          ["10% Accent / CTA", designSystem.accent, "10%"],
        ].map(([label, color, width]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-sm">
              <span>{label}</span>
              <span>{color}</span>
            </div>

            <div className="h-6 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        ))}

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
          <p className="text-sm text-white/50">Accessibility Check</p>

          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold">{contrastScore.ratio}</h4>
              <p className="mt-1 text-sm text-white/60">
                Text contrast level: {contrastScore.level}
              </p>
            </div>

            <div
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor:
                  contrastScore.level === "Excellent"
                    ? "#22c55e"
                    : contrastScore.level === "Good"
                    ? "#84cc16"
                    : contrastScore.level === "Medium"
                    ? "#f59e0b"
                    : "#ef4444",
                color: "#000",
              }}
            >
              {contrastScore.level}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RulePreview;