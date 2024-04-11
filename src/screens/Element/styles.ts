import { StyleSheet } from 'react-native';
import { useColors } from '../../constants/color';
import { getGlobalStyles } from '../../constants/globalStyles';
import { useSizes } from '../../constants/size';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.MAIN_PADDING,
    },
    innerContainer: {
      gap: sizes.MAIN_PADDING,
      flexDirection: 'row',
      flex: 1,
    },
    section: {
      width: sizes.SECTION_WIDTH,
    },
    nameText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_5x,
    },
    symbolText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_6x,
    },
    atomicNumber: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_3x,
      position: 'absolute',
      top: sizes.PADDING,
      left: sizes.PADDING,
    },
    // customs
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    wrap: {
      flexWrap: 'wrap',
    },
    gap: {
      gap: sizes.PADDING,
    },
    spaceEvenly: {
      justifyContent: 'space-evenly',
    },
    text: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_2x,
    },
    sup: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_1x,
    },
    grayText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.GRAY,
      fontSize: sizes.FONTSIZE_2x,
    },
    padded: {
      paddingVertical: sizes.PADDING * 1.5,
      paddingHorizontal: sizes.PADDING * 1.5,
    },
  });

  return {
    colors,
    sizes,
    globalStyles,
    styles,
  };
};

export default useStyles;
