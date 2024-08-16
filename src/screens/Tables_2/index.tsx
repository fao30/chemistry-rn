import { View, Text, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../../components/app/Header';
import GradientBackground from '../../components/app/GradientBackground';
import useStyles from './style';
import {
  ELEMENT_SOLUBILITY,
  ELEMENT_SOLUBILITY_CHEMICAL,
  ELEMENT_SOLUBILITY_DATA,
  SOLUBILITIES,
  SOLUBILITIES_CHEMICAL,
  SOLUBILITY_DATA,
} from '../../lib/constants';
import useLocales from '../../lib/locales/useLocales';

const getColor = (t: keyof typeof SOLUBILITY_DATA | undefined) => {
  return t ? SOLUBILITY_DATA[t].color : undefined;
};

const Index = () => {
  const [focused, setFocused] = useState('none');
  const { styles, colors } = useStyles();
  const dictionary = useLocales();
  const [selected, setSelected] = useState({
    row: -1,
    column: -1,
  });

  const horizontalScroll1 = useRef();
  const horizontalScroll2 = useRef();

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{dictionary.titles.solubilityChart}</Text>
          </View>
          <TouchableWithoutFeedback onFocus={() => setFocused('main-table')}>
            <View
              style={{
                ...styles.table,
                borderWidth: 1,
                borderColor: focused === 'main-table' ? colors.WHITE : undefined,
              }}>
              <View>
                <ScrollView
                  focusable={false}
                  scrollEnabled={false}
                  horizontal
                  // @ts-ignore
                  ref={horizontalScroll1}>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.header}
                      onFocus={() => {
                        setFocused(`heading-1-1`);
                      }}></TouchableOpacity>
                    {SOLUBILITIES.map((item, index) => (
                      <TouchableOpacity
                        onFocus={() => {
                          setFocused(`heading-${item}`);
                        }}
                        onPress={() => {
                          setSelected({
                            ...selected,
                            column: index,
                          });
                        }}
                        key={item}>
                        <Text
                          style={{
                            ...styles.header,
                            backgroundColor:
                              selected.column === index
                                ? colors.BLACK
                                : focused === `heading-${item}`
                                ? colors.GRAY
                                : colors.PRIMARY,
                          }}>
                          {dictionary.solubilities[item]}
                          {'\n'}
                          {SOLUBILITIES_CHEMICAL[item]}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>

                {/* Vertical Scroll */}
                <ScrollView>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View>
                      {ELEMENT_SOLUBILITY.map((element, index) => {
                        return (
                          <TouchableOpacity
                            key={'view1' + index}
                            onFocus={() => {
                              setFocused(`element-${index}`);
                            }}
                            onPress={() => {
                              setSelected({
                                ...selected,
                                row: index,
                              });
                            }}
                            style={{
                              ...styles.row,
                              backgroundColor: index % 2 == 0 ? colors.TABLE_1 : colors.TABLE_2,
                            }}>
                            <Text
                              style={{
                                ...styles.value,
                                backgroundColor:
                                  selected.row === index
                                    ? colors.BLACK
                                    : focused === `element-${index}`
                                    ? colors.GRAY
                                    : colors.TABLE_2,
                              }}>
                              {dictionary.elementSolubilities[element]}
                              {'\n'}
                              {ELEMENT_SOLUBILITY_CHEMICAL[element]}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>

                    <View>
                      <ScrollView
                        horizontal
                        // @ts-ignore
                        ref={horizontalScroll2}
                        onScroll={e => {
                          // @ts-ignore
                          horizontalScroll1.current?.scrollTo({
                            x: e.nativeEvent.contentOffset.x,
                            animated: true,
                          });
                        }}>
                        <View>
                          {ELEMENT_SOLUBILITY.map((element, index) => {
                            const el = ELEMENT_SOLUBILITY_DATA[element];

                            return (
                              <View
                                key={index}
                                style={{
                                  ...styles.row,
                                  backgroundColor: index % 2 == 0 ? colors.TABLE_1 : colors.TABLE_2,
                                }}>
                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Ammonium),
                                    backgroundColor:
                                      selected.row === index && selected.column === 0 ? colors.WHITE : 'transparent',
                                  }}>
                                  {dictionary.solubility[el.Ammonium]}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 1 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Lithium),
                                  }}>
                                  {dictionary.solubility[el.Lithium]}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 2 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Sodium),
                                  }}>
                                  {dictionary.solubility[el.Sodium]}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 3 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Potassium),
                                  }}>
                                  {dictionary.solubility[el.Potassium]}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 4 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Magnesium),
                                  }}>
                                  {dictionary.solubility[el.Magnesium]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 5 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Calcium),
                                  }}>
                                  {dictionary.solubility[el.Calcium]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 6 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Barium),
                                  }}>
                                  {dictionary.solubility[el.Barium]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 7 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.IronII),
                                  }}>
                                  {dictionary.solubility[el.IronII]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 8 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.IronIII),
                                  }}>
                                  {dictionary.solubility[el.IronIII]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 9 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.CopperII),
                                  }}>
                                  {dictionary.solubility[el.CopperII]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 10 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Silver),
                                  }}>
                                  {dictionary.solubility[el.Silver]}
                                </Text>

                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 11 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Zinc),
                                  }}>
                                  {dictionary.solubility[el.Zinc]}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 12 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.LeadII),
                                  }}>
                                  {dictionary.solubility[el.LeadII]}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      selected.row === index && selected.column === 13 ? colors.WHITE : 'transparent',
                                    ...styles.value,
                                    color: getColor(el.Aluminum),
                                  }}>
                                  {dictionary.solubility[el.Aluminum]}
                                </Text>
                              </View>
                            );
                          })}
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </GradientBackground>
    </>
  );
};

export default Index;
