import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { Settings } from '../../store/reducer/settings';
import { Dictionary, Element } from '../../types';
import { CATEGORIES } from '../../lib/constants';

const getElementColor = (category: string | undefined) => {
  // @ts-ignore
  return category ? CATEGORIES[category]?.color : '#B1C0C9';
};

const HighLightedElement = ({ element, dictionary }: { element: any; dictionary: Dictionary }) => {
  const { styles, colors, sizes, globalStyles } = useStyles();
  const top = sizes.PADDING + sizes.FONTSIZE_3x / 2;
  const elementColor = getElementColor(element.category);

  return (
    <View style={{ ...styles.element, borderColor: elementColor }}>
      <TextAndLine
        text={dictionary.titles.atomicNumber + ' '}
        top={top}
        left={-sizes.ELEMENT_SIZE}
        width={sizes.ELEMENT_SIZE}
      />
      <TextAndLine text={dictionary.titles.symbol + '  '} left={-sizes.ELEMENT_SIZE} width={sizes.ELEMENT_SIZE * 1.5} />

      <TextAndLine
        text={dictionary.titles.title + '  '}
        left={-sizes.ELEMENT_SIZE}
        bottom={top}
        width={sizes.ELEMENT_SIZE * 1.2}
      />

      <TextAndLine
        reversed
        text={dictionary.titles.atomicWeight}
        right={-sizes.ELEMENT_SIZE}
        top={top}
        width={sizes.ELEMENT_SIZE}
      />

      {/* Details */}
      <Text style={styles.atomicNumber}>{element.static.generalProperties.atomicNumber}</Text>

      <Text style={styles.atomicWeight}>{element.static.generalProperties.atomicWeight.toFixed(3)}</Text>

      <Text
        style={{
          ...globalStyles.TEXT_STYLE_BOLD,
          color: elementColor,
          fontSize: sizes.FONTSIZE_4x * 1.5,
        }}>
        {element.symbol}
      </Text>

      <Text style={styles.name}>
        {/* @ts-ignore */}
        {dictionary.elements[element.symbol].name}
      </Text>
    </View>
  );
};

const TextAndLine = ({
  text,
  top,
  left,
  bottom,
  right,
  width,
  reversed = false,
}: {
  text: string;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  reversed?: boolean;
}) => {
  const { colors, sizes, globalStyles } = useStyles();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: colors.GRAYED_ELEMENT,
        },
        top ? { top } : {},
        bottom ? { bottom } : {},
        left ? { left } : {},
        right ? { right } : {},
      ]}>
      <Text
        style={[
          {
            ...globalStyles.TEXT_STYLE,
            fontSize: sizes.FONTSIZE_3x * 0.8,
            color: colors.WHITE,
            position: 'absolute',
          },
          reversed
            ? { right: -(text.length * sizes.FONTSIZE_3x) / 2 }
            : { left: -(text.length * sizes.FONTSIZE_3x) / 2 },
        ]}>
        {text}
      </Text>
      <View
        style={{
          height: 2,
          width: width,
          backgroundColor: colors.WHITE,
        }}
      />
    </View>
  );
};

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    element: {
      height: sizes.ELEMENT_SIZE * 3 - 10,
      width: sizes.ELEMENT_SIZE * 3 - 10,
      borderWidth: 3,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: sizes.ELEMENT_SIZE * 6,
    },
    atomicNumber: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_3x,
      color: colors.WHITE,
      position: 'absolute',
      top: sizes.PADDING,
      left: sizes.PADDING,
    },
    atomicWeight: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_3x,
      color: colors.WHITE,
      position: 'absolute',
      top: sizes.PADDING,
      right: sizes.PADDING,
    },
    name: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_3x,
      color: colors.WHITE,
      position: 'absolute',
      bottom: sizes.PADDING,
    },
  });

  return {
    styles,
    colors,
    sizes,
    globalStyles,
  };
};

export default HighLightedElement;
