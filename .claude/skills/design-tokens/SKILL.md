---
name: design-tokens
description: Look up Olamee design token values — colors (hex codes for all 12 families and shades), typography (font sizes, line heights, font families, weights), spacing (8pt grid), elevation (box shadows), and border radii. Use when you need exact hex values, font sizes, spacing values, shadow definitions, or radius tokens. Also use when someone asks "what color is...", "what shade of...", "what font size...", or needs any design token reference.
allowed-tools: Read, Grep, Glob
argument-hint: [token-name, e.g. "primary colors", "typography", "spacing"]
---

# Olamee Design Tokens — Complete Reference

> Source-of-truth TypeScript files: `src/design-system/tokens/colors.ts`, `typography.ts`, `spacing.ts`, `elevation.ts`, `radii.ts`

The user asked about: $ARGUMENTS

Find the relevant token values below.

---

## Colors

### Primary (#7A5FFF — Violet)
| Shade | Hex |
|-------|-----|
| 50 | `#F6F4FF` |
| 100 | `#E1DBFF` |
| 200 | `#C2B7FF` |
| 300 | `#A394FF` |
| base | `#7A5FFF` |
| 500 | `#6F54EB` |
| 600 | `#6249D4` |
| 700 | `#513CCB` |
| 800 | `#3E2DA3` |

### Secondary (#5ED4B2 — Mint)
| Shade | Hex |
|-------|-----|
| 50 | `#F5FDFA` |
| 100 | `#C7F2E4` |
| 200 | `#A1E7D3` |
| 300 | `#6FE3C1` |
| base | `#5ED4B2` |
| 500 | `#4AC3A1` |
| 600 | `#3BA98B` |
| 700 | `#2E826B` |
| 800 | `#0C3C2E` |

### Accent (#EAD94C — Yellow)
| Shade | Hex |
|-------|-----|
| 50 | `#FEFCF2` |
| 100 | `#FBF7D9` |
| 200 | `#F1ECB6` |
| 300 | `#E6D95F` |
| base | `#EAD94C` |
| 500 | `#D5C43F` |
| 600 | `#BFAE34` |
| 700 | `#BFA634` |
| 800 | `#9B8629` |

### Gunmetal (#30343F — Neutral Dark)
| Shade | Hex |
|-------|-----|
| lightest | `#FBFBFC` |
| 50 | `#F5F6F8` |
| 100 | `#EFF0F3` |
| 200 | `#D7D8DC` |
| 300 | `#B2B4BA` |
| 400 | `#8D8F97` |
| 500 | `#6A6D76` |
| base | `#30343F` |
| 700 | `#21242C` |
| 800 | `#17191F` |

### Space Cadet (#283044 — Dark Blue)
| Shade | Hex |
|-------|-----|
| 50 | `#EDEFF4` |
| 100 | `#9CA1B5` |
| 200 | `#7C8199` |
| 300 | `#5A5F78` |
| base | `#283044` |
| 500 | `#232B3D` |
| 600 | `#1F2635` |
| 700 | `#1D2332` |
| 800 | `#151A26` |

### Red (#D62839 — Destructive/Error)
| Shade | Hex |
|-------|-----|
| 50 | `#FCF0F1` |
| 100 | `#F9D3D7` |
| 200 | `#D1A6AD` |
| 300 | `#E46B78` |
| base | `#D62839` |
| 500 | `#BF2232` |
| 600 | `#A71C2B` |
| 700 | `#A41F2C` |
| 800 | `#801823` |

### Orange (#FF9F1C — Warning)
| Shade | Hex |
|-------|-----|
| 50 | `#FFF8EF` |
| 100 | `#FFE1BC` |
| 200 | `#FFC27A` |
| 300 | `#FFAB3D` |
| base | `#FF9F1C` |
| 500 | `#E68F1A` |
| 600 | `#CC8017` |
| 700 | `#C37616` |
| 800 | `#9E5D12` |

### Mantis (#5FB54E — Success/Green)
| Shade | Hex |
|-------|-----|
| 50 | `#EFF8ED` |
| 100 | `#E8F4E6` |
| 200 | `#BADFB3` |
| 300 | `#7CC26E` |
| base | `#5FB54E` |
| 500 | `#519A42` |
| 600 | `#438137` |
| 700 | `#36672C` |
| 800 | `#2B5123` |

