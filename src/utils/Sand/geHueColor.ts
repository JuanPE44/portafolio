import { hslToRgb } from "./hslToRgb";

export function getHueColor(number: number) {
  number = Math.max(1, Math.min(number, 360));
  let hue = number;
  let saturation = 80;
  let lightness = 50;
  let hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  let rgbColor = hslToRgb(hue / 360, saturation / 100, lightness / 100);

  return {
    hsl: hslColor,
    rgb: `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`,
  };
}
