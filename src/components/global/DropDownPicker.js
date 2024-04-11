import { useRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

const DropDownPicker = ({
  options = [{ label: 'Option 1', value: 'option1' }],
  selected,
  setSelected,
  title,
  focused,
  setFocused,
  width = '50%',
  height,
}) => {
  const { colors, styles } = useStyles();

  const pickerRef = useRef();

  const open = () => {
    pickerRef.current.focus();
  };

  const close = () => {
    pickerRef.current.blur();
  };

  return (
    <TouchableWithoutFeedback
      onPress={open}
      onFocus={() => {
        setFocused(title);
      }}>
      <Picker
        style={[
          {
            width,
            height,
          },
          styles.main,
          focused === title ? styles.focused : {},
        ]}
        ref={pickerRef}
        selectedValue={selected}
        onValueChange={(value, index) => {
          setSelected(value);
        }}>
        {options.map((option, index) => {
          return (
            <Picker.Item
              fontFamily="DMSans-Regular"
              color={colors.THEME_TEXT}
              style={styles.text}
              key={index}
              label={option.label}
              value={option.value}
            />
          );
        })}
      </Picker>
    </TouchableWithoutFeedback>
  );
};

export default DropDownPicker;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    main: {
      color: colors.WHITE,
    },

    text: {
      fontSize: sizes.FONTSIZE_3x,
      ...globalStyles.TEXT_STYLE,
    },

    focused: {
      backgroundColor: colors.WHITE,
      color: colors.BLACK,
    },
  });

  return {
    colors,
    sizes,
    styles,
    globalStyles,
  };
};
