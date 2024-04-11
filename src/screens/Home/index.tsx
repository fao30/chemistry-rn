import React, { useCallback, useMemo, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import useStyles from './style';
import { ELEMENT_DATA1, getElementBySymbol, isElement } from '../../lib/functions';
import { CATEGORIES_OPTIONS, ELEMENT_DATA2, ELEMENT_DATA3 } from '../../lib/constants';
import useLocales from '../../lib/locales/useLocales';
import GradientBackground from '../../components/app/GradientBackground';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../store/reducer/settings';
import { Element } from '../../types';
import Header from '../../components/app/Header';
import ElementComponent from '../../components/app/ElementComponent';
import HighLightedElement from '../../components/app/HighLightedElement';
import { useNavigation } from '@react-navigation/native';
import screens from '../../constants/screens';
import images from '../../assets/images';

const Index = () => {
  const { styles, sizes } = useStyles();
  const [focused, setFocused] = useState<string>('none');
  const isElementFocused = useMemo(() => isElement(focused), [focused]);
  const settings = useSelector(selectSettings);
  const dictionary = useLocales();
  const navigation = useNavigation();
  const elementPressed = useCallback(
    (element: Element) => {
      // @ts-ignore
      navigation.navigate(screens.ELEMENT, { element });
    },
    [navigation],
  );

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <ScrollView>
          <View
            style={{
              ...styles.container,
              transform: [
                {
                  scale: settings.tabWidth,
                },
              ],
            }}>
            <View style={styles.table}>
              {isElementFocused && <HighLightedElement dictionary={dictionary} element={getElementBySymbol(focused)} />}
              <Image
                source={images.LOGO}
                style={{
                  width: sizes.ELEMENT_SIZE * 1.5,
                  height: sizes.ELEMENT_SIZE * 1.5,
                  position: 'absolute',
                  right: sizes.ELEMENT_SIZE,
                  borderRadius: sizes.BORDER_RADIUS,
                  bottom: 0,
                }}
              />
              {ELEMENT_DATA1?.map((period, pIndex) => (
                <View
                  key={`period : ${pIndex}`}
                  style={{
                    ...styles.period,
                    justifyContent: 'space-between',
                  }}>
                  {period.map((el, gIndex) => (
                    <ElementComponent
                      dictionary={dictionary}
                      // @ts-ignore
                      el={el}
                      elementPressed={elementPressed}
                      focused={focused}
                      isElementFocused={isElementFocused}
                      settings={settings}
                      setFocused={setFocused}
                      key={`period : ${pIndex}, group : ${gIndex}, element : ${el?.symbol}`}
                    />
                  ))}
                </View>
              ))}
              <View
                style={{
                  ...styles.period,
                }}>
                {ELEMENT_DATA2.map((el, index) => (
                  <ElementComponent
                    style={{
                      marginRight: sizes.PERIOD_GAP,
                    }}
                    dictionary={dictionary}
                    el={el}
                    elementPressed={elementPressed}
                    focused={focused}
                    isElementFocused={isElementFocused}
                    settings={settings}
                    setFocused={setFocused}
                    key={`data 2 : ${index}`}
                  />
                ))}
              </View>
              <View
                style={{
                  ...styles.period,
                }}>
                {ELEMENT_DATA3.map((el, index) => (
                  <ElementComponent
                    style={{
                      marginRight: sizes.PERIOD_GAP,
                    }}
                    dictionary={dictionary}
                    el={el}
                    elementPressed={elementPressed}
                    focused={focused}
                    isElementFocused={isElementFocused}
                    settings={settings}
                    setFocused={setFocused}
                    key={`data 2 : ${index}`}
                  />
                ))}
              </View>
            </View>

            <View style={styles.types}>
              {CATEGORIES_OPTIONS.map((category, index) => (
                <View key={index} style={styles.typesPart}>
                  <View style={{ ...styles.color, backgroundColor: category.color }} />
                  <Text style={styles.typeText}>{dictionary.elementCategories[category.value]}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </GradientBackground>
    </>
  );
};

export default Index;
