---
name: Lunar Orbit
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b20'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#33343a'
  on-surface: '#e3e2e9'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e3e2e9'
  inverse-on-surface: '#2f3036'
  outline: '#8f9097'
  outline-variant: '#45464d'
  surface-tint: '#bcc6e3'
  primary: '#ecefff'
  on-primary: '#263047'
  primary-container: '#c9d3f0'
  on-primary-container: '#515b73'
  inverse-primary: '#545e77'
  secondary: '#afc6ff'
  on-secondary: '#002d6d'
  secondary-container: '#254788'
  on-secondary-container: '#99b7ff'
  tertiary: '#ffece7'
  on-tertiary: '#581e0a'
  tertiary-container: '#ffc7b6'
  on-tertiary-container: '#8e4730'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#bcc6e3'
  on-primary-fixed: '#111b31'
  on-primary-fixed-variant: '#3d475e'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#afc6ff'
  on-secondary-fixed: '#001944'
  on-secondary-fixed-variant: '#224585'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#75331e'
  background: '#121318'
  on-background: '#e3e2e9'
  surface-variant: '#33343a'
typography:
  display-hero:
    fontFamily: Bricolage Grotesque
    fontSize: clamp(4rem, 14vw, 16rem)
    fontWeight: '800'
    lineHeight: '0.9'
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: clamp(3rem, 12vw, 5rem)
    fontWeight: '800'
    lineHeight: '0.95'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.0625rem
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.12em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.12em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
  space-2xl: 8rem
---

## Brand & Style

This design system embodies an editorial, ultra-clean night-sky minimalist aesthetic engineered for a high-impact personal portfolio. The experience evokes the silent, vast expanse of deep space paired with precision typography and stark astronomical scale contrasts. It balances cosmic restraint with high-end editorial curation.

### Design Principles
- **Cosmic Restraint:** Vast negative space and deep obsidian voids supersede visual clutter. Decorative artifacts, avatars, logo marks, and emojis are strictly avoided.
- **Astronomical Scale Contrast:** Colossal display typography and monumental celestial silhouettes juxtapose whisper-quiet technical metadata and airy body copy.
- **Observatory Precision:** Interactions, borders, and monospaced indicators emulate astronomical instruments—subtle, functional, and razor-sharp.
- **Monochrome Foundation with Planetary Accentuation:** The baseline interface remains anchored in deep space neutrals; color appears solely through deliberate, subdued planetary tints.

## Colors

The palette is strictly dark-mode first, anchored by the deep void of space and calibrated to avoid noisy, multi-color neon gradients. Tints reflect authentic planetary bodies with soft, spectral rim lighting.

### Core Canvas & Structure
- **Void (Canvas Background):** `#05060A` — Absolute deep canvas foundation.
- **Surface (Containers & Cards):** `#0C0E14` — Elevated structural plane providing subtle contrast against the void.
- **Border:** `rgba(255, 255, 255, 0.08)` — Hairline delineation across all panels, pill enclosures, and structural separators.

### Typography & Readability
- **Text Primary:** `#ECEFF6` — High-contrast, clean off-white for titles, active states, and critical reading paths.
- **Text Muted:** `#7C8496` — Desaturated slate-grey for metadata, secondary descriptions, and captions.

### Planetary Accent Spectrum
Used strictly for rim lighting, ambient celestial backdrops, and categorical focal points:
- **Moon (Ice Silver):** `#C9D3F0` (Primary Accent)
- **Earth (Deep Blue):** `#3C5C9E` (Secondary Accent)
- **Mars (Dusty Rust):** `#B2634A` (Tertiary Accent)
- **Saturn (Pale Gold):** `#CDB98A`
- **Jupiter (Sand):** `#BFA58A`
- **Neptune (Indigo):** `#4B4FA6`
- **Sun (Soft Amber):** `#E8A85A`

## Typography

Typography establishes an editorial atmosphere through tension between architectural display type, romantic serif emphasis, crisp technical labels, and legible modern body copy.

### Hierarchy & Style Rules
- **Display Headlines:** Rendered in **Bricolage Grotesque** (700–800 weight) with tight `-0.03em` tracking. Massive scale provides an unyielding architectural presence.
- **Editorial Accent:** In major headlines, apply an italic serif (such as *Instrument Serif Italic* or *Newsreader Italic*) to **exactly one emphasized word per headline**. This single word creates a striking typographic focal point against the geometric weight of Bricolage Grotesque.
- **Body & Long-form:** Rendered in **Geist** (15px–17px, weights 300 to 400, line-height 1.6) in `Text Primary` (`#ECEFF6`) or `Text Muted` (`#7C8496`) to sustain effortless readability amidst high visual contrast.
- **Technical Metadata & Tracking:** Rendered in **JetBrains Mono** (11px–12px) in full uppercase with `0.12em` letter spacing for section tags, orbital coordinates, status badges, and technical readouts.

## Layout & Spacing

The layout is built upon expansive spatial fields, honoring the vacuum of space. Density is intentionally low to let monumental typography and stylized planetary forms breathe.

### Grid & Breakpoints
- **Desktop (1200px+):** 12-column fluid grid, `4rem` outer canvas margins, `1.5rem` gutters. Max-width content boundary capped at `1400px` for optimal viewing ergonomics.
- **Tablet (768px – 1199px):** 8-column grid, `2rem` outer margins, `1.5rem` gutters.
- **Mobile (< 768px):** 4-column grid, `1.25rem` outer margins, `1rem` gutters.

