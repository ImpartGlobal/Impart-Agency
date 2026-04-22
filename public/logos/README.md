# Client logos

Drop client logo files here and they will be picked up by
`components/sections/LogoStrip.tsx` via the list in `content/logos.ts`.

## Expected filenames

Current list in `content/logos.ts`:

- `john-deere.svg`
- `chevron.svg`
- `aspen.svg`
- `alstom.svg`
- `acsa.svg`
- `rolls-royce.svg`
- `pernod-ricard.svg`
- `engen.svg`

If you change a filename, update the matching entry in `content/logos.ts`.

## Format

- **SVG preferred.** Crisp at every size, tiny file. All modern browsers
  handle SVG natively.
- **PNG with transparent background** as a fallback if you can't source an
  SVG. Use 2x the display height (so ~80px tall) for retina crispness.
- **No baked-in padding.** The component handles spacing. Logos with big
  internal whitespace will look undersized on the strip.
- **Monochrome-on-dark treatment applied at render time.** You don't need to
  pre-process the logos to grayscale — the component applies `grayscale` +
  `opacity-70` by default and restores colour on hover.

## Sizing

Default max-height is 40px. If a particular logo's glyph reads visually
smaller than the others at that height (common with tall, narrow
monograms), override via `heightPx` in `content/logos.ts`.

## Where to get the files (officially)

For each brand below, the safest source is the brand's own media / press /
brand assets page. These are the pages to start from:

| Brand | Official starting point |
|---|---|
| John Deere | deere.com corporate → media room |
| Chevron | chevron.com/newsroom |
| Aspen Pharmacare | aspenpharma.com → media / investors |
| Alstom | alstom.com → newsroom → media library |
| ACSA | airports.co.za → media centre |
| Rolls-Royce | rolls-royce.com → media centre |
| Pernod Ricard | pernod-ricard.com/en/media |
| Engen | engen.co.za → media / news |

Several brands also maintain consolidated press/partner portals behind a
short registration form. That route gives you the explicitly-licensed
version of the logo plus the current brand guidelines, which matters for
"logo on dark background" treatments.

> Avoid third-party aggregators (seeklogo, brandsoftheworld, brandfetch,
> logos-download, etc.). The files are often out-of-date variants, and
> downloading from them doesn't give you any rights you didn't already
> have. Use them only to cross-check what the current logo looks like.

## Rights note

Impart should only display a client's logo with that client's consent (or
under a documented prior engagement that permits portfolio use). If a brand
has declined portfolio use, remove their entry from `content/logos.ts`.

Logos are intentionally NOT committed to git by default — see
`.gitignore`. If you have confirmed redistribution rights (or are using
files from a public brand kit whose terms permit it), you can remove them
from `.gitignore`.
