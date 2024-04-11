import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
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
                    <Text style={styles.header}></Text>
                    {SOLUBILITIES.map(item => (
                      <Text style={styles.header} key={item}>
                        {dictionary.solubilities[item]}
                        {'\n'}
                        {SOLUBILITIES_CHEMICAL[item]}
                      </Text>
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
                          <View
                            key={'view1' + index}
                            style={{
                              ...styles.row,
                              backgroundColor: index % 2 == 0 ? colors.TABLE_1 : colors.TABLE_2,
                            }}>
                            <Text style={{ ...styles.value, backgroundColor: colors.TABLE_2 }}>
                              {dictionary.elementSolubilities[element]}
                              {'\n'}
                              {ELEMENT_SOLUBILITY_CHEMICAL[element]}
                            </Text>
                          </View>
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
                                  }}>
                                  {dictionary.solubility[el.Ammonium]}
                                </Text>
                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Lithium),
                                  }}>
                                  {dictionary.solubility[el.Lithium]}
                                </Text>
                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Sodium),
                                  }}>
                                  {dictionary.solubility[el.Sodium]}
                                </Text>
                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Potassium),
                                  }}>
                                  {dictionary.solubility[el.Potassium]}
                                </Text>
                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Magnesium),
                                  }}>
                                  {dictionary.solubility[el.Magnesium]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Calcium),
                                  }}>
                                  {dictionary.solubility[el.Calcium]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Barium),
                                  }}>
                                  {dictionary.solubility[el.Barium]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.IronII),
                                  }}>
                                  {dictionary.solubility[el.IronII]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.IronIII),
                                  }}>
                                  {dictionary.solubility[el.IronIII]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.CopperII),
                                  }}>
                                  {dictionary.solubility[el.CopperII]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Silver),
                                  }}>
                                  {dictionary.solubility[el.Silver]}
                                </Text>

                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.Zinc),
                                  }}>
                                  {dictionary.solubility[el.Zinc]}
                                </Text>
                                <Text
                                  style={{
                                    ...styles.value,
                                    color: getColor(el.LeadII),
                                  }}>
                                  {dictionary.solubility[el.LeadII]}
                                </Text>
                                <Text
                                  style={{
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
