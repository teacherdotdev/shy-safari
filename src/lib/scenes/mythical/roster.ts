/**
 * The mythical Roster: every Creature that can appear in this Scene.
 *
 * Creatures from the world's myths and folk tales, gathered in one enchanted
 * valley: the fairy, unicorn and will-o'-the-wisp of European tales, the
 * winged Pegasus of Greece, the yeti of the Himalayas, the nine-tailed
 * kitsune of Japan, the moon rabbit of East Asia, the qilin of China, the
 * bakunawa and duende of the Philippines, the alebrije of Mexico, the
 * carbunclo of Chile's mines and Ogopogo of Canada's Okanagan Lake. Most of
 * the newer ones were picked by followers asked which
 * Creatures from outside Western Europe the Scene should have.
 *
 * It has the savanna's shape of 6 Common, 8 Uncommon and 3 Rare.
 *
 * Slugs match the SVG filenames in `./creatures/`; `width` is the intended
 * on-screen width against a 1920px-wide Scene. `parts` lists the part-*
 * classes actually present in each file.
 *
 * The Scene has three levels (`scenes/motion.ts`): the meadow, where the
 * walkers stand with their feet on the bottom edge of their viewBox as on the
 * savanna, the lake behind it, where the swimmers are drawn from the waterline
 * up (`swim`), and the sky, for the fliers. The fliers keep to the open air
 * between the two framing trees (`flutter`, `wheel`, `doze`), since those are
 * drawn in front of everything.
 */

import type { CreatureDef } from "$lib/scenes/types";

export const MYTHICAL_ROSTER: CreatureDef[] = [
  // Common
  {
    slug: "will-o-the-wisp",
    tier: "common",
    width: 60,
    motion: "flutter",
    parts: ["part-pulse"],
  },
  {
    slug: "fairy",
    tier: "common",
    width: 116,
    motion: "flutter",
    parts: ["part-wings"],
  },
  {
    slug: "moon-rabbit",
    tier: "common",
    width: 110,
    motion: "doze",
    parts: ["part-ears"],
  },
  {
    slug: "duende",
    tier: "common",
    width: 40,
    motion: "hop",
    parts: ["part-arms"],
  },
  {
    slug: "carbunclo",
    tier: "common",
    width: 50,
    motion: "graze",
    parts: ["part-ears", "part-pulse"],
  },
  {
    slug: "alebrije",
    tier: "common",
    width: 100,
    motion: "trot",
    parts: ["part-tail", "part-wings"],
  },

  // Uncommon
  {
    slug: "mermaid",
    tier: "uncommon",
    width: 70,
    motion: "swim",
    parts: ["part-tail", "part-arms"],
  },
  {
    slug: "yeti",
    tier: "uncommon",
    width: 84,
    motion: "graze",
    parts: ["part-arms", "part-head"],
  },
  {
    slug: "griffin",
    tier: "uncommon",
    width: 150,
    motion: "wheel",
    parts: ["part-wings", "part-tail"],
  },
  {
    slug: "pegasus",
    tier: "uncommon",
    width: 170,
    motion: "wheel",
    parts: ["part-wings", "part-tail"],
  },
  {
    slug: "kitsune",
    tier: "uncommon",
    width: 160,
    motion: "trot",
    parts: ["part-ears"],
  },
  {
    slug: "unicorn",
    tier: "uncommon",
    width: 170,
    motion: "graze",
    parts: ["part-tail", "part-head"],
  },
  {
    slug: "qilin",
    tier: "uncommon",
    width: 170,
    motion: "trot",
    parts: ["part-tail", "part-head"],
  },
  {
    slug: "ogopogo",
    tier: "uncommon",
    width: 242,
    motion: "swim",
    parts: ["part-body", "part-head"],
  },

  // Rare — the jackpot. One each per Session, at most.
  {
    slug: "phoenix",
    tier: "rare",
    width: 150,
    motion: "wheel",
    parts: ["part-wings", "part-tail", "part-pulse"],
  },
  {
    slug: "dragon",
    tier: "rare",
    width: 260,
    motion: "wheel",
    parts: ["part-wings", "part-tail"],
  },
  {
    slug: "bakunawa",
    tier: "rare",
    width: 356,
    motion: "swim",
    parts: ["part-body", "part-head"],
  },
];