### Lavender (#E8E1EF — Light Neutral)
| Shade | Hex |
|-------|-----|
| 50 | `#FDFDFE` |
| 100 | `#F6F3FA` |
| 200 | `#EDE5F3` |
| 300 | `#DFD5E7` |
| base | `#E8E1EF` |
| 500 | `#D9D0E3` |
| 600 | `#CBC2D7` |
| 700 | `#B3AFC8` |
| 800 | `#998FB4` |

### Amaranth Purple (#A30B37)
| Shade | Hex |
|-------|-----|
| 50 | `#FDE9EE` |
| 100 | `#F3D4DC` |
| 200 | `#E6A9B9` |
| 300 | `#D97890` |
| base | `#A30B37` |
| 500 | `#8E0A2F` |
| 600 | `#7A0828` |
| 700 | `#81092C` |
| 800 | `#600721` |

### Reseda Green (#646F58)
| Shade | Hex |
|-------|-----|
| 50 | `#F4F5F3` |
| 100 | `#D6D9D0` |
| 200 | `#B6BBB1` |
| 300 | `#9FA895` |
| base | `#646F58` |
| 500 | `#5A644F` |
| 600 | `#4F5947` |
| 700 | `#4A5241` |
| 800 | `#353B30` |

### Electric Blue (#18E8FF — Info)
| Shade | Hex |
|-------|-----|
| 50 | `#EFFDFF` |
| 100 | `#DEFCFF` |
| 200 | `#BDF8FF` |
| 300 | `#8CF4FF` |
| base | `#18E8FF` |
| 500 | `#00D8F0` |
| 600 | `#00C6DC` |
| 700 | `#00A2B4` |
| 800 | `#005A64` |

### Utility
| Name | Hex |
|------|-----|
| white | `#FFFFFF` |
| black | `#000000` |
| gradient brand | `linear-gradient(to right, #7A5FFF 16%, #6FE3C1 75%)` |

---

## Typography

**Font Families:**
- Headings: `Montserrat` (Google Fonts, preloaded)
- Body / Buttons: `Karla` (Google Fonts, preloaded)
- Code: `JetBrains Mono`

**Font Weights:** regular=400, medium=500, semibold=600, bold=700

**Heading Scale (Montserrat):**
| Level | Font Size | Line Height | CSS Var |
|-------|-----------|-------------|---------|
| H1 | 36px | 40px | `--font-size-h1` / `--line-height-h1` |
| H2 | 32px | 36px | `--font-size-h2` / `--line-height-h2` |
| H3 | 28px | 32px | `--font-size-h3` / `--line-height-h3` |
| H4 | 24px | 28px | `--font-size-h4` / `--line-height-h4` |
| H5 | 20px | 24px | `--font-size-h5` / `--line-height-h5` |
| H6 | 16px | 20px | `--font-size-h6` / `--line-height-h6` |

**Body Scale (Karla Regular):**
| Size | Font Size | Line Height | CSS Var |
|------|-----------|-------------|---------|
| lg | 16px | 20px | `--font-size-body-lg` / `--line-height-body-lg` |
| base | 14px | 18px | `--font-size-body-base` / `--line-height-body-base` |
| sm | 12px | 14px | `--font-size-body-sm` / `--line-height-body-sm` |
| xs | 10px | 12px | `--font-size-body-xs` / `--line-height-body-xs` |

**Button Scale (Karla Medium, letter-spacing -2.4%):**
| Size | Font Size | Line Height | CSS Var |
|------|-----------|-------------|---------|
| lg | 20px | 28px | `--font-size-btn-lg` / `--line-height-btn-lg` |
| base | 16px | 20px | `--font-size-btn-base` / `--line-height-btn-base` |
| sm | 16px | 20px | `--font-size-btn-sm` / `--line-height-btn-sm` |
| xs | 12px | 16px | `--font-size-btn-xs` / `--line-height-btn-xs` |

**Letter Spacing:** tight = `-0.024em` (-2.4%), normal = `0em`

---

## Spacing (8pt Grid)
```
0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128 (all in px)
```

---

## Elevation (Box Shadows)
| Level | Value | Usage |
|-------|-------|-------|
| 1 | `0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.30)` | Cards, buttons, chips, nav drawers |
| 2 | `0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.30)` | App bars, menus, tooltips |
| 3 | `0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.30)` | Dialogs, date pickers, FABs |

---

## Border Radii
| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | — |
| sm | 4px | Checkboxes, small elements |
| md | 8px | xsmall buttons, chips, inputs |
| md-lg | 10px | small buttons/inputs |
| lg | 12px | medium buttons/inputs, cards |
| xl | 16px | large buttons |
| 2xl | 24px | pills, search bars |
| full | 9999px | tags, avatars, radio circles |
