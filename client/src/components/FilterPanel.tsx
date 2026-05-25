 import { Filter, Search } from "lucide-react";

type FilterPanelProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;

  categories: string[];
  moods: string[];
  temperatures: string[];
  intensities: string[];

  selectedCategory: string;
  selectedMood: string;
  selectedTemperature: string;
  selectedIntensity: string;

  setSelectedCategory: (value: string) => void;
  setSelectedMood: (value: string) => void;
  setSelectedTemperature: (value: string) => void;
  setSelectedIntensity: (value: string) => void;
};

function FilterPanel({
  searchQuery,
  setSearchQuery,
  categories,
  moods,
  temperatures,
  intensities,
  selectedCategory,
  selectedMood,
  selectedTemperature,
  selectedIntensity,
  setSelectedCategory,
  setSelectedMood,
  setSelectedTemperature,
  setSelectedIntensity,
}: FilterPanelProps) {
  return (
    <>
      <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Filter size={16} />
          Style Filters
        </div>

        <div className="relative mx-auto mb-6 max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vampire, cyberpunk, luxury..."
            className="w-full rounded-full border border-white/10 bg-black/30 py-4 pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/60 focus:bg-black/50"
          />
        </div>

        <div className="mb-5">
          <p className="mb-3 text-sm text-white/50">Category</p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm text-white/50">Mood</p>
          <div className="flex flex-wrap justify-center gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedMood === mood
                    ? "border-purple-400 bg-purple-500/30 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-3 text-sm text-white/50">Temperature</p>
        <div className="flex flex-wrap justify-center gap-2">
          {temperatures.map((temperature) => (
            <button
              key={temperature}
              onClick={() => setSelectedTemperature(temperature)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selectedTemperature === temperature
                  ? "border-red-400 bg-red-500/30 text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {temperature}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-3 text-sm text-white/50">Intensity</p>
        <div className="flex flex-wrap justify-center gap-2">
          {intensities.map((intensity) => (
            <button
              key={intensity}
              onClick={() => setSelectedIntensity(intensity)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selectedIntensity === intensity
                  ? "border-blue-400 bg-blue-500/30 text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {intensity}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilterPanel;