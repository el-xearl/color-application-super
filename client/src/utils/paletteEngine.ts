import chroma from "chroma-js";
import type { StylePreset } from "../data/stylePresets";

export function generatePalette(preset: StylePreset, variationSeed: number) {
    const base = preset.baseColors;

    const hueShift = (variationSeed % 12) - 6;
    const saturationShift = ((variationSeed % 5) - 2) * 0.25;
    const brightnessShift = ((variationSeed % 7) - 3) * 0.12;

    const scale = chroma.scale(base).mode("lab").colors(5);

    const adjusted = scale.map((color, index) => {
        let c = chroma(color);

        if (preset.intensity === "Extreme") {
            c = c.saturate(1.2 + saturationShift).darken(index < 2 ? 0.4 : 0);
        }

        if (preset.intensity === "Soft") {
            c = c.desaturate(0.8).brighten(0.4 + brightnessShift);
        }

        if (preset.intensity === "Balanced") {
            c = c.saturate(saturationShift).brighten(brightnessShift);
        }

        if (preset.temperature === "Warm") {
            c = c.set("hsl.h", `+${8 + hueShift}`);
        }

        if (preset.temperature === "Cold") {
            c = c.set("hsl.h", `${-8 + hueShift}`);
        }

        return c.hex().toUpperCase();
    });

    return adjusted;
}

export function getContrastScore(background: string, text: string) {
    const ratio = chroma.contrast(background, text);

    let level = "Poor";

    if (ratio >= 7) {
        level = "Excellent";
    } else if (ratio >= 4.5) {
        level = "Good";
    } else if (ratio >= 3) {
        level = "Medium";
    }

    return {
        ratio: Number(ratio.toFixed(2)),
        level,
    };
}

