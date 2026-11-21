/**
 * How a Note looks in the mythical valley: a big cloud in the open sky over
 * the lake, drawn as on the savanna (`savanna/NoteArt.svelte`). The backdrop
 * keeps its own clouds to the sides, clear of where this one sits.
 */

import type { NoteLook } from "../index";
import { cloudShape, PEN_COLOURS } from "../noteArt";
import NoteArt from "../savanna/NoteArt.svelte";

export const MYTHICAL_NOTE: NoteLook = {
  Art: NoteArt,
  writing: (width, height) => cloudShape(width, height).writing,
  // A cloud has no frame: its puffs round the words are its border.
  surface: (width, height) => cloudShape(width, height).writing,
  inks: { dark: "#2b2b3a", ...PEN_COLOURS },
  // High in the sky, above the castle and clear of where the fliers soar.
  home: { x: 0.3, y: 0.08, width: 0.4, height: 0.28 },
};
