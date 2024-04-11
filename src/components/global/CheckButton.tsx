import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';

const CheckButton = ({
  title = 'selector',
  setFocused,
  focused,
  settings,
  selected,
  setSelected,
}: {
  title?: string;
  setFocused: (value: string) => void;
  focused: string;
  settings: any;
  selected: boolean;
  setSelected: (value: boolean) => void;
}) => {
  const [active, setActive] = useState(true);
  const bgColor = selected ? settings?.primaryColor : '#D6D9DE';
  return (
    <TouchableWithoutFeedback
      onFocus={() => {
        setFocused(title);
      }}
      onPress={() => {
        if (active) {
          setActive(false);
          setSelected(!selected);
          setTimeout(() => {
            setActive(true);
          }, 1000);
        }
      }}>
      <View
        style={{
          width: 40,
          height: 20,
          borderRadius: 10,
          backgroundColor: bgColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: selected ? 'flex-end' : 'flex-start',
          borderWidth: 2,
          borderColor: focused == title ? 'white' : bgColor,
        }}>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckButton;
