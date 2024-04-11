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
      padding: sizes.MAIN_PADDING,
    },

    mainView: {
      flexDirection: 'row',
    },

    portion: {
      display: 'flex',
      flexDirection: 'column',
      width: '33%',
    },

    title: {
      ...globalStyles.TEXT_STYLE_BOLD,
      marginBottom: 3,
      color: colors.WHITE,
    },

    text: {
      ...globalStyles.TEXT_STYLE,
      marginBottom: 3,
      color: colors.WHITE,
    },

    header: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_4x,
      color: colors.WHITE,
      textTransform: 'uppercase',
      backgroundColor: colors.PRIMARY,
      paddingHorizontal: sizes.MAIN_PADDING,
      paddingVertical: 5,
      marginVertical: sizes.MAIN_PADDING,
      borderTopRightRadius: sizes.BORDER_RADIUS,
      borderBottomRightRadius: sizes.BORDER_RADIUS,
    },
    gap: {
      height: sizes.FONTSIZE_4x + 15,
      marginVertical: sizes.MAIN_PADDING,
    },
  });

  return { colors, sizes, styles, globalStyles };
};

export default useStyles;
