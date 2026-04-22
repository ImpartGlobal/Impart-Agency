export type ClientLogo = {
  /** Display / alt text */
  name: string;
  /** Path under /public, e.g. "/logos/john-deere.svg" */
  src: string;
  /**
   * Optional explicit height in px to override the default.
   * Use when a logo's glyph reads visually smaller than others at the same
   * box height (e.g. very wide monograms) and needs to be bumped up.
   */
  heightPx?: number;
};

/**
 * Brands Impart has worked with (directly or via 2KO Business Advisory Group
 * affiliation). Displayed in the homepage LogoStrip.
 *
 * To add / remove a brand:
 *   1. Drop the logo file into /public/logos/ (see README there for naming).
 *   2. Add or remove the entry below.
 *
 * Logo files are NOT checked into git by default — add them locally, or
 * commit them if you have confirmed rights to redistribute. See
 * /public/logos/README.md for sourcing notes.
 */
export const clientLogos: ClientLogo[] = [
  { name: "John Deere", src: "/logos/john-deere.svg" },
  { name: "Chevron", src: "/logos/chevron.svg" },
  { name: "Aspen", src: "/logos/aspen.svg" },
  { name: "Alstom", src: "/logos/alstom.svg" },
  { name: "Airports Company South Africa", src: "/logos/acsa.svg" },
  { name: "Rolls-Royce", src: "/logos/rolls-royce.svg" },
  { name: "Pernod Ricard", src: "/logos/pernod-ricard.svg" },
  { name: "Engen", src: "/logos/engen.svg" },
];
