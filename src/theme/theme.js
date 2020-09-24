import typography from './typography';
import sizes, { baseSizes } from './sizes';

const space = baseSizes;

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const radii = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  full: '9999px',
};

const opacity = {
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1',
};

const borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '4px': '4px solid',
};

const colors = {
  primary: '#4b7e99',
  secondary: '#77869e',
  error: '#eb4667',
  success: '#00ba9f',
  purple: '#6d41ee',
  'brown-grey': '#a6a6a6',

  'low-risk': '#00ba9f',
  'medium-risk': '#ff9684',
  'high-risk': '#ff0102',

  'disabled-bg': '#d8d8d8',

  'grey-light': '#A6A6A6',
  'grey-disabled': '#d2d2d2',

  'golden-yellow': '#ffb300',
};

const shadows = {
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
};

const theme = {
  // breakpoints, // no breakpoints for now
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  ...typography,
  sizes,
  shadows,
  space,
  // icons, not added for now
};

export default theme;
