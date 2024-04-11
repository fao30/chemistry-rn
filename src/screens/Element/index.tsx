import { View, Text, Image, ScrollView } from 'react-native';
import useStyles from './styles';
import { useMemo, useState } from 'react';
import Header from '../../components/app/Header';
import GradientBackground from '../../components/app/GradientBackground';
import useLocales from '../../lib/locales/useLocales';
import SectionCard from '../../components/app/SectionCard';
import { crystalImages, elementImages } from '../../assets/images';
import LabelAndText from '../../components/app/LabelAndText';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../lib/functions';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../store/reducer/settings';
import { useRoute } from '@react-navigation/native';
import { Element } from '../../types';
import Atom from '../../components/app/Atom';
import AudioHandler, { StartPlayingAudio, StopPlayingAudio } from '../../utils/AudioHandler';

const setText = (text: any) => {
  return text || '-';
};

const getMeltingPoint = (meltingPoint: number | null, lang: any) => {
  if (meltingPoint === null) return '-';
  return `${meltingPoint} K | ${kelvinToCelsius(meltingPoint, lang)} °C | ${kelvinToFahrenheit(meltingPoint, lang)} °F`;
};

const renderElectronConfiguration = (element: Element) => {
  return element.static.electrons.electronConfiguration.map(item => item.replaceAll('-', '') + ' ');
};

const Index = () => {
  const route = useRoute() as any;
  const element = route.params.element as Element;
  const dictionary = useLocales();
  const elementDictionary = useMemo(() => {
    // @ts-ignore
    return dictionary.elements[element.symbol];
  }, [element, dictionary]);
  const settings = useSelector(selectSettings);
  const { styles, sizes } = useStyles();
  const [focused, setFocused] = useState<string>('none');

  const meltingPoint = useMemo(
    () => getMeltingPoint(element.static.physhicalProperties.meltingPoint, settings.langID),
    [],
  );

  const boilingPoint = useMemo(
    () => getMeltingPoint(element.static.physhicalProperties.meltingPoint, settings.langID),
    [],
  );

  AudioHandler(element.static.generalProperties.atomicNumber, settings);

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              {/* Section 1 */}
              <View style={[styles.section]}>
                <SectionCard
                  onPress={() => {
                    StopPlayingAudio();
                    StartPlayingAudio(element.static.generalProperties.atomicNumber, settings);
                  }}
                  style={styles.center}
                  id={'name'}
                  focused={focused}
                  setFocused={setFocused}>
                  <Text style={styles.nameText}>{elementDictionary.name}</Text>
                </SectionCard>

                <View
                  style={{
                    flexDirection: 'row',
                    gap: sizes.MAIN_PADDING,
                  }}>
                  <SectionCard
                    style={[styles.center, { width: sizes.SECTION_WIDTH / 2 - sizes.MAIN_PADDING / 2 }]}
                    id={'symbol'}
                    focused={focused}
                    setFocused={setFocused}>
                    <Text style={styles.symbolText}>{element.symbol}</Text>
                    <Text style={styles.atomicNumber}>{element.static.generalProperties.atomicNumber}</Text>
                  </SectionCard>
                  <SectionCard
                    style={[styles.padded, { width: sizes.SECTION_WIDTH / 2 - sizes.MAIN_PADDING / 2 }]}
                    id={'group-period-block'}
                    focused={focused}
                    setFocused={setFocused}>
                    <LabelAndText label={dictionary.titles.group} text={setText(element.group)} />
                    <LabelAndText label={dictionary.titles.period} text={setText(element.period)} />
                    <LabelAndText label={dictionary.titles.block} text={setText(element.block)} />
                  </SectionCard>
                </View>

                <SectionCard
                  style={[styles.center, styles.row, styles.spaceEvenly]}
                  id={'protons-electrons-neutrons'}
                  focused={focused}
                  setFocused={setFocused}>
                  {[
                    {
                      title: dictionary.titles.protons,
                      value: element.static.unGrouped.protons,
                    },
                    {
                      title: dictionary.titles.electrons,
                      value: element.static.unGrouped.electrons,
                    },
                    {
                      title: dictionary.titles.neutrons,
                      value: element.static.unGrouped.neutrons,
                    },
                  ].map(item => (
                    <View key={item.title} style={[styles.center]}>
                      <Text style={[styles.grayText]}>{item.title}</Text>
                      <Text style={[styles.text]}>{item.value}</Text>
                    </View>
                  ))}
                </SectionCard>

                <SectionCard
                  style={[styles.padded]}
                  title={dictionary.titles.generalProperties}
                  id={'general-properties'}
                  focused={focused}
                  setFocused={setFocused}>
                  <LabelAndText
                    label={dictionary.titles.atomicNumber}
                    text={element.static.generalProperties.atomicNumber}
                  />
                  <LabelAndText
                    label={dictionary.titles.atomicWeight}
                    text={element.static.generalProperties.atomicWeight}
                  />
                  <LabelAndText
                    label={dictionary.titles.massNumber}
                    text={element.static.generalProperties.massNumber}
                  />
                  <LabelAndText
                    label={dictionary.titles.category}
                    text={element.category ? dictionary.elementCategories[element.category] : '-'}
                  />
                  <LabelAndText
                    label={dictionary.titles.color}
                    text={setText(
                      element.static.generalProperties.color
                        ? dictionary.colors[element.static.generalProperties.color]
                        : '',
                    )}
                  />
                  <LabelAndText
                    label={dictionary.titles.radioactive}
                    text={element.static.generalProperties.radioActive ? dictionary.titles.yes : dictionary.titles.no}
                  />
                </SectionCard>

                <SectionCard style={[styles.padded]} id={'name-origin'} focused={focused} setFocused={setFocused}>
                  <Text style={[styles.text]}>{elementDictionary.nameOrigin}</Text>
                </SectionCard>
                <SectionCard style={[styles.padded]} id={'crystal-card'} focused={focused} setFocused={setFocused}>
                  <LabelAndText
                    label={dictionary.titles.crystalStructure}
                    text={
                      element.static.crystalStructure
                        ? dictionary.crystalStructures[element.static.crystalStructure]
                        : '-'
                    }
                  />

                  {element.static.crystalStructure && (
                    <Image
                      // @ts-ignore
                      source={crystalImages[element.static.crystalStructure]}
                      style={{
                        objectFit: 'contain',
                        width: sizes.SECTION_WIDTH - sizes.PADDING * 3,
                        height: sizes.SECTION_WIDTH - sizes.PADDING * 3,
                      }}
                    />
                  )}
                </SectionCard>

                <SectionCard
                  style={[styles.padded]}
                  title={dictionary.titles.history}
                  id={'history'}
                  focused={focused}
                  setFocused={setFocused}>
                  <Text style={[styles.text]}>{elementDictionary.history}</Text>
                </SectionCard>

                <SectionCard style={[styles.padded]} id={'description'} focused={focused} setFocused={setFocused}>
                  <Text style={[styles.text]}>{elementDictionary.description}</Text>
                </SectionCard>
              </View>
              {/* Section 2 */}
              <View style={styles.section}>
                <SectionCard style={[styles.padded]} id={'atomic-structure'} focused={focused} setFocused={setFocused}>
                  <LabelAndText
                    label={dictionary.titles.electronsPerShell}
                    text={element.static.electrons.electronsPerShell.join(', ')}
                  />
                  <LabelAndText
                    label={dictionary.titles.electronConfiguration}
                    text={setText(renderElectronConfiguration(element))}
                  />

                  <Atom element={element} />
                </SectionCard>
                <SectionCard
                  style={[styles.padded]}
                  title={dictionary.titles.physicalProperties}
                  id={'physical-properties'}
                  focused={focused}
                  setFocused={setFocused}>
                  <LabelAndText
                    label={dictionary.titles.phase}
                    text={setText(
                      element.static.physhicalProperties.phase
                        ? dictionary.phase[element.static.physhicalProperties.phase]
                        : '',
                    )}
                  />
                  <LabelAndText
                    label={dictionary.titles.density}
                    view={
                      <>
                        <Text style={[styles.text]}>{setText(element.static.physhicalProperties.density)} g/cm</Text>
                        <Text style={styles.sup}>3</Text>
                      </>
                    }
                  />
                  <LabelAndText label={dictionary.titles.meltingPoint} text={meltingPoint} />
                  <LabelAndText label={dictionary.titles.boilingPoint} text={boilingPoint} />
                  <LabelAndText
                    label={dictionary.titles.heatOfFusion}
                    text={setText(element.static.physhicalProperties.heatOfFusion) + ' kJ/mol'}
                  />
                  <LabelAndText
                    label={dictionary.titles.heatOfVaporization}
                    text={setText(element.static.physhicalProperties.heatOfVaporization) + ' kJ/mol'}
                  />
                  <LabelAndText
                    label={dictionary.titles.specificHeatCapacity}
                    text={setText(element.static.physhicalProperties.specificHeatCapacity) + ' J/g·K'}
                  />
                </SectionCard>
                <SectionCard style={[styles.padded]} id={'abundance'} focused={focused} setFocused={setFocused}>
                  <LabelAndText
                    label={dictionary.titles.abudanceInEarthCrust}
                    text={(() => {
                      if (element.static.abundance.earth?.includes('_')) {
                        return null;
                      }
                      return element.static.abundance.earth ? element.static.abundance.earth + '%' : '-';
                    })()}
                    view={(() => {
                      if (element.static.abundance.earth?.includes('_')) {
                        return (
                          <>
                            <Text style={[styles.text]}>{element.static.abundance.earth.split('_')[0]}</Text>
                            <Text style={styles.sup}>{element.static.abundance.earth.split('_')[1]}</Text>
                            <Text style={[styles.text]}>%</Text>
                          </>
                        );
                      }

                      return null;
                    })()}
                  />

                  <LabelAndText
                    label={dictionary.titles.abudanceInUniverse}
                    text={(() => {
                      if (element.static.abundance.universe?.includes('_')) {
                        return null;
                      }
                      return element.static.abundance.universe ? element.static.abundance.universe + '%' : '-';
                    })()}
                    view={(() => {
                      if (element.static.abundance.universe?.includes('_')) {
                        return (
                          <>
                            <Text style={[styles.text]}>{element.static.abundance.universe.split('_')[0]}</Text>
                            <Text style={styles.sup}>{element.static.abundance.universe.split('_')[1]}</Text>
                            <Text style={[styles.text]}>%</Text>
                          </>
                        );
                      }

                      return null;
                    })()}
                  />
                </SectionCard>

                {
                  // @ts-ignore
                  elementImages?.[element.symbol] && (
                    <SectionCard style={[styles.padded]} id={'image-card'} focused={focused} setFocused={setFocused}>
                      <Image
                        // @ts-ignore
                        source={elementImages?.[element.symbol]}
                        style={{
                          width: sizes.SECTION_WIDTH - sizes.PADDING * 3,
                          height: sizes.SECTION_WIDTH - sizes.PADDING * 3,
                        }}
                      />
                    </SectionCard>
                  )
                }

                <SectionCard style={[styles.padded]} id={'toxicity'} focused={focused} setFocused={setFocused}>
                  <Text style={[styles.text]}>{elementDictionary.toxicity}</Text>
                </SectionCard>
              </View>
              {/* Section 3 */}
              <View style={styles.section}>
                <SectionCard
                  style={[styles.padded]}
                  title={dictionary.titles.atomicProperties}
                  id={'atomic-properties'}
                  focused={focused}
                  setFocused={setFocused}>
                  <LabelAndText
                    label={dictionary.titles.atomicRadius}
                    text={setText(element.static.atomicProperties.atomicRadius) + ' pm'}
                  />
                  <LabelAndText
                    label={dictionary.titles.covalentRadius}
                    text={setText(element.static.atomicProperties.covalentRadius) + ' pm'}
                  />
                  <LabelAndText
                    label={dictionary.titles.electronegativity}
                    text={setText(element.static.atomicProperties.electronegativity)}
                  />
                  <LabelAndText
                    label={dictionary.titles.ionizationPotential}
                    text={setText(element.static.atomicProperties.ionizationPotential) + ' eV'}
                  />
                  <LabelAndText
                    label={dictionary.titles.atomicVolume}
                    view={
                      <>
                        <Text style={[styles.text]}>{setText(element.static.atomicProperties.atomicVolume)} cm</Text>
                        <Text style={styles.sup}>3</Text>
                        <Text style={[styles.text]}>/mol</Text>
                      </>
                    }
                  />
                  <LabelAndText
                    label={dictionary.titles.thermalConductivity}
                    text={setText(element.static.atomicProperties.thermalConductivity) + ' W/cm.K'}
                  />
                  <LabelAndText
                    label={dictionary.titles.oxidationStates}
                    text={setText(element.static.atomicProperties.oxidationStates)}
                  />
                </SectionCard>

                <SectionCard
                  style={[styles.padded]}
                  title={dictionary.titles.applications}
                  id={'applications'}
                  focused={focused}
                  setFocused={setFocused}>
                  <Text style={[styles.text]}>{elementDictionary.applications}</Text>
                </SectionCard>

                <SectionCard
                  style={[styles.padded]}
                  title={dictionary.titles.isotopes}
                  id={'isotopes'}
                  focused={focused}
                  setFocused={setFocused}>
                  <Text style={[styles.grayText]}>{dictionary.titles.stable}</Text>
                  <View style={[styles.row, styles.wrap]}>
                    {element.static.isotopes.stable.length === 0 && <Text style={styles.text}>-</Text>}

                    {element.static.isotopes.stable.map((item, index) => (
                      <View style={styles.row} key={index}>
                        <Text style={styles.sup}>{item}</Text>
                        <Text style={[styles.text, { marginRight: 5 }]}>
                          {element.symbol}
                          {element.static.isotopes.stable.length - 1 === index ? '' : ', '}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <Text style={[styles.grayText, { marginTop: sizes.MAIN_PADDING }]}>{dictionary.titles.unstable}</Text>
                  <View style={[styles.row, styles.wrap]}>
                    {element.static.isotopes.unstable.map((item, index) => (
                      <View style={styles.row} key={index}>
                        <Text style={styles.sup}>{item}</Text>
                        <Text style={[styles.text, { marginRight: 5 }]}>
                          {element.symbol}
                          {element.static.isotopes.unstable.length - 1 === index ? '' : ', '}
                        </Text>
                      </View>
                    ))}
                  </View>
                </SectionCard>
              </View>
            </View>
          </View>
        </ScrollView>
      </GradientBackground>
    </>
  );
};

export default Index;
