import { View, Text } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';

const LabelAndText = ({ label, text, view }: { label: string; text?: any; view?: any }) => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginBottom: 2,
      }}>
      <Text
        style={{
          width: '50%',
          ...globalStyles.TEXT_STYLE,
          fontSize: sizes.FONTSIZE_2x,
          color: colors.GRAY,
        }}>
        {label}
      </Text>
      {text && (
        <Text
          style={{
            width: '50%',
            ...globalStyles.TEXT_STYLE,
            fontSize: sizes.FONTSIZE_2x,
          }}>
          {text}
        </Text>
      )}

      {view && (
        <View
          style={{
            width: '50%',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {view}
        </View>
      )}
    </View>
  );
};

export default LabelAndText;
