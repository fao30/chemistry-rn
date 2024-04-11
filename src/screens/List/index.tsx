import { View, Text, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import useStyles from './style';
import Header from '../../components/app/Header';
import GradientBackground from '../../components/app/GradientBackground';
import { ELEMENT_DATA_COMPLETE } from '../../lib/constants';
import useLocales from '../../lib/locales/useLocales';
import { useNavigation } from '@react-navigation/native';
import screens from '../../constants/screens';
import InputComponent from '../../components/global/InputComponent';
import { Element } from '../../types';
import icons from '../../assets/icons';

const getPlaceHoldersArray = (len: number) => {
  let need = len % 5;
  return Array(need).fill(0);
};

enum SortBy {
  NAME,
  SYMBOL,
  NUMBER,
}

enum Order {
  ASCENDING,
  DESCENDING,
}

const Index = () => {
  const { colors, styles, sizes } = useStyles();
  const [elementData, setElementData] = useState(ELEMENT_DATA_COMPLETE);
  const [order, setOrder] = useState<Order>(Order.ASCENDING);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NUMBER);
  const [focused, setFocused] = useState<string>('none');
  const [active, setActive] = useState(true);
  const [searchText, setSearchText] = useState<string>('');

  const navigation = useNavigation();
  const dictionary = useLocales();

  const elementPressed = useCallback(
    (element: Element) => {
      // @ts-ignore
      navigation.navigate(screens.ELEMENT, { element });
    },
    [navigation],
  );

  const getSortedData = useCallback((sort: SortBy, order: Order, elementData: Element[]) => {
    const getOrder = (is: boolean) => {
      if (order === Order.ASCENDING) {
        return is ? 1 : -1;
      }

      return is ? -1 : 1;
    };

    let newData;
    // sorting
    switch (sort) {
      case SortBy.NAME:
        newData = [
          ...elementData.sort((a, b) =>
            getOrder(dictionary.elements[a.symbol].name > dictionary.elements[b.symbol].name),
          ),
        ];
        break;

      case SortBy.SYMBOL:
        newData = [...elementData.sort((a, b) => getOrder(a.symbol > b.symbol))];
        break;

      case SortBy.NUMBER:
        newData = [
          ...elementData.sort((a, b) =>
            getOrder(a.static.generalProperties.atomicNumber > b.static.generalProperties.atomicNumber),
          ),
        ];
        break;
    }

    return newData;
  }, []);

  const sortData = (sort: SortBy) => {
    if (!active) return;
    setActive(false);
    setTimeout(() => {
      setActive(true);
    }, 1000);

    let or = order;
    if (sort === sortBy) {
      or = order === Order.ASCENDING ? Order.DESCENDING : Order.ASCENDING;
      setOrder(or);
    }
    setSortBy(sort);

    setElementData(getSortedData(sort, or, elementData));
  };

  useEffect(() => {
    if (searchText === '') {
      setElementData(getSortedData(sortBy, order, ELEMENT_DATA_COMPLETE));
      return;
    }

    const newData = ELEMENT_DATA_COMPLETE.filter(element => {
      return (
        dictionary.elements[element.symbol].name.toLowerCase().includes(searchText.toLowerCase()) ||
        element.symbol.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    setElementData(getSortedData(sortBy, order, newData));
  }, [searchText]);

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.buttonView}>
              <View style={styles.button}>
                <InputComponent
                  id="inputField"
                  focused={focused}
                  setFocused={setFocused}
                  onChangeText={setSearchText}
                  placeholder={dictionary.titles.search}
                  value={searchText}
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => sortData(SortBy.NUMBER)}
                onFocus={() => {
                  setFocused('sortByNumber');
                }}>
                <View
                  style={[
                    styles.button,
                    focused === 'sortByNumber'
                      ? {
                          backgroundColor: colors.BLACK,
                        }
                      : {},
                  ]}>
                  {sortBy == SortBy.NUMBER && (
                    <Image
                      source={icons.ARROW}
                      style={{
                        height: sizes.FONTSIZE_3x,
                        width: sizes.FONTSIZE_3x,
                        tintColor: colors.WHITE,
                        transform: [
                          {
                            rotate: order == Order.ASCENDING ? '180deg' : '0deg',
                          },
                        ],
                      }}
                    />
                  )}

                  <Text style={styles.buttonText}>{dictionary.navbar.sortByNumber}</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => sortData(SortBy.NAME)}
                onFocus={() => {
                  setFocused('sortByName');
                }}>
                <View
                  style={[
                    styles.button,
                    focused === 'sortByName'
                      ? {
                          backgroundColor: colors.BLACK,
                        }
                      : {},
                  ]}>
                  {sortBy == SortBy.NAME && (
                    <Image
                      source={icons.ARROW}
                      style={{
                        height: sizes.FONTSIZE_3x,
                        width: sizes.FONTSIZE_3x,
                        tintColor: colors.WHITE,
                        transform: [
                          {
                            rotate: order == Order.ASCENDING ? '180deg' : '0deg',
                          },
                        ],
                      }}
                    />
                  )}
                  <Text style={styles.buttonText}>{dictionary.navbar.sortByName}</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => sortData(SortBy.SYMBOL)}
                onFocus={() => {
                  setFocused('sortBySymbol');
                }}>
                <View
                  style={[
                    styles.button,
                    focused === 'sortBySymbol'
                      ? {
                          backgroundColor: colors.BLACK,
                        }
                      : {},
                  ]}>
                  {sortBy == SortBy.SYMBOL && (
                    <Image
                      source={icons.ARROW}
                      style={{
                        height: sizes.FONTSIZE_3x,
                        width: sizes.FONTSIZE_3x,
                        tintColor: colors.WHITE,
                        transform: [
                          {
                            rotate: order == Order.ASCENDING ? '180deg' : '0deg',
                          },
                        ],
                      }}
                    />
                  )}
                  <Text style={styles.buttonText}>{dictionary.navbar.sortBySymbol}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View style={styles.elementsView}>
              {elementData.map(element => (
                <TouchableWithoutFeedback
                  key={element.symbol}
                  onFocus={() => setFocused(element.symbol)}
                  onPress={() => elementPressed(element)}>
                  <View
                    style={[
                      styles.element,
                      focused === element.symbol
                        ? {
                            backgroundColor: colors.BLACK,
                          }
                        : {},
                    ]}>
                    <Text style={styles.elementText}>{dictionary.elements[element.symbol].name}</Text>
                    <View style={styles.symbol}>
                      <Text style={styles.elementText}>{element.symbol}</Text>
                    </View>

                    <View style={styles.atomicNumber}>
                      <Text style={styles.elementText}>{element.static.generalProperties.atomicNumber}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))}
              {getPlaceHoldersArray(ELEMENT_DATA_COMPLETE.length).map((_, index) => (
                <View key={index} style={styles.placeholder} />
              ))}
            </View>
          </View>
        </ScrollView>
      </GradientBackground>
    </>
  );
};

export default Index;
