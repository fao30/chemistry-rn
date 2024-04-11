import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React, { useRef } from 'react';
import { useSizes } from '../../constants/size';
import { useColors } from '../../constants/color';
import { getGlobalStyles } from '../../constants/globalStyles';

const InputComponent = ({
  placeholder,
  value,
  onChangeText,
  focused,
  setFocused,
  id,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  focused: string;
  setFocused: (focused: string) => void;
  id: string;
}) => {
  const ref = useRef();
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const focus = () => {
    ref.current.focus();
  };

  return (
    <TouchableWithoutFeedback
      onPress={focus}
      onFocus={() => {
        setFocused(id);
      }}>
      <View
        style={[
          {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          },
          focused === id ? { borderColor: 'black', borderWidth: 1 } : {},
        ]}>
        <TextInput
          onChangeText={text => onChangeText(text)}
          ref={ref}
          value={value}
          style={{
            width: '100%',
            height: '100%',
            ...globalStyles.TEXT_STYLE,
            paddingHorizontal: sizes.MAIN_PADDING,
            fontSize: sizes.FONTSIZE_2x,
          }}
          placeholderTextColor={colors.GRAY_2}
          multiline={false}
          placeholder={placeholder}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputComponent;
