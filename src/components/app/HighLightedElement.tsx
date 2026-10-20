import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { Size, useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { Settings } from '../../store/reducer/settings';
import { Dictionary, Element } from '../../types';
import { CATEGORIES } from '../../lib/constants';

// card geometry, shared with the tables so they can keep it off the focused cell
export const cardSize = (sizes: Size) => sizes.ELEMENT_SIZE * 3 - 10;
export const cardLeft = (sizes: Size) => sizes.ELEMENT_SIZE * 6;

const getElementColor = (category: string | undefined) => {
  // @ts-ignore
  return category ? CATEGORIES[category]?.color : '#B1C0C9';
};

const HighLightedElement = ({
  element,
  dictionary,
  inline = false,
}: {
  element: any;
  dictionary: Dictionary;
  // the short-form table has no empty region to overlay, so it places this
  // card in normal flow instead of absolutely inside the table
  inline?: boolean;
}) => {
  const { styles, colors, sizes, globalStyles } = useStyles();
  const top = sizes.PADDING + sizes.FONTSIZE_3x / 2;
  const elementColor = getElementColor(element.category);

  return (
    <View
      style={{
        ...styles.element,
        ...(inline
          ? {
              position: 'relative',
              top: undefined,
              left: undefined,
              // the card's labels are white: over the dark gradient of the
              // international table that reads fine, but inline it sits on the
              // white grid, so it needs its own dark surface
              backgroundColor: colors.TABLE_2,
            }
          : null),
        borderColor: elementColor,
      }}>
      {/* The leader labels need about five cells of width on either side.
          Inline (short form) the card sits in a three-column gap, so they are
          dropped rather than spilling over the table and off screen. */}
      {!inline && (
        <>
          <TextAndLine
            text={dictionary.titles.atomicNumber + ' '}
            top={top}
            left={-sizes.ELEMENT_SIZE}
            width={sizes.ELEMENT_SIZE}
          />
          <TextAndLine
            text={dictionary.titles.symbol + '  '}
            left={-sizes.ELEMENT_SIZE}
            width={sizes.ELEMENT_SIZE * 1.5}
          />

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
        </>
      )}

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
            // backed for the same reason as the card: it can sit over cells
            backgroundColor: colors.BACKGROUND_GRADIENT[0],
            paddingHorizontal: 4,
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
      height: cardSize(sizes),
      width: cardSize(sizes),
      borderWidth: 3,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: cardLeft(sizes),
      // solid, because the card stays on screen while the table scrolls under it
      backgroundColor: colors.BACKGROUND_GRADIENT[0],
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
