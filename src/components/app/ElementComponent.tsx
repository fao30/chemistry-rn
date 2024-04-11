import { View, Text, StyleSheet, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { getGlobalStyles } from '../../constants/globalStyles';
import { useSizes } from '../../constants/size';
import { CATEGORIES, showGroup, showPeriod } from '../../lib/constants';
import { Dictionary, Element } from '../../types';
import { getFixedNumber } from '../../utils/helper';
const ElementComponent = ({
  focused,
  setFocused,
  el,
  isElementFocused,
  elementPressed,
  settings,
  dictionary,
  style,
}: {
  focused: string;
  setFocused: (focused: string) => void;
  el: Element;
  isElementFocused: boolean;
  elementPressed: (element: any) => void;
  settings: any;
  dictionary: Dictionary;
  style: ViewStyle | undefined;
}) => {
  const { colors, globalStyles, sizes, styles } = useStyles();

  const elementColor = el?.category ? CATEGORIES[el?.category]?.color : '#B1C0C9';

  const backgroundColor =
    focused === el?.symbol ? elementColor : isElementFocused ? colors.GRAYED_ELEMENT : colors.WHITE;

  return el?.symbol ? (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          elementPressed(el);
        }}
        onFocus={() => {
          setFocused(el?.symbol);
        }}>
        <View
          style={{
            ...styles.container,
            borderColor: elementColor,
            backgroundColor: backgroundColor,
            ...style,
          }}>
          <Text style={styles.atomicNumber}>{el?.static.generalProperties.atomicNumber}</Text>
          {settings.showElementAtomicWeight && (
            <Text style={styles.atomicWeight}>{getFixedNumber(el?.static.generalProperties.atomicWeight)}</Text>
          )}

          <Text
            style={{
              ...globalStyles.TEXT_STYLE_BOLD,
              color: focused === el.symbol ? colors.WHITE : elementColor,
            }}>
            {el?.symbol}
          </Text>

          {settings.showElementName && <Text style={styles.name}>{dictionary.elements[el?.symbol].name}</Text>}

          {
            // @ts-ignore
            showGroup?.[el?.symbol] && (
              <View
                style={{
                  top: -15,
                  height: 15,
                  width: sizes.ELEMENT_SIZE,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  borderTopWidth: 2,
                  borderRightWidth: 2,
                  borderLeftWidth: 2,
                  borderColor: colors.WHITE,
                }}>
                <Text
                  style={{
                    ...globalStyles.TEXT_STYLE,
                    fontSize: sizes.FONTSIZE_1x,
                    color: colors.WHITE,
                  }}>
                  {dictionary.titles.group} {el.group}
                </Text>
              </View>
            )
          }

          {
            // @ts-ignore
            showPeriod?.[el?.symbol] && (
              <View
                style={{
                  left: -sizes.ELEMENT_SIZE / 2 - 7.5,
                  height: 15,
                  width: sizes.ELEMENT_SIZE,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  borderTopWidth: 2,
                  borderRightWidth: 2,
                  borderLeftWidth: 2,
                  borderColor: colors.WHITE,
                  transform: [{ rotate: '-90deg' }],
                }}>
                <Text
                  style={{
                    ...globalStyles.TEXT_STYLE,
                    fontSize: sizes.FONTSIZE_1x,
                    color: colors.WHITE,
                  }}>
                  {dictionary.titles.period} {el.period}
                </Text>
              </View>
            )
          }
        </View>
      </TouchableWithoutFeedback>
    </>
  ) : (
    <View
      style={{
        width: sizes.ELEMENT_SIZE,
        height: sizes.ELEMENT_SIZE,
      }}
    />
  );
};

export default ElementComponent;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      width: sizes.ELEMENT_SIZE,
      height: sizes.ELEMENT_SIZE,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    atomicNumber: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_1x * 0.8,
      paddingLeft: 2,
      paddingTop: 2,
      color: colors.TEXT,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    atomicWeight: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_1x * 0.8,
      paddingRight: 2,
      paddingTop: 2,
      color: colors.TEXT,
      position: 'absolute',
      top: 0,
      right: 0,
    },
    name: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_1x * 0.6,
      paddingLeft: 2,
      color: colors.TEXT,
      position: 'absolute',
      bottom: 0,
    },
  });

  return {
    styles,
    colors,
    sizes,
    globalStyles,
  };
};
