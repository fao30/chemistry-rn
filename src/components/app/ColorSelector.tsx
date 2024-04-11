import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { COLOR_SETTING, COLOR_SETTING_OPTIONS } from '../../lib/constants';

const ColorSelector = ({
  focused,
  setFocused,
  selected,
  setSelected,
}: {
  focused: string;
  setFocused: (value: string) => void;
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const { styles } = useStyles();
  return (
    <View style={styles.container}>
      {COLOR_SETTING_OPTIONS.map(color => {
        const borderColor = focused === color.color ? 'white' : selected === color.color ? 'black' : 'transparent';
        return (
          <TouchableWithoutFeedback
            onFocus={() => {
              setFocused(color.color);
            }}
            onPress={() => {
              setSelected(color.color);
            }}
            key={color.value}>
            <View
              style={[
                styles.color,
                {
                  backgroundColor: color.color,
                  borderColor: borderColor,
                },
              ]}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ColorSelector;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '50%',
    },

    color: {
      width: sizes.ICON,
      height: sizes.ICON,
      borderWidth: 2,
      margin: sizes.PADDING,
      borderRadius: 5,
    },
  });

  return {
    styles,
    colors,
    sizes,
    globalStyles,
  };
};
