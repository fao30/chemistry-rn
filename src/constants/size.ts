import { useWindowDimensions } from 'react-native';

const getSizes = (width: number, height: number) => {
  const getMaxSize = () => Math.max(width, height);
  return {
    WIDTH: width,
    HEIGHT: height,
    PADDING: width * 0.005,
    MAIN_PADDING: width * 0.01,
    ICON: getMaxSize() * 0.02,
    FONTSIZE_1x: 8,
    FONTSIZE_2x: 10,
    FONTSIZE_3x: 12,
    FONTSIZE_4x: 14,
    FONTSIZE_5x: 16,
    FONTSIZE_6x: 22,
    ELEMENT_SIZE: width / 21,
    PERIOD_GAP: width / 21 / 17,
    BORDER_RADIUS: 8,
    BORDER_RADIUS_LOW: 6,
    SECTION_WIDTH: (width - width * 0.04) / 3,
    PADDED_WIDTH: width - width * 0.02,
  };
};

export type Size = ReturnType<typeof getSizes>;

export const useSizes = () => {
  const { width, height } = useWindowDimensions();
  return getSizes(width, height);
};
