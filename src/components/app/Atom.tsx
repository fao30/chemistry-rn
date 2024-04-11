import React, { useEffect, useState } from 'react';
import { View, Animated, Text, Easing } from 'react-native';
import { Element } from '../../types';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { useColors } from '../../constants/color';

const getRadius = (n: number, customSizes: any) => {
  const sizePerShell = (customSizes.mainSize - customSizes.start) / 14;
  return customSizes.start + sizePerShell * n;
};

const Atom = ({ element }: { element: Element }) => {
  const sizes = useSizes();
  const colors = useColors();
  const globalStyles = getGlobalStyles(colors, sizes);
  const customSizes = {
    mainSize: sizes.SECTION_WIDTH - sizes.PADDING * 3,
    start: (sizes.SECTION_WIDTH - sizes.PADDING * 3) / 9,
  };

  return (
    <View
      style={{
        width: customSizes.mainSize,
        height: customSizes.mainSize,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: sizes.MAIN_PADDING,
      }}>
      <View
        style={{
          width: customSizes.start,
          height: customSizes.start,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: customSizes.start,
        }}>
        <Text
          style={{
            ...globalStyles.TEXT_STYLE_BOLD,
            color: colors.WHITE,
          }}>
          {element.symbol}
        </Text>
      </View>

      {element.static.electrons.electronsPerShell?.map((e, shellIndex) => {
        const radius = getRadius(shellIndex, customSizes);
        const rotation = useState(new Animated.Value(0))[0];

        const rotate = rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', `360deg`],
        });

        useEffect(() => {
          Animated.loop(
            Animated.timing(rotation, {
              toValue: 1,
              easing: Easing.linear,
              duration: 10000 * (shellIndex + 1),
              useNativeDriver: true,
            }),
          ).start();
        }, []);

        return (
          <View
            key={shellIndex}
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1.5,
              width: radius * 2,
              height: radius * 2,
              borderRadius: radius,
            }}>
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: rotate,
                  },
                ],
                position: 'absolute',
              }}>
              {Array(e)
                ?.fill(e)
                ?.map((_, electronIndex) => {
                  const electronAngle = (electronIndex / e) * Math.PI * 2;
                  const x = Math.cos(electronAngle) * radius;
                  const y = Math.sin(electronAngle) * radius;
                  return (
                    <View
                      key={`${shellIndex}-${electronIndex}`}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'black',
                        position: 'absolute',
                        borderWidth: 2,
                        borderColor: 'white',
                        left: x,
                        top: y,
                        transform: [{ translateX: -5 }, { translateY: -5 }],
                      }}
                    />
                  );
                })}
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
};

export default Atom;
