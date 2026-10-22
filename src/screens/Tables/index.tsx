import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../../components/app/Header';
import GradientBackground from '../../components/app/GradientBackground';
import useStyles from './style';
import { ELEMENT_REACTIONS, ELEMENT_REACTIONS_DATA, REACTIONS, REACTIONS_DATA } from '../../lib/constants';
import useLocales from '../../lib/locales/useLocales';
import icons from '../../assets/icons';

const getColor = (t: keyof typeof REACTIONS_DATA | undefined) => {
  return t ? REACTIONS_DATA[t].color : undefined;
};

const Index = () => {
  const [focused, setFocused] = useState('none');
  const { styles, colors, sizes } = useStyles();
  const dictionary = useLocales();

  // const verticalScrollRef = useRef();

  // const onArrowUp = () => {
  //   verticalScrollRef.current?.scrollTo({ y: 0, animated: true });
  // };
  // const onArrowDown = () => {
  //   verticalScrollRef.current?.scrollToEnd({ animated: true });
  // };

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{dictionary.titles.reactivitySeries}</Text>

            {/* <View>
              <TouchableWithoutFeedback onPress={onArrowUp} onFocus={() => setFocused('arrow-up')}>
                <Image
                  source={icons.ARROW}
                  style={{
                    tintColor: focused == 'arrow-up' ? colors.BLACK : colors.WHITE,
                    width: sizes.FONTSIZE_6x,
                    height: sizes.FONTSIZE_6x,
                  }}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={onArrowDown} onFocus={() => setFocused('arrow-down')}>
                <Image
                  source={icons.ARROW}
                  style={{
                    tintColor: focused == 'arrow-down' ? colors.BLACK : colors.WHITE,
                    width: sizes.FONTSIZE_6x,
                    height: sizes.FONTSIZE_6x,
                    transform: [
                      {
                        rotate: '180deg',
                      },
                    ],
                  }}
                />
              </TouchableWithoutFeedback>
            </View> */}
          </View>

          <View
            style={{
              ...styles.table,
            }}>
            <View style={styles.row}>
              <Text style={styles.header}></Text>
              {REACTIONS.map(item => (
                <Text style={styles.header} key={item}>
                  {dictionary.reactivity[item]}
                </Text>
              ))}
            </View>
            <ScrollView>
              <View>
                {ELEMENT_REACTIONS.map((element, index) => {
                  const reactions = ELEMENT_REACTIONS_DATA[element];

                  return (
                    <View
                      key={index}
                      style={{
                        ...styles.row,
                        backgroundColor: index % 2 == 0 ? colors.TABLE_1 : colors.TABLE_2,
                      }}>
                      <Text style={{ ...styles.value, backgroundColor: colors.TABLE_2 }}>
                        {dictionary.elements[element].name}
                      </Text>
                      <Text
                        style={{
                          ...styles.value,
                          color: getColor(reactions.CW),
                        }}>
                        {reactions.CW ? dictionary.reactions[reactions.CW] : ''}
                      </Text>
                      <Text
                        style={{
                          ...styles.value,
                          color: getColor(reactions.HW),
                        }}>
                        {reactions.HW ? dictionary.reactions[reactions.HW] : ''}
                      </Text>
                      <Text
                        style={{
                          ...styles.value,
                          color: getColor(reactions.DA),
                        }}>
                        {reactions.DA ? dictionary.reactions[reactions.DA] : ''}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </GradientBackground>
    </>
  );
};

export default Index;
