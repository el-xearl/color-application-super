type ExportBlock = {
  title: string;
  content: string;
};

type ExportCenterProps = {
  exportBlocks: ExportBlock[];
  onCopy: (value: string) => void;
};

function ExportCenter({ exportBlocks, onCopy }: ExportCenterProps) {
  return (
    <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div className="text-left">
        <h3 className="text-2xl font-semibold">Export Center</h3>
        <p className="mt-2 text-sm text-white/50">
          Copy your generated color system as CSS, Tailwind or JSON.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {exportBlocks.map((block) => (
          <div
            key={block.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 text-left"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h4 className="font-semibold">{block.title}</h4>
              <button
                onClick={() => onCopy(block.content)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white hover:text-black"
              >
                Copy
              </button>
            </div>

            <pre className="max-h-72 overflow-auto p-5 text-xs leading-relaxed text-white/70">
              <code>{block.content}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExportCenter;