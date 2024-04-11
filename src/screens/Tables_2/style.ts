import { useMemo } from 'react';
import { useColors } from '../../constants/color';
import { getGlobalStyles } from '../../constants/globalStyles';
import { useSizes } from '../../constants/size';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingVertical: sizes.MAIN_PADDING,
        },
        titleView: {
          width: '100%',
          marginTop: sizes.MAIN_PADDING * 2,
          marginBottom: sizes.MAIN_PADDING,
          height: sizes.FONTSIZE_6x * 1.5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
        title: {
          ...globalStyles.TEXT_STYLE_BOLD,
          fontSize: sizes.FONTSIZE_6x,
          color: colors.WHITE,
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
        },
        table: {
          height: '80%',
          marginHorizontal: sizes.MAIN_PADDING,
          width: sizes.PADDED_WIDTH,
          backgroundColor: colors.TABLE_2,
          marginBottom: sizes.MAIN_PADDING,
        },
        row: {
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderColor: colors.TABLE_1,
        },
        header: {
          textAlign: 'center',
          paddingVertical: sizes.PADDING,
          ...globalStyles.TEXT_STYLE_BOLD,
          color: colors.WHITE,
          width: sizes.PADDED_WIDTH / 7,
          backgroundColor: colors.PRIMARY,
        },

        value: {
          textAlign: 'center',
          textAlignVertical: 'center',
          ...globalStyles.TEXT_STYLE_BOLD,
          color: colors.WHITE,
          height: sizes.FONTSIZE_3x * 2 + sizes.PADDING * 3,
          width: sizes.PADDED_WIDTH / 7,
        },
      }),
    [colors, sizes, globalStyles],
  );

  return { styles, sizes, colors, globalStyles };
};

export default useStyles;
