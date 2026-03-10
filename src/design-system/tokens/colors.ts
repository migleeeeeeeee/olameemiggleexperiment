/**
 * Olamee Design System — Color Tokens
 * Source of truth: Figma "OLAMEE Design System" file
 *
 * Naming: Figma "Primary/primary-base" → tokens.colors.primary.base
 * CSS:    → --color-primary-base
 */

export const colors = {
  primary: {
    50: '#F6F4FF',
    100: '#E1DBFF',
    200: '#C2B7FF',
    300: '#A394FF',
    base: '#7A5FFF',
    500: '#6F54EB',
    600: '#6249D4',
    700: '#513CCB',
    800: '#3E2DA3',
  },

  secondary: {
    50: '#F5FDFA',
    100: '#C7F2E4',
    200: '#A1E7D3',
    300: '#6FE3C1',
    base: '#5ED4B2',
    500: '#4AC3A1',
    600: '#3BA98B',
    700: '#2E826B',
    800: '#0C3C2E',
  },

  accent: {
    50: '#FEFCF2',
    100: '#FBF7D9',
    200: '#F1ECB6',
    300: '#E6D95F',
    base: '#EAD94C',
    500: '#D5C43F',
    600: '#BFAE34',
    700: '#BFA634',
    800: '#9B8629',
  },

  gunmetal: {
    lightest: '#FBFBFC',
    50: '#F5F6F8',
    100: '#EFF0F3',
    200: '#D7D8DC',
    300: '#B2B4BA',
    400: '#8D8F97',
    500: '#6A6D76',
    base: '#30343F',
    700: '#21242C',
    800: '#17191F',
  },

  spaceCadet: {
    50: '#EDEFF4',
    100: '#9CA1B5',
    200: '#7C8199',
    300: '#5A5F78',
    base: '#283044',
    500: '#232B3D',
    600: '#1F2635',
    700: '#1D2332',
    800: '#151A26',
  },

  red: {
    50: '#FCF0F1',
    100: '#F9D3D7',
    200: '#D1A6AD',
    300: '#E46B78',
    base: '#D62839',
    500: '#BF2232',
    600: '#A71C2B',
    700: '#A41F2C',
    800: '#801823',
  },

  orange: {
    50: '#FFF8EF',
    100: '#FFE1BC',
    200: '#FFC27A',
    300: '#FFAB3D',
    base: '#FF9F1C',
    500: '#E68F1A',
    600: '#CC8017',
    700: '#C37616',
    800: '#9E5D12',
  },

  mantis: {
    50: '#EFF8ED',
    100: '#E8F4E6',
    200: '#BADFB3',
    300: '#7CC26E',
    base: '#5FB54E',
    500: '#519A42',
    600: '#438137',
    700: '#36672C',
    800: '#2B5123',
  },

  lavender: {
    50: '#FDFDFE',
    100: '#F6F3FA',
    200: '#EDE5F3',
    300: '#DFD5E7',
    base: '#E8E1EF',
    500: '#D9D0E3',
    600: '#CBC2D7',
    700: '#B3AFC8',
    800: '#998FB4',
  },

  amaranthPurple: {
    50: '#FDE9EE',
    100: '#F3D4DC',
    200: '#E6A9B9',
    300: '#D97890',
    base: '#A30B37',
    500: '#8E0A2F',
    600: '#7A0828',
    700: '#81092C',
    800: '#600721',
  },

  resedaGreen: {
    50: '#F4F5F3',
    100: '#D6D9D0',
    200: '#B6BBB1',
    300: '#9FA895',
    base: '#646F58',
    500: '#5A644F',
    600: '#4F5947',
    700: '#4A5241',
    800: '#353B30',
  },

  electricBlue: {
    50: '#EFFDFF',
    100: '#DEFCFF',
    200: '#BDF8FF',
    300: '#8CF4FF',
    base: '#18E8FF',
    500: '#00D8F0',
    600: '#00C6DC',
    700: '#00A2B4',
    800: '#005A64',
  },

  /** Utility aliases — semantic mappings for quick access */
  white: '#FFFFFF',
  black: '#000000',
} as const;

/** Gradient from Figma "Gradient" style */
export const gradients = {
  brand: 'linear-gradient(to right, #7A5FFF 16%, #6FE3C1 75%)',
} as const;

export type ColorFamily = keyof typeof colors;
