import { describe, expect, it } from "bun:test";
import { MOTION_PROFILES } from "../motion";
import { MYTHICAL_ROSTER } from "./roster";

// The files themselves are checked with every other Scene's, in
// `scenes/artwork.test.ts`.
describe("the mythical Roster", () => {
  it("has 6 Common, 8 Uncommon and 3 Rare", () => {
    const count = (tier: string) =>
      MYTHICAL_ROSTER.filter((def) => def.tier === tier).length;
    expect([count("common"), count("uncommon"), count("rare")]).toEqual([
      6, 8, 3,
    ]);
  });

  it("puts Creatures in the meadow, on the lake and in the air", () => {
    const lake = MOTION_PROFILES.swim.band;
    const levels = new Set(
      MYTHICAL_ROSTER.map(({ motion }) => {
        const profile = MOTION_PROFILES[motion];
        if (!profile.ground) return "air";
        return profile.band === lake ? "lake" : "meadow";
      }),
    );
    expect([...levels].sort()).toEqual(["air", "lake", "meadow"]);
  });
});
