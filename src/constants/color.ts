import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSettings } from '../store/reducer/settings';

export const DEFAULT_PRIMARY_COLOR = '#008001';

const defaultColors = {
  PRIMARY: DEFAULT_PRIMARY_COLOR,
  PRIMARY_TEXT: 'white',
  BLACK: 'black',
  WHITE: 'white',
  NAV_BAR_TEXT: 'white',
  BACKGROUND_GRADIENT: ['#264785', '#229EBB'],
  GRAYED_ELEMENT: '#8B8B8E',
  GRAY: '#8B8B8B',
  GRAY_2: '#4B5563',
  TABLE_1: '#152033',
  TABLE_2: '#111827',
  TEXT: 'black',
  BACKGROUND: 'white',
};

const colorsLight = {
  ...defaultColors,
  isDark: false,
  THEME_TEXT: 'black',
};

export type Color = typeof colorsLight;

const colorsDark = {
  ...defaultColors,
  isDark: true,
  THEME_TEXT: 'white',
} as Color;

export const useColors = () => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? colorsDark : colorsLight;
  colors.PRIMARY = useSelector(selectSettings).primaryColor;
  return colors;
};
