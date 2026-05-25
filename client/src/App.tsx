import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { stylePresets } from "./data/stylePresets";
import { generatePalette, getContrastScore } from "./utils/paletteEngine";

import Navbar from "./components/Navbar";
import FilterPanel from "./components/FilterPanel";
import StyleExplorer from "./components/StyleExplorer";
import PalettePreview from "./components/PalettePreview";
import ActionButtons from "./components/ActionButtons";
import GradientForge from "./components/GradientForge";
import ExportCenter from "./components/ExportCenter";
import SavedPalettes from "./components/SavedPalette";
import RulePreview from "./components/RulePreview";
import LivePreview from "./components/LivePreview";

import {
  createPalette,
  getPalettes,
  removePalette,
  type SavedPalette,
} from "./services/paletteApi";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All");
  const [selectedTemperature, setSelectedTemperature] = useState("All");
  const [selectedIntensity, setSelectedIntensity] = useState("All");

  const [selectedPreset, setSelectedPreset] = useState(stylePresets[0]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [variationSeed, setVariationSeed] = useState(1);
  const [saveStatus, setSaveStatus] = useState("");
  const [savedPalettes, setSavedPalettes] = useState<SavedPalette[]>([]);

  const categories = ["All", ...new Set(stylePresets.map((p) => p.category))];
  const moods = ["All", ...new Set(stylePresets.map((p) => p.mood))];
  const temperatures = [
    "All",
    ...new Set(stylePresets.map((p) => p.temperature)),
  ];
  const intensities = [
    "All",
    ...new Set(stylePresets.map((p) => p.intensity)),
  ];

  const filteredPresets = stylePresets.filter((preset) => {
    const categoryMatch =
      selectedCategory === "All" || preset.category === selectedCategory;

    const moodMatch = selectedMood === "All" || preset.mood === selectedMood;

    const temperatureMatch =
      selectedTemperature === "All" ||
      preset.temperature === selectedTemperature;

    const intensityMatch =
      selectedIntensity === "All" || preset.intensity === selectedIntensity;

    const searchMatch =
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.mood.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.temperature.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.intensity.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      categoryMatch &&
      moodMatch &&
      temperatureMatch &&
      intensityMatch &&
      searchMatch
    );
  });

  const palette = useMemo(() => {
    return generatePalette(selectedPreset, variationSeed);
  }, [selectedPreset, variationSeed]);

  const designSystem = {
    primary: palette[0],
    secondary: palette[1],
    accent: palette[2],
    surface: palette[3],
    text: palette[4],
  };

  const contrastScore = getContrastScore(
    designSystem.primary,
    designSystem.text
  );

  const gradients = [
    `linear-gradient(135deg, ${designSystem.primary}, ${designSystem.accent})`,
    `linear-gradient(135deg, ${designSystem.secondary}, ${designSystem.surface})`,
    `radial-gradient(circle at top left, ${designSystem.accent}, ${designSystem.primary})`,
    `linear-gradient(90deg, ${palette.join(", ")})`,
  ];

  const cssExport = `:root {
  --color-primary: ${designSystem.primary};
  --color-secondary: ${designSystem.secondary};
  --color-accent: ${designSystem.accent};
  --color-surface: ${designSystem.surface};
  --color-text: ${designSystem.text};
}`;

  const tailwindExport = `colors: {
  primary: "${designSystem.primary}",
  secondary: "${designSystem.secondary}",
  accent: "${designSystem.accent}",
  surface: "${designSystem.surface}",
  text: "${designSystem.text}",
}`;

  const jsonExport = JSON.stringify(
    {
      style: selectedPreset.name,
      category: selectedPreset.category,
      mood: selectedPreset.mood,
      temperature: selectedPreset.temperature,
      intensity: selectedPreset.intensity,
      colors: designSystem,
      palette,
      gradients,
    },
    null,
    2
  );

  const exportBlocks = [
    { title: "CSS Variables", content: cssExport },
    { title: "Tailwind Config", content: tailwindExport },
    { title: "JSON Theme", content: jsonExport },
  ];

  const fetchSavedPalettes = async () => {
    try {
      const data = await getPalettes();
      setSavedPalettes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSavedPalettes();
  }, []);

  const handleRandomStyle = () => {
    const list = filteredPresets.length > 0 ? filteredPresets : stylePresets;
    setSelectedPreset(list[Math.floor(Math.random() * list.length)]);
    setVariationSeed((prev) => prev + 1);
  };

  const savePalette = async () => {
    try {
      setSaveStatus("Saving...");

      await createPalette({
        name: selectedPreset.name,
        style: selectedPreset.name,
        category: selectedPreset.category,
        mood: selectedPreset.mood,
        temperature: selectedPreset.temperature,
        intensity: selectedPreset.intensity,
        colors: palette,
        gradients,
        isPublic: false,
      });

      setSaveStatus("Saved!");
      fetchSavedPalettes();
    } catch (error) {
      console.error(error);
      setSaveStatus("Save failed");
    }

    setTimeout(() => {
      setSaveStatus("");
    }, 1500);
  };

  const deletePalette = async (id: string) => {
    try {
      await removePalette(id);
      fetchSavedPalettes();
    } catch (error) {
      console.error(error);
    }
  };

  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);

    setTimeout(() => {
      setCopiedColor(null);
    }, 1200);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {copiedColor && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl"
        >
          Copied {copiedColor}
        </motion.div>
      )}

      <section className="relative min-h-screen px-8 py-8">
        <div
          className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full blur-[120px]"
          style={{ backgroundColor: designSystem.accent + "66" }}
        />
        <div
          className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full blur-[130px]"
          style={{ backgroundColor: designSystem.secondary + "55" }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full blur-[130px]"
          style={{ backgroundColor: designSystem.surface + "55" }}
        />

        <Navbar />

        <div className="relative z-10 mx-auto mt-20 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
          >
            <Sparkles size={16} />
            Design Style Engine
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight md:text-7xl"
          >
            Browse styles.
            <br />
            Generate palettes.
          </motion.h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Filter cinematic styles by category and mood, then generate a full
            30-60-10 design system.
          </p>

          <FilterPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categories={categories}
            moods={moods}
            temperatures={temperatures}
            intensities={intensities}
            selectedCategory={selectedCategory}
            selectedMood={selectedMood}
            selectedTemperature={selectedTemperature}
            selectedIntensity={selectedIntensity}
            setSelectedCategory={setSelectedCategory}
            setSelectedMood={setSelectedMood}
            setSelectedTemperature={setSelectedTemperature}
            setSelectedIntensity={setSelectedIntensity}
          />

          <StyleExplorer
            filteredPresets={filteredPresets}
            selectedPreset={selectedPreset}
            onSelectPreset={(preset) => {
              setSelectedPreset(preset);
              setVariationSeed((prev) => prev + 1);
            }}
          />

          <div className="mt-8 text-sm text-white/50">
            Selected:{" "}
            <span className="text-white">{selectedPreset.name}</span> /{" "}
            {selectedPreset.category} / {selectedPreset.mood} /{" "}
            {selectedPreset.temperature} / {selectedPreset.intensity}
          </div>

          <PalettePreview
            palette={palette}
            copiedColor={copiedColor}
            onCopyColor={copyColor}
          />

          <ActionButtons
            onRandomStyle={handleRandomStyle}
            onGenerateVariation={() => setVariationSeed((prev) => prev + 1)}
            onSavePalette={savePalette}
            saveStatus={saveStatus}
          />

          <GradientForge gradients={gradients} onCopy={copyColor} />

          <ExportCenter exportBlocks={exportBlocks} onCopy={copyColor} />

          <SavedPalettes
            savedPalettes={savedPalettes}
            onCopyColor={copyColor}
            onDeletePalette={deletePalette}
          />

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <RulePreview
              designSystem={designSystem}
              contrastScore={contrastScore}
            />
            <LivePreview
              designSystem={designSystem}
              contrastScore={contrastScore}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;