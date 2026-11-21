<script lang="ts">
  import { AMBIENT_ART } from "$lib/scenes/mythical/artwork";

  /**
   * Scenery that is alive but is not a Creature: the waterfall pouring down
   * the gorge into the lake, light glinting on the water, and specks of
   * golden light twinkling over the meadow. Present from the first second of
   * every Session, never earned, never counted.
   *
   * Everything here is deliberately subordinate: small, soft and slow, with
   * nothing shaped like a Creature, since it runs on a projector all day.
   * The valley itself is painted in `ambient/backdrop.svg`; this only places
   * what moves over it, plus the two trees framing it, which stand in front
   * of every Creature (z-index above `groundLayer`'s 1000, below Too Loud's
   * veil at 2000) so anything wandering to the edge goes behind them.
   * Positions are fixed rather than random, so the Scene looks the same each
   * time a teacher opens it.
   */

  /** Glints on the lake, over the pale ripples painted in the backdrop. */
  const glints = [
    { x: 9.5, top: 56.6, width: 5.6, duration: 9, delay: 0 },
    { x: 27, top: 55.1, width: 3.6, duration: 11, delay: -4 },
    { x: 42.5, top: 59.2, width: 6.8, duration: 10, delay: -7 },
    { x: 52.5, top: 55, width: 3.2, duration: 12, delay: -2 },
    { x: 61.5, top: 56.3, width: 4.7, duration: 9.5, delay: -5 },
    { x: 83.3, top: 59.6, width: 6.2, duration: 10.5, delay: -8 },
  ];

  /**
   * Specks of golden light over the meadow and the lake, each twinkling on
   * its own beat. In percent of the Scene across (world units) and down.
   */
  const sparkles = [
    { x: 6, top: 70, size: 0.5, duration: 7, delay: 0 },
    { x: 14, top: 62, size: 0.4, duration: 9, delay: -3 },
    { x: 22, top: 78, size: 0.6, duration: 8, delay: -6 },
    { x: 31, top: 66, size: 0.4, duration: 10, delay: -2 },
    { x: 38, top: 84, size: 0.5, duration: 7.5, delay: -5 },
    { x: 47, top: 71, size: 0.45, duration: 9.5, delay: -8 },
    { x: 55, top: 63, size: 0.4, duration: 8.5, delay: -1 },
    { x: 63, top: 80, size: 0.6, duration: 11, delay: -7 },
    { x: 71, top: 68, size: 0.4, duration: 8, delay: -4 },
    { x: 79, top: 88, size: 0.55, duration: 9, delay: -6 },
    { x: 86, top: 73, size: 0.45, duration: 10, delay: -9 },
    { x: 92, top: 64, size: 0.4, duration: 7, delay: -2 },
  ];
</script>

<!-- The waterfall in the gorge on the left hill. Only its streaks move. -->
<div
  class="mythical-falls pointer-events-none absolute"
  style="left:calc(var(--world-left) + 15.9 * var(--wu)); top:44.4%; width:calc(2.2 * var(--wu)); height:9.7%;"
></div>

{#each glints as glint (glint.x)}
  <div
    class="mythical-glint pointer-events-none absolute"
    style="left:calc(var(--world-left) + {glint.x} * var(--wu)); top:{glint.top}%; width:calc({glint.width} * var(--wu)); animation-duration:{glint.duration}s; animation-delay:{glint.delay}s;"
  ></div>
{/each}

{#each sparkles as sparkle (sparkle.x)}
  <div
    class="mythical-sparkle pointer-events-none absolute"
    style="left:calc(var(--world-left) + {sparkle.x} * var(--wu)); top:{sparkle.top}%; width:calc({sparkle.size} * var(--wu)); animation-duration:{sparkle.duration}s; animation-delay:{sparkle.delay}s;"
  ></div>
{/each}

<!-- The framing trees, in front of every Creature. Same frame as the backdrop. -->
<div
  class="backdrop pointer-events-none absolute inset-y-0"
  style="z-index:1001;"
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html AMBIENT_ART.trees}
</div>
