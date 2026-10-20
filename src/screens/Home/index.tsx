import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import useStyles from './style';
import { ELEMENT_DATA1, getElementBySymbol, isElement } from '../../lib/functions';
import { CATEGORIES_OPTIONS, ELEMENT_DATA2, ELEMENT_DATA3 } from '../../lib/constants';
import useLocales from '../../lib/locales/useLocales';
import GradientBackground from '../../components/app/GradientBackground';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings, selectTableView, setTableView } from '../../store/reducer/settings';
import { Element, TableView } from '../../types';
import Header from '../../components/app/Header';
import ElementComponent from '../../components/app/ElementComponent';
import HighLightedElement, { cardLeft, cardSize } from '../../components/app/HighLightedElement';
import { useNavigation } from '@react-navigation/native';
import screens from '../../constants/screens';
import images from '../../assets/images';
import TableViewSwitch from '../../components/app/TableViewSwitch';
import ShortFormTable from '../../components/app/ShortFormTable';
import { findCell, overlaps, stickyCardRanges } from '../../lib/stickyCard';

// the international table's cells as rendered: seven periods, then the two series rows
const INTERNATIONAL_GRID = [...ELEMENT_DATA1, ELEMENT_DATA2, ELEMENT_DATA3].map(row =>
  (row as ({ symbol?: string } | null)[]).map(el => el?.symbol),
);

const Index = () => {
  const { styles, sizes } = useStyles();
  const [focused, setFocused] = useState<string>('none');
  const isElementFocused = useMemo(() => isElement(focused), [focused]);
  const settings = useSelector(selectSettings);
  const tableView = useSelector(selectTableView);
  const isShortForm = tableView === 'short';
  const dictionary = useLocales();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const elementPressed = useCallback(
    (element: Element) => {
      // @ts-ignore
      navigation.navigate(screens.ELEMENT, { element });
    },
    [navigation],
  );

  // The zoomed element card lives inside the scrolled table. Shifting it down by
  // the scroll offset keeps it on screen when focus moves to the lower rows.
  // The table is scaled by tabWidth, so the offset is in unscaled units.
  const scrollY = useRef(new Animated.Value(0)).current;
  const stickyOffset = useMemo(() => Animated.divide(scrollY, settings.tabWidth || 1), [scrollY, settings.tabWidth]);

  // The scroll is tracked on the native side, so the JS copy of scrollY would
  // stay at 0, and every re-render would briefly put the card back at the top
  // of the table (off screen once scrolled). A listener makes native report the
  // value back, keeping what React renders in step with what native shows.
  useEffect(() => {
    const id = scrollY.addListener(() => {});
    return () => scrollY.removeListener(id);
  }, [scrollY]);

  // ...unless that would put it over the focused cell; then it waits below that row
  const cardOffset = useMemo(() => {
    const cell = findCell(INTERNATIONAL_GRID, focused);
    if (!cell) return stickyOffset;
    // cells are spread edge to edge over the padded table (18 columns), rows are stacked with PERIOD_GAP
    const pitch = (sizes.ELEMENT_SIZE * 18) / 17;
    const cellLeft = sizes.ELEMENT_SIZE + cell.col * pitch;
    if (!overlaps(cellLeft, cellLeft + sizes.ELEMENT_SIZE, cardLeft(sizes), cardLeft(sizes) + cardSize(sizes))) {
      return stickyOffset;
    }
    const rowTop = cell.row * (sizes.ELEMENT_SIZE + sizes.PERIOD_GAP);
    return stickyOffset.interpolate(stickyCardRanges(rowTop, rowTop + sizes.ELEMENT_SIZE, cardSize(sizes)));
  }, [focused, stickyOffset, sizes]);

  return (
    <>
      <Header focused={focused} setFocused={setFocused} />
      <GradientBackground>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}>
          <View
            style={{
              ...styles.container,
              transform: [
                {
                  scale: settings.tabWidth,
                },
              ],
            }}>
            <View style={styles.switchRow}>
              <TableViewSwitch
                focused={focused}
                setFocused={setFocused}
                selected={tableView}
                setSelected={(value: TableView) => dispatch(setTableView(value))}
                settings={settings}
                dictionary={dictionary}
              />
            </View>

            {isShortForm ? (
              <ShortFormTable
                focused={focused}
                setFocused={setFocused}
                isElementFocused={isElementFocused}
                elementPressed={elementPressed}
                settings={settings}
                dictionary={dictionary}
                highlightedElement={isElementFocused ? getElementBySymbol(focused) : undefined}
                stickyOffset={stickyOffset}
              />
            ) : (
              <View style={styles.table}>
                {isElementFocused && (
                  <Animated.View
                    style={{ ...styles.highlight, transform: [{ translateY: cardOffset }] }}
                    pointerEvents="none">
                    <HighLightedElement dictionary={dictionary} element={getElementBySymbol(focused)} />
                  </Animated.View>
                )}
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
            )}

            {/* the short form carries its own s/p/d/f block legend */}
            {!isShortForm && (
              <View style={styles.types}>
                {CATEGORIES_OPTIONS.map((category, index) => (
                  <View key={index} style={styles.typesPart}>
                    <View style={{ ...styles.color, backgroundColor: category.color }} />
                    <Text style={styles.typeText}>{dictionary.elementCategories[category.value]}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </Animated.ScrollView>
      </GradientBackground>
    </>
  );
};

export default Index;
