import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/app/Header';
import GradientBackground from '../../components/app/GradientBackground';
import useStyles from './styles';
import DropDownPicker from '../../components/global/DropDownPicker';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSettings,
  setLangID,
  setPlaySound,
  setPrimaryColor,
  setShowElementAtomicWeight,
  setShowElementName,
  setTabWidth,
} from '../../store/reducer/settings';
import useLocales from '../../lib/locales/useLocales';
import { Dictionary } from '../../types';
import ColorSelector from '../../components/app/ColorSelector';
import CheckButton from '../../components/global/CheckButton';

const getLanguages = (dic: Dictionary) => {
  return [
    {
      label: dic.titles.english,
      value: 'en',
    },
    {
      label: dic.titles.russian,
      value: 'ru',
    },
  ];
};

const tableWidths = [
  {
    label: '100%',
    value: 1,
  },
  {
    label: '95%',
    value: 0.95,
  },
  {
    label: '90%',
    value: 0.9,
  },
  {
    label: '85%',
    value: 0.85,
  },
  {
    label: '80%',
    value: 0.8,
  },
];

const Index = () => {
  const [focused, setFocused] = useState<string>('none');
  const { styles, colors, sizes, globalStyles } = useStyles();
  const settings = useSelector(selectSettings);
  const dictionary = useLocales();
  const dispatch = useDispatch();

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <View style={styles.container}>
          <Text style={styles.headerText}>{dictionary.titles.setting}</Text>
          {/* Language */}
          <View style={styles.section}>
            <Text style={styles.label}>{dictionary.titles.language}</Text>
            <DropDownPicker
              focused={focused}
              setFocused={setFocused}
              title={'Language'}
              options={getLanguages(dictionary)}
              selected={settings.langID}
              setSelected={(value: string) => {
                dispatch(setLangID(value));
              }}
            />
          </View>
          {/* Color */}
          <View style={styles.section}>
            <Text style={styles.label}>{dictionary.titles.color}</Text>
            <ColorSelector
              focused={focused}
              setFocused={setFocused}
              selected={settings.primaryColor}
              setSelected={(value: string) => {
                dispatch(setPrimaryColor(value));
              }}
            />
          </View>

          {/* TabWidth */}
          <View style={styles.section}>
            <Text style={styles.label}>{dictionary.titles.tableWidth}</Text>
            <DropDownPicker
              focused={focused}
              setFocused={setFocused}
              title={'tableWidth'}
              // @ts-ignore
              options={tableWidths}
              selected={settings.tabWidth}
              setSelected={(value: string) => {
                dispatch(setTabWidth(value));
              }}
            />
          </View>

          {/* Atomic Number */}
          <View style={styles.section}>
            <Text style={styles.label}>{dictionary.titles.atomicWeight}</Text>
            <View
              style={{
                width: '50%',
              }}>
              <CheckButton
                selected={settings.showElementAtomicWeight}
                settings={settings}
                focused={focused}
                title={'Atomic Number'}
                setFocused={setFocused}
                setSelected={(value: boolean) => {
                  dispatch(setShowElementAtomicWeight(value));
                }}
              />
            </View>
          </View>

          {/* Name */}
          <View style={styles.section}>
            <Text style={styles.label}>{dictionary.titles.title}</Text>
            <View
              style={{
                width: '50%',
              }}>
              <CheckButton
                selected={settings.showElementName}
                settings={settings}
                focused={focused}
                title={'name-'}
                setFocused={setFocused}
                setSelected={(value: boolean) => {
                  dispatch(setShowElementName(value));
                }}
              />
            </View>
          </View>

          {/* Audio */}
          <View style={styles.section}>
            <Text style={styles.label}>{dictionary.titles.audio}</Text>
            <View
              style={{
                width: '50%',
              }}>
              <CheckButton
                selected={settings.playSound}
                settings={settings}
                focused={focused}
                title={'audio-'}
                setFocused={setFocused}
                setSelected={(value: boolean) => {
                  dispatch(setPlaySound(value));
                }}
              />
            </View>
          </View>
        </View>
      </GradientBackground>
    </>
  );
};

export default Index;
