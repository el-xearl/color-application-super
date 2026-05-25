export type StylePreset = {
  id: number;
  name: string;
  category:
    | "Fantasy"
    | "Sci-Fi"
    | "Luxury"
    | "Gaming"
    | "Dark"
    | "Nature"
    | "Minimal"
    | "Retro"
    | "Anime"
    | "Business";
  mood:
    | "Dark"
    | "Neon"
    | "Divine"
    | "Elegant"
    | "Futuristic"
    | "Mysterious"
    | "Calm"
    | "Aggressive"
    | "Warm"
    | "Cold"
    | "Royal";
  temperature: "Warm" | "Cold" | "Neutral";
  intensity: "Soft" | "Balanced" | "Extreme";
  baseColors: string[];
};

export const stylePresets: StylePreset[] = [
  {
    id: 1,
    name: "Vampire Kingdom",
    category: "Fantasy",
    mood: "Dark",
    temperature: "Warm",
    intensity: "Extreme",
    baseColors: ["#050507", "#19171B", "#75020F", "#51080D", "#D8B4A0"],
  },
  {
    id: 2,
    name: "Cyberpunk Tokyo",
    category: "Sci-Fi",
    mood: "Neon",
    temperature: "Cold",
    intensity: "Extreme",
    baseColors: ["#040607", "#BF40FA", "#4928C2", "#171F55", "#E3D9FC"],
  },
  {
    id: 3,
    name: "Ancient Holy Temple",
    category: "Fantasy",
    mood: "Divine",
    temperature: "Warm",
    intensity: "Balanced",
    baseColors: ["#0B0A08", "#3D2F16", "#A67C2D", "#E8D9A8", "#FFF7DD"],
  },
  {
    id: 4,
    name: "Luxury Perfume",
    category: "Luxury",
    mood: "Elegant",
    temperature: "Neutral",
    intensity: "Soft",
    baseColors: ["#060407", "#2B1726", "#5B2A62", "#D8B4FE", "#F5E9FF"],
  },
  {
    id: 5,
    name: "Unreal Sci-Fi HUD",
    category: "Gaming",
    mood: "Futuristic",
    temperature: "Cold",
    intensity: "Balanced",
    baseColors: ["#020617", "#0F172A", "#0EA5E9", "#38BDF8", "#E0F2FE"],
  },
  {
    id: 6,
    name: "Obsidian Gothic",
    category: "Dark",
    mood: "Mysterious",
    temperature: "Warm",
    intensity: "Extreme",
    baseColors: ["#030303", "#111113", "#2A0F1F", "#6D1238", "#C9184A"],
  },
  {
    id: 7,
    name: "Royal Emerald",
    category: "Luxury",
    mood: "Royal",
    temperature: "Cold",
    intensity: "Balanced",
    baseColors: ["#020403", "#071A12", "#0F3D2E", "#10B981", "#D1FAE5"],
  },
  {
    id: 8,
    name: "Nordic Winter",
    category: "Nature",
    mood: "Cold",
    temperature: "Cold",
    intensity: "Soft",
    baseColors: ["#F8FAFC", "#CBD5E1", "#64748B", "#1E293B", "#020617"],
  },
  {
    id: 9,
    name: "Desert Oracle",
    category: "Fantasy",
    mood: "Warm",
    temperature: "Warm",
    intensity: "Balanced",
    baseColors: ["#140C06", "#5C2E0E", "#B45309", "#F59E0B", "#FEF3C7"],
  },
  {
    id: 10,
    name: "Deep Ocean Interface",
    category: "Nature",
    mood: "Calm",
    temperature: "Cold",
    intensity: "Balanced",
    baseColors: ["#020617", "#082F49", "#0369A1", "#38BDF8", "#ECFEFF"],
  },
  {
    id: 11,
    name: "Infernal Core",
    category: "Dark",
    mood: "Aggressive",
    temperature: "Warm",
    intensity: "Extreme",
    baseColors: ["#030000", "#240000", "#7F1D1D", "#EF4444", "#FEE2E2"],
  },
  {
    id: 12,
    name: "Minimal Snow",
    category: "Minimal",
    mood: "Calm",
    temperature: "Neutral",
    intensity: "Soft",
    baseColors: ["#FFFFFF", "#F4F4F5", "#D4D4D8", "#71717A", "#18181B"],
  },
  {
    id: 13,
    name: "Retro Sunset",
    category: "Retro",
    mood: "Warm",
    temperature: "Warm",
    intensity: "Balanced",
    baseColors: ["#2B0F1A", "#7C2D12", "#EA580C", "#FDBA74", "#FFF7ED"],
  },
  {
    id: 14,
    name: "Anime Dream Night",
    category: "Anime",
    mood: "Neon",
    temperature: "Cold",
    intensity: "Balanced",
    baseColors: ["#0B1026", "#312E81", "#7C3AED", "#F0ABFC", "#FDF4FF"],
  },
  {
    id: 15,
    name: "Corporate Sapphire",
    category: "Business",
    mood: "Elegant",
    temperature: "Cold",
    intensity: "Balanced",
    baseColors: ["#F8FAFC", "#E2E8F0", "#1E40AF", "#0F172A", "#020617"],
  },
  {
    id: 16,
    name: "Arcane Library",
    category: "Fantasy",
    mood: "Mysterious",
    temperature: "Neutral",
    intensity: "Balanced",
    baseColors: ["#08070A", "#1E1B2E", "#4C1D95", "#A78BFA", "#EDE9FE"],
  },
  {
    id: 17,
    name: "Poison Alchemist",
    category: "Fantasy",
    mood: "Dark",
    temperature: "Cold",
    intensity: "Extreme",
    baseColors: ["#020402", "#052E16", "#166534", "#84CC16", "#ECFCCB"],
  },
  {
    id: 18,
    name: "Solar Empire",
    category: "Sci-Fi",
    mood: "Divine",
    temperature: "Warm",
    intensity: "Extreme",
    baseColors: ["#090500", "#451A03", "#F97316", "#FACC15", "#FEF9C3"],
  },
  {
    id: 19,
    name: "Glassmorphism Mint",
    category: "Minimal",
    mood: "Calm",
    temperature: "Cold",
    intensity: "Soft",
    baseColors: ["#ECFEFF", "#CCFBF1", "#5EEAD4", "#0F766E", "#042F2E"],
  },
  {
    id: 20,
    name: "Dark SaaS Dashboard",
    category: "Business",
    mood: "Futuristic",
    temperature: "Cold",
    intensity: "Balanced",
    baseColors: ["#020617", "#0F172A", "#1E293B", "#6366F1", "#E0E7FF"],
  },
];