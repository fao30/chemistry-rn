import { Platform, StyleSheet } from 'react-native';
import { Color } from './color';
import { Size } from './size';
import { useMemo } from 'react';

export const getGlobalStyles = (colors: Color, sizes: Size) => {
  return useMemo(
    () =>
      StyleSheet.create({
        TEXT_STYLE: {
          fontSize: sizes.FONTSIZE_3x,
          color: colors.TEXT,
          fontFamily: 'DMSans-Regular',
        },
        TEXT_STYLE_BOLD: {
          fontSize: sizes.FONTSIZE_3x,
          color: colors.TEXT,
          fontFamily: 'DMSans-Bold',
        },
        SHADOW_STYLE: {
          shadowColor: colors.TEXT,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          borderWidth: Platform.OS == 'android' && colors.isDark ? 0.5 : 0,
        },
      }),
    [colors, sizes],
  );
};
