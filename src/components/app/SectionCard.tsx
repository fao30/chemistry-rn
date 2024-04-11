import { View, Text, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';

type Props = {
  id: string;
  children: React.ReactNode;
  style: ViewStyle | ViewStyle[];
  title?: string;
  focused: string;
  setFocused: (focused: string) => void;
  onPress?: () => void;
};

const SectionCard = ({ children, style, title, focused, setFocused, id, onPress }: Props) => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  return (
    <TouchableWithoutFeedback
      onFocus={() => {
        setFocused(id);
      }}
      onPress={onPress}>
      <View
        style={[
          {
            paddingVertical: sizes.PADDING,
            backgroundColor: colors.WHITE,
            borderRadius: sizes.BORDER_RADIUS_LOW,
            borderTopWidth: 3,
            borderTopColor: colors.PRIMARY,
            marginBottom: sizes.MAIN_PADDING,
          },
          style,
          title ? { paddingTop: sizes.FONTSIZE_3x * 2 + sizes.PADDING } : {},
        ]}>
        {title && (
          <Text
            style={{
              ...globalStyles.TEXT_STYLE_BOLD,
              backgroundColor: colors.PRIMARY,
              width: 'auto',
              position: 'absolute',
              color: colors.WHITE,
              top: sizes.PADDING,
              left: 0,
              paddingHorizontal: sizes.PADDING * 2,
              paddingVertical: sizes.PADDING * 0.5,
              borderTopRightRadius: sizes.BORDER_RADIUS_LOW,
              borderBottomRightRadius: sizes.BORDER_RADIUS_LOW,
            }}>
            {title}
          </Text>
        )}

        {focused === id && (
          <View
            style={{
              backgroundColor: colors.PRIMARY,
              width: 10,
              height: 10,
              borderRadius: 5,
              position: 'absolute',
              top: sizes.PADDING,
              right: sizes.PADDING,
              zIndex: 1,
            }}
          />
        )}
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SectionCard;
