type SavedPalette = {
  _id: string;
  name: string;
  category: string;
  mood: string;
  temperature: string;
  intensity: string;
  colors: string[];
  gradients: string[];
};

type SavedPalettesProps = {
  savedPalettes: SavedPalette[];
  onCopyColor: (color: string) => void;
  onDeletePalette: (id: string) => void;
};

function SavedPalettes({
  savedPalettes,
  onCopyColor,
  onDeletePalette,
}: SavedPalettesProps) {
  return (
    <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div className="text-left">
        <h3 className="text-2xl font-semibold">Saved Palettes</h3>
        <p className="mt-2 text-sm text-white/50">
          Palettes saved in MongoDB.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {savedPalettes.length > 0 ? (
          savedPalettes.map((item) => (
            <div
              key={item._id}
              className="rounded-3xl border border-white/10 bg-black/30 p-4 text-left"
            >
              <div className="flex h-20 overflow-hidden rounded-2xl border border-white/10">
                {item.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => onCopyColor(color)}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <h4 className="mt-4 font-semibold">{item.name}</h4>

              <p className="mt-2 text-xs text-white/50">
                {item.category} / {item.mood} / {item.temperature} /{" "}
                {item.intensity}
              </p>

              <button
                onClick={() => onDeletePalette(item._id)}
                className="mt-4 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500/20"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-white/10 bg-black/30 p-8 text-center text-white/50">
            No saved palettes yet.
          </div>
        )}
      </div>
    </section>
  );
}

export default SavedPalettes;