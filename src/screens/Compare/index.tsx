import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React, { useMemo, useState } from 'react';
import useStyles from './styles';
import Header from '../../components/app/Header';
import GradientBackground from '../../components/app/GradientBackground';
import useLocales from '../../lib/locales/useLocales';
import { ELEMENT_DATA_COMPLETE } from '../../lib/constants';
import { Element } from '../../types';
import DropDownPicker from '../../components/global/DropDownPicker';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../lib/functions';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../store/reducer/settings';

const getMeltingPoint = (meltingPoint: number | null, lang: any) => {
  if (meltingPoint === null) return '-';
  return `${meltingPoint} K | ${kelvinToCelsius(meltingPoint, lang)} °C | ${kelvinToFahrenheit(meltingPoint, lang)} °F`;
};

const Index = () => {
  const { colors, styles, sizes, globalStyles } = useStyles();
  const [focused, setFocused] = useState('none');
  const options = useMemo(
    () =>
      ELEMENT_DATA_COMPLETE.map(element => ({
        label: element.symbol,
        value: element,
      })),
    [ELEMENT_DATA_COMPLETE],
  );
  const dictionary = useLocales();
  const settings = useSelector(selectSettings);

  const [elementSelected, setSelected] = useState([
    {
      element: ELEMENT_DATA_COMPLETE[0],
      elementDic: dictionary.elements[ELEMENT_DATA_COMPLETE[0].symbol],
    },
    {
      element: ELEMENT_DATA_COMPLETE[0],
      elementDic: dictionary.elements[ELEMENT_DATA_COMPLETE[0].symbol],
    },
  ]);

  const selectElement = (element: Element, index: number) => {
    let pre = elementSelected;
    pre[index] = {
      element: element,
      elementDic: dictionary.elements[element.symbol],
    };
    setSelected(pre);
    setFocused('gp');
  };

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.mainView}>
              <View style={styles.portion}></View>
              <View style={styles.portion}>
                <View
                  style={{
                    backgroundColor: colors.GRAY_2,
                    margin: sizes.MAIN_PADDING,
                  }}>
                  <DropDownPicker
                    focused={focused}
                    setFocused={setFocused}
                    title={'element-1'}
                    selected={elementSelected[0].element}
                    width="100%"
                    // @ts-ignore
                    options={options}
                    setSelected={(element: Element) => {
                      selectElement(element, 0);
                    }}
                  />
                </View>
              </View>
              <View style={styles.portion}>
                <View
                  style={{
                    backgroundColor: colors.GRAY_2,
                    margin: sizes.MAIN_PADDING,
                  }}>
                  <DropDownPicker
                    focused={focused}
                    setFocused={setFocused}
                    title={'element-2'}
                    selected={elementSelected[1].element}
                    width="100%"
                    // @ts-ignore
                    options={options}
                    setSelected={(element: Element) => {
                      selectElement(element, 1);
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.mainView}>
              <View style={styles.portion}>
                <Text style={styles.title}>{dictionary.titles.title}</Text>
                <Text style={styles.title}>{dictionary.titles.symbol}</Text>
                <Text style={styles.title}>{dictionary.titles.atomicNumber}</Text>
                <Text style={styles.title}>{dictionary.titles.group}</Text>
                <Text style={styles.title}>{dictionary.titles.period}</Text>
                <Text style={styles.title}>{dictionary.titles.block}</Text>
                <Text style={styles.title}>{dictionary.titles.abudanceInEarthCrust}</Text>
                <Text style={styles.title}>{dictionary.titles.abudanceInUniverse}</Text>

                {/* General */}
                <TouchableWithoutFeedback
                  onFocus={() => {
                    setFocused('gp');
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.header, focused === 'gp' ? { backgroundColor: colors.BLACK } : {}]}>
                      {dictionary.titles.generalProperties}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <Text style={styles.title}>{dictionary.titles.atomicWeight}</Text>
                <Text style={styles.title}>{dictionary.titles.category}</Text>
                <Text style={styles.title}>{dictionary.titles.color}</Text>
                <Text style={styles.title}>{dictionary.titles.radioactive}</Text>
                <Text style={styles.title}>{dictionary.titles.crystalStructure}</Text>

                {/* physical Properties */}
                <TouchableWithoutFeedback
                  onFocus={() => {
                    setFocused('pp');
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.header, focused === 'pp' ? { backgroundColor: colors.BLACK } : {}]}>
                      {dictionary.titles.physicalProperties}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <Text style={styles.title}>{dictionary.titles.density} (g/cm^3)</Text>
                <Text style={styles.title}>{dictionary.titles.phase}</Text>
                <Text style={styles.title}>{dictionary.titles.meltingPoint}</Text>
                <Text style={styles.title}>{dictionary.titles.boilingPoint} (kJ/mol)</Text>
                <Text style={styles.title}>{dictionary.titles.heatOfFusion} (kJ/mol)</Text>
                <Text style={styles.title}>{dictionary.titles.heatOfVaporization}(kJ/mol)</Text>

                {/* Atomic Properties */}
                <TouchableWithoutFeedback
                  onFocus={() => {
                    setFocused('ap');
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.header, focused === 'ap' ? { backgroundColor: colors.BLACK } : {}]}>
                      {dictionary.titles.generalProperties}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <Text style={styles.title}>{dictionary.titles.atomicRadius} (pm)</Text>
                <Text style={styles.title}>{dictionary.titles.covalentRadius}</Text>
                <Text style={styles.title}>{dictionary.titles.electronegativity}</Text>
                <Text style={styles.title}>{dictionary.titles.atomicVolume} (cm^3/mol)</Text>
                <Text style={styles.title}>{dictionary.titles.oxidationStates}</Text>
                <Text style={styles.title}>{dictionary.titles.electronConfiguration}</Text>
                <Text style={styles.title}>{dictionary.titles.electronsPerShell}</Text>
              </View>

              {elementSelected.map(({ element, elementDic }, index) => (
                <View style={styles.portion} key={`element-${index}`}>
                  <Text style={styles.title}>{elementDic.name}</Text>
                  <Text style={styles.title}>{element.symbol}</Text>
                  <Text style={styles.title}>{element.static.generalProperties.atomicNumber}</Text>
                  <Text style={styles.title}>{element.group}</Text>
                  <Text style={styles.title}>{element.period}</Text>
                  <Text style={styles.title}>{element.block}</Text>
                  <Text style={styles.title}>
                    {element.static.abundance.earth ? element.static.abundance.earth.replace('_', '^') + '%' : '-'}
                  </Text>
                  <Text style={styles.title}>
                    {element.static.abundance.universe
                      ? element.static.abundance.universe.replace('_', '^') + '%'
                      : '-'}
                  </Text>

                  {/* General */}

                  <View style={[styles.gap]}></View>

                  <Text style={styles.title}>{element.static.generalProperties.atomicWeight}</Text>
                  <Text style={styles.title}>
                    {element.category ? dictionary.elementCategories[element.category] : '-'}
                  </Text>
                  <Text style={styles.title}>
                    {element.static.generalProperties?.color
                      ? dictionary.colors[element.static.generalProperties.color]
                      : '-'}
                  </Text>
                  <Text style={styles.title}>{element.static.generalProperties.radioActive ? 'Yes' : 'No'}</Text>
                  <Text style={styles.title}>
                    {element.static.crystalStructure
                      ? dictionary.crystalStructures[element.static.crystalStructure]
                      : '-'}
                  </Text>

                  <View style={[styles.gap]}></View>

                  <Text style={styles.title}>{element.static.physhicalProperties.density ?? '-'}</Text>
                  <Text style={styles.title}>
                    {element.static.physhicalProperties.phase
                      ? dictionary.phase[element.static.physhicalProperties.phase]
                      : '-'}
                  </Text>
                  <Text style={styles.title}>
                    {getMeltingPoint(element.static.physhicalProperties.meltingPoint, settings.langID)}
                  </Text>
                  <Text style={styles.title}>
                    {getMeltingPoint(element.static.physhicalProperties.boilingPoint, settings.langID)}
                  </Text>
                  <Text style={styles.title}>{element.static.physhicalProperties.heatOfFusion ?? '-'}</Text>
                  <Text style={styles.title}>{element.static.physhicalProperties.heatOfVaporization ?? '-'}</Text>

                  <View style={[styles.gap]}></View>

                  <Text style={styles.title}>{element.static.atomicProperties.atomicRadius ?? '-'}</Text>
                  <Text style={styles.title}>{element.static.atomicProperties.covalentRadius ?? '-'}</Text>
                  <Text style={styles.title}>{element.static.atomicProperties.electronegativity ?? '-'}</Text>
                  <Text style={styles.title}>{element.static.atomicProperties.atomicVolume ?? '-'}</Text>
                  <Text style={styles.title}>{element.static.atomicProperties.oxidationStates.join(', ')}</Text>
                  <Text style={styles.title}>
                    {element.static.electrons.electronConfiguration.map(item => item.replaceAll('-', '')).join(' ')}
                  </Text>
                  <Text style={styles.title}>{element.static.electrons.electronsPerShell.join(', ')}</Text>
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
