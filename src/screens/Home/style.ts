import { StyleSheet } from 'react-native';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { useMemo } from 'react';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
      },
      table: {
        marginTop: sizes.ELEMENT_SIZE / 2,
        paddingHorizontal: sizes.ELEMENT_SIZE,
        width: '100%',
        position: 'relative',
      },
      contStyle: {
        marginTop: sizes.HEIGHT * 0.04,
        paddingBottom: sizes.WIDTH * 0.04,
      },
      txt1: {
        ...globalStyles.TEXT_STYLE,
        fontSize: sizes.WIDTH * 0.033,
        color: 'black',
      },
      period: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: sizes.PERIOD_GAP,
      },
      types: {
        marginHorizontal: sizes.ELEMENT_SIZE,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginVertical: sizes.MAIN_PADDING,
      },

      typesPart: {
        width: '33%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: sizes.MAIN_PADDING,
        marginBottom: sizes.MAIN_PADDING,
      },

      color: {
        height: sizes.ELEMENT_SIZE * 0.7,
        width: sizes.ELEMENT_SIZE * 0.7,
      },

      typeText: {
        ...globalStyles.TEXT_STYLE,
        color: colors.WHITE,
      },
    });
  }, [colors, sizes, globalStyles]);

  return {
    colors,
    sizes,
    styles,
    globalStyles,
  };
};

export default useStyles;