### Vertical Rhythm & Negative Space
- Hero and transition sections utilize deliberate vertical chasms (`space-2xl` / `8rem` up to `12rem`) to separate core thematic chapters.
- Text blocks within cards and sections adhere to a strict 8px increment pacing using `space-sm`, `space-md`, and `space-lg`.

## Elevation & Depth

Depth is conveyed through planetary rim lighting, precise hairline boundaries, and translucent surface layers rather than traditional drop shadows.

### Atmospheric Depth Model
- **Level 0 (The Deep Void):** Canvas background (`#05060A`), unlit, pure infinite plane.
- **Level 1 (Orbital Surfaces):** Surface containers (`#0C0E14`) framed with a razor-thin `1px` border of `rgba(255, 255, 255, 0.08)`. Shadows are absent or limited to extremely diffused black grounding (`0 20px 40px rgba(0, 0, 0, 0.6)`).
- **Level 2 (Translucent Instruments & Floaters):** The floating navigation pill and contextual overlays use `#0C0E14` at `80%` opacity paired with `backdrop-filter: blur(16px)` and a crisp `1px` border of `rgba(255, 255, 255, 0.08)`.
- **Rim-Lit Celestial Depth:** 2D minimalist planetary disks utilize an inner crescent highlight (`box-shadow: inset -20px -20px 40px rgba(0,0,0,0.9), inset 2px 2px 8px [Planet Tint]`) and an ultra-soft atmospheric back-glow (`filter: drop-shadow(0 0 48px [Planet Tint / 0.15])`).

## Shapes

The shape geometry pairs aerodynamic, orbital pill enclosures with clean structural surfaces.

### Geometric Rules
- **Interactive Pills (`roundedness: 3`):** Buttons, navigation bars, category tags, and status chips always utilize complete pill geometry (`border-radius: 9999px`).
- **Surface Enclosures:** Content containers, project cards, and code modules take soft rectangular geometries with `rounded-xl` (`1.5rem` or `24px`) to ensure structural clarity against the fluid pill elements.
- **Planets:** Pure 2D circles (`border-radius: 50%`) with strict geometric precision, accented by sharp spherical clipping masks.

## Components

### Floating Centered Pill Navbar
- **Structure:** Centered horizontal floating dock anchored to the top of the viewport (`top: 1.5rem` desktop, `top: 1rem` mobile).
- **Surfacing:** Fill of `#0C0E14` with `80%` opacity, `backdrop-filter: blur(16px)`, enclosed by a `1px` solid `rgba(255, 255, 255, 0.08)` border.
- **Dimensions & Radius:** Height of `48px`, `border-radius: 9999px`, horizontal padding of `1.5rem`.
- **Items:** Strictly 5 text links: `Home`, `About`, `Focus`, `Work`, `Contact`. No avatar, no monogram, no logo mark.
- **Item Styling:** Rendered in **JetBrains Mono**, 11px, uppercase, letter-spacing `0.12em`. Default state: `Text Muted` (`#7C8496`). Active / Hover state: `Text Primary` (`#ECEFF6`) with a subtle white dot indicator or gentle inner pill highlight.

### Pill Buttons
- **Height:** Strictly `48px`.
- **Corner Radius:** `9999px` (pill-shaped).
- **Primary Variant:** Solid `Moon` tint fill (`#C9D3F0`) with `#05060A` typography (Geist Medium, 14px). Hover state transitions to soft white glow (`box-shadow: 0 0 20px rgba(201, 211, 240, 0.3)`).
- **Secondary / Ghost Variant:** Translucent `#0C0E14` fill, `1px` border of `rgba(255, 255, 255, 0.08)`, `Text Primary` (`#ECEFF6`) typography. Hover state elevates border to `rgba(255, 255, 255, 0.2)`.

### Celestial Bodies (2D Stylized Rim-Lit Planets)
- **Aesthetic:** Flat geometric disks with 2D atmospheric rim illumination. No 3D textures, no multi-color noisy gradients.
- **Lighting:** A razor-thin crescent edge glow illuminated by one of the curated planet tints (e.g., Earth `#3C5C9E`, Mars `#B2634A`, Moon `#C9D3F0`), casting a soft, low-opacity ambient field behind the sphere.
- **Scale:** Utilized in high-contrast scales—either oversized and bleeding out of the viewport edge behind typography, or isolated as miniature orbital trackers.

### Cards & Project Showcase
- **Container:** Solid `#0C0E14` background, `1px` border of `rgba(255, 255, 255, 0.08)`, corner radius `1.5rem` (`rounded-xl`), inner padding `2rem`.
- **Content Flow:** Mono section index (e.g., `01 // ARCHITECTURE`), followed by a Bricolage Grotesque title featuring an italic serif keyword, body explanation in Geist, and pill tag metadata at the base.
- **Hover Interaction:** Hairline border brightens to `rgba(255, 255, 255, 0.2)` with a slight inward planetary tint bloom.

### Form Inputs & Text Fields
- **Container:** Height `48px`, background `rgba(12, 14, 20, 0.6)`, `1px` border `rgba(255, 255, 255, 0.08)`, corner radius `0.75rem`.
- **Typography:** Geist 15px with placeholder text in `Text Muted` (`#7C8496`).
- **Focus State:** Border transitions to `Moon` tint (`#C9D3F0`) with zero harsh shadows.

### Status Chips & Metadata Badges
- **Height:** `24px` to `28px`, pill radius (`9999px`).
- **Surfacing:** `rgba(255, 255, 255, 0.03)` background with hairline border `rgba(255, 255, 255, 0.08)`.
- **Typography:** **JetBrains Mono**, 11px, uppercase, tracking `0.12em`. Accompanied by a 6px circular tint indicator reflecting the relevant planetary hue.