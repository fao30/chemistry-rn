import { StyleSheet } from 'react-native';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.PADDING * 2,
    },
    headerText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_4x,
      color: colors.WHITE,
    },
    label: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_3x,
      color: colors.WHITE,
    },
    section: {
      marginVertical: sizes.PADDING,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return {
    colors,
    sizes,
    styles,
    globalStyles,
  };
};
export default useStyles;
