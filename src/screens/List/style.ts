import { StyleSheet } from 'react-native';
import { useColors } from '../../constants/color';
import { getGlobalStyles } from '../../constants/globalStyles';
import { useSizes } from '../../constants/size';
import { useMemo } from 'react';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: sizes.MAIN_PADDING,
          paddingTop: sizes.MAIN_PADDING,
        },
        elementsView: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        element: {
          width: (sizes.WIDTH - sizes.MAIN_PADDING * 2) / 5 - sizes.MAIN_PADDING,
          backgroundColor: colors.GRAY_2,
          height: 40,
          marginBottom: sizes.MAIN_PADDING,
          justifyContent: 'center',
          alignItems: 'center',
        },

        placeholder: {
          width: sizes.WIDTH / 5 - sizes.MAIN_PADDING * 2,
        },

        elementText: {
          ...globalStyles.TEXT_STYLE_BOLD,
          color: colors.WHITE,
        },

        symbol: {
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: colors.PRIMARY,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },

        atomicNumber: {
          position: 'absolute',
          right: 0,
          top: 0,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonView: {
          marginBottom: sizes.MAIN_PADDING,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },

        button: {
          flexDirection: 'row',
          gap: sizes.PADDING,
          height: 35,
          width: (sizes.WIDTH - sizes.MAIN_PADDING * 2) / 4 - sizes.MAIN_PADDING,
          backgroundColor: colors.PRIMARY,
          justifyContent: 'center',
          alignItems: 'center',
        },

        buttonText: {
          ...globalStyles.TEXT_STYLE,
          color: colors.WHITE,
        },
      }),
    [sizes, globalStyles, colors],
  );

  return {
    styles,
    sizes,
    globalStyles,
    colors,
  };
};

export default useStyles;
