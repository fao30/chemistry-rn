import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { BLOCK_COLORS, blockOf } from '../../lib/shortForm';
import { Dictionary, Element, ShortSubgroup } from '../../types';
import { getFixedNumber } from '../../utils/helper';

/**
 * A cell of the short-period table.
 *
 * The cell always fills its column edge to edge, so the grid stays continuous.
 * The main (A) and secondary (B) subgroups are told apart by mirroring the
 * cell's contents rather than by shrinking and shifting the box: A puts the
 * symbol on the left and the atomic number on the right, B does the opposite.
 */

/** Blend a #rrggbb colour towards white; `amount` 0 = white, 1 = the colour. */
export const tint = (hex: string, amount: number) => {
  const value = hex.replace('#', '');
  const full =
    value.length === 3
      ? value
          .split('')
          .map(c => c + c)
          .join('')
      : value;
  const n = parseInt(full, 16);
  const mix = (channel: number) => Math.round(255 - (255 - channel) * amount);
  return `rgb(${mix((n >> 16) & 255)}, ${mix((n >> 8) & 255)}, ${mix(n & 255)})`;
};

const RING_INNER = 2; // white inner line

/** Outer black border of the focus frame; scales with the cell. */
const ringOuter = (width: number) => Math.max(4, Math.round(width * 0.05));

/** Total thickness of the focus frame, to pad the cell's contents clear of it. */
export const focusRingThickness = (width: number) => ringOuter(width) + RING_INNER;

/**
 * Focus frame for a TV viewed from across the room: a heavy black border with a
 * white inner line, so it reads on every block colour. Drawn over the cell, so
 * the cell pads its contents by focusRingThickness while focused.
 */
export const FocusRing = ({ width }: { width: number }) => {
  const colors = useColors();
  return (
    <View
      pointerEvents="none"
      style={{
        ...StyleSheet.absoluteFillObject,
        borderWidth: ringOuter(width),
        borderColor: colors.TEXT,
      }}>
      <View style={{ flex: 1, borderWidth: RING_INNER, borderColor: colors.WHITE }} />
    </View>
  );
};

const ShortFormCell = ({
  el,
  focused,
  setFocused,
  isElementFocused,
  elementPressed,
  settings,
  dictionary,
  width,
  height,
  subgroup = 'A',
}: {
  el: Element;
  focused: string;
  setFocused: (value: string) => void;
  isElementFocused: boolean;
  elementPressed: (element: Element) => void;
  settings: any;
  dictionary: Dictionary;
  width: number;
  height: number;
  subgroup?: ShortSubgroup;
}) => {
  const { styles, colors, globalStyles } = useStyles();

  // type scales with the cell so the table reads the same at 720p and 1080p
  const symbolSize = Math.round(width * 0.17);
  const metaSize = Math.max(7, Math.round(width * 0.078));
  const nameSize = Math.max(6, Math.round(width * 0.062));

  // the short form is coloured by electron block (s/p/d/f), as the printed
  // charts are, not by the category colours the international table uses
  const elementColor: string = el ? BLOCK_COLORS[blockOf(el)] : '#B1C0C9';
  const isFocused = focused === el?.symbol;
  const isSecondary = subgroup === 'B';

  // the fill now encodes the block, so focus is shown with a heavy frame
  // (FocusRing) rather than by recolouring the cell
  const backgroundColor = isElementFocused && !isFocused ? tint(elementColor, 0.45) : elementColor;

  // dark text on the block fills, as in the printed charts
  const textColor = colors.TEXT;

  return (
    <TouchableWithoutFeedback onPress={() => elementPressed(el)} onFocus={() => setFocused(el?.symbol)}>
      <View
        style={{
          ...styles.cell,
          width,
          height,
          backgroundColor,
          // paddingHorizontal/Vertical, as the base style's would override a plain padding
          ...(isFocused
            ? { paddingHorizontal: focusRingThickness(width), paddingVertical: focusRingThickness(width) }
            : null),
        }}>
        <View style={{ ...styles.top, flexDirection: isSecondary ? 'row-reverse' : 'row' }}>
          <Text
            style={{
              ...globalStyles.TEXT_STYLE_BOLD,
              fontSize: symbolSize,
              lineHeight: symbolSize * 1.1,
              color: colors.TEXT,
            }}
            numberOfLines={1}>
            {el?.symbol}
          </Text>

          <View style={{ alignItems: isSecondary ? 'flex-start' : 'flex-end' }}>
            <Text style={{ ...styles.small, color: textColor, fontSize: metaSize, lineHeight: metaSize * 1.2 }}>
              {el?.static.generalProperties.atomicNumber}
            </Text>
            {settings.showElementAtomicWeight && (
              <Text
                style={{ ...styles.small, color: textColor, fontSize: metaSize, lineHeight: metaSize * 1.2 }}
                numberOfLines={1}>
                {getFixedNumber(el?.static.generalProperties.atomicWeight)}
              </Text>
            )}
          </View>
        </View>

        {settings.showElementName && (
          <Text
            style={{
              ...styles.name,
              color: textColor,
              fontSize: nameSize,
              textAlign: isSecondary ? 'right' : 'left',
            }}
            numberOfLines={1}>
            {dictionary.elements[el?.symbol]?.name}
          </Text>
        )}

        {isFocused && <FocusRing width={width} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShortFormCell;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    cell: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.GRAY_2,
      justifyContent: 'space-between',
      paddingHorizontal: 3,
      paddingVertical: 2,
    },
    top: {
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    small: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_1x * 0.95,
      lineHeight: sizes.FONTSIZE_1x * 1.15,
    },
    name: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_1x * 0.8,
    },
  });

  return { styles, colors, sizes, globalStyles };
};
