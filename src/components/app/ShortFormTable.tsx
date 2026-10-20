import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import {
  ACTINIDE_SERIES,
  BLOCK_COLORS,
  BLOCK_OPTIONS,
  FormulaSegment,
  HIGHER_OXIDES,
  LANTHANIDE_SERIES,
  SHORT_COLUMNS,
  SHORT_TABLE,
  VOLATILE_HYDRIDES,
} from '../../lib/shortForm';
import { Dictionary, Element, ShortCell, ShortSeriesId } from '../../types';
import ShortFormCell, { FocusRing, tint } from './ShortFormCell';
import HighLightedElement from './HighLightedElement';
import { findCell, overlaps, stickyCardRanges } from '../../lib/stickyCard';

/**
 * Short-period ("Russian") table, laid out after the printed school charts:
 * one continuous ruled grid, each group split into a main (A) and secondary
 * (B) subgroup, periods and rows numbered down the left, and the higher oxide
 * and volatile hydride formulae underneath.
 */

// Every element column is exactly one cell wide, so the grid is continuous and
// no ragged gaps can appear. Subgroups are shown by mirroring the cell's
// contents (see ShortFormCell), not by narrowing the box.
const LABEL_COL_UNITS = 0.62;
const GRID_UNITS = 11; // 7 main groups + 3 triads + the noble gases
const TOTAL_UNITS = GRID_UNITS + 2 * LABEL_COL_UNITS;
const CELL_ASPECT = 0.62; // short-form cells are wide and flat, as in print
const SERIES_LENGTH = 15; // 57-71 and 89-103
const TRIAD_COLUMN = 7; // first of the three group VIII triad columns, where the element card sits

const GRID_SYMBOLS = SHORT_TABLE.map(row =>
  row.cells.map(cell => (cell.kind === 'element' ? cell.element.symbol : undefined)),
);

const useShortFormSizes = () => {
  const sizes = useSizes();
  const cellWidth = sizes.WIDTH / (TOTAL_UNITS + 1.1); // leaves the side padding
  return {
    cellWidth,
    cellHeight: cellWidth * CELL_ASPECT,
    labelColWidth: cellWidth * LABEL_COL_UNITS,
    // the 15 series cells span the same width as the grid, so the strips line
    // up with the table instead of overflowing it
    seriesCellWidth: (cellWidth * GRID_UNITS) / SERIES_LENGTH,
  };
};

const Formula = ({ segments, style }: { segments: FormulaSegment[]; style: any }) => (
  <Text style={style}>
    {segments.map((segment, index) =>
      segment.sub ? (
        <Text key={index} style={{ fontSize: (style?.fontSize ?? 12) * 0.7 }}>
          {segment.text}
        </Text>
      ) : (
        <Text key={index}>{segment.text}</Text>
      ),
    )}
  </Text>
);

const ShortFormTable = ({
  focused,
  setFocused,
  isElementFocused,
  elementPressed,
  settings,
  dictionary,
  highlightedElement,
  stickyOffset,
}: {
  focused: string;
  setFocused: (value: string) => void;
  isElementFocused: boolean;
  elementPressed: (element: Element) => void;
  settings: any;
  dictionary: Dictionary;
  highlightedElement?: Element;
  // page scroll offset, so the card stays on screen while the lower rows are focused
  stickyOffset: Animated.AnimatedInterpolation<number>;
}) => {
  const { styles, colors, dims } = useStyles();

  // the card covers the triad columns; when the focused cell is one of them,
  // it waits below that row instead of hiding it
  const focusedCell = findCell(GRID_SYMBOLS, focused);
  const cardOffset =
    focusedCell && overlaps(focusedCell.col, focusedCell.col + 1, TRIAD_COLUMN, TRIAD_COLUMN + 3)
      ? stickyOffset.interpolate(
          stickyCardRanges(
            focusedCell.row * dims.cellHeight,
            (focusedCell.row + 1) * dims.cellHeight,
            dims.cellHeight * 3,
          ),
        )
      : stickyOffset;

  const cellProps = {
    dictionary,
    elementPressed,
    focused,
    isElementFocused,
    settings,
    setFocused,
  };

  // both series are f-block, so they carry the f colour
  const seriesColor = (_id: ShortSeriesId) => BLOCK_COLORS.f;

  const renderCell = (cell: ShortCell, columnIndex: number) => {
    if (cell.kind === 'element') {
      return (
        <ShortFormCell
          {...cellProps}
          key={columnIndex}
          el={cell.element}
          subgroup={cell.subgroup}
          width={dims.cellWidth}
          height={dims.cellHeight}
        />
      );
    }

    return (
      <View key={columnIndex} style={{ ...styles.gridCell, width: dims.cellWidth, height: dims.cellHeight }}>
        {cell.kind === 'series' && (
          <TouchableWithoutFeedback onFocus={() => setFocused(cell.id)} onPress={() => {}}>
            <View
              style={{
                ...styles.seriesCell,
                width: dims.cellWidth,
                height: dims.cellHeight,
                backgroundColor:
                  isElementFocused && focused !== cell.id ? tint(seriesColor(cell.id), 0.45) : seriesColor(cell.id),
              }}>
              <Text style={{ ...styles.seriesLabel, color: colors.TEXT }}>{cell.label}</Text>
              {focused === cell.id && <FocusRing width={dims.cellWidth} />}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  };

  const renderSeriesStrip = (id: ShortSeriesId, series: Element[]) => (
    <View style={styles.row}>
      <View style={{ ...styles.sideLabelBox, width: dims.labelColWidth * 2 }}>
        <Text style={styles.sideLabel} numberOfLines={2}>
          {dictionary.elementCategories[id === 'lanthanides' ? 'LANTHANIDES' : 'ACTINIDES']}
        </Text>
      </View>
      {series.map(element => (
        <ShortFormCell
          {...cellProps}
          key={element.symbol}
          el={element}
          width={dims.seriesCellWidth}
          height={dims.cellHeight}
        />
      ))}
    </View>
  );

  const renderFormulaRow = (title: string, formulas: (FormulaSegment[] | null)[], key: string) => (
    <View style={styles.row} key={key}>
      <View style={{ ...styles.sideLabelBox, width: dims.labelColWidth * 2 }}>
        <Text style={styles.sideLabel} numberOfLines={3}>
          {title}
        </Text>
      </View>
      {formulas.map((formula, groupIndex) => (
        <View
          key={groupIndex}
          style={{
            ...styles.formulaCell,
            // group VIII spans its three triads and the noble gas column
            width: groupIndex === 7 ? dims.cellWidth * 4 : dims.cellWidth,
            height: dims.cellHeight * 0.62,
          }}>
          {formula && <Formula segments={formula} style={styles.formula} />}
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.table}>
      {/* "Groups of elements", spanning the element columns */}
      <View style={styles.row}>
        <View style={{ width: dims.labelColWidth * 2 }} />
        <View style={{ ...styles.headerBand, width: dims.cellWidth * GRID_UNITS }}>
          <Text style={styles.headerBandText}>{dictionary.titles.groupsOfElements}</Text>
        </View>
      </View>

      {/* Group numbers, each main group split into its A and B subgroups */}
      <View style={styles.headerRow}>
        <View style={{ ...styles.cornerLabel, width: dims.labelColWidth }}>
          <Text style={styles.axisTitle} numberOfLines={2}>
            {dictionary.titles.periods}
          </Text>
        </View>
        <View style={{ ...styles.cornerLabel, width: dims.labelColWidth }}>
          <Text style={styles.axisTitle} numberOfLines={2}>
            {dictionary.titles.rows}
          </Text>
        </View>

        {/* groups I-VII: main subgroup left, secondary right */}
        {SHORT_COLUMNS.filter(column => column.slot === 'main').map((column, index) => (
          <View key={index} style={{ ...styles.groupHeader, width: dims.cellWidth }}>
            <Text style={styles.subgroupLabel}>{dictionary.titles.subgroupMain}</Text>
            <Text style={styles.groupNumber}>{column.roman}</Text>
            <Text style={styles.subgroupLabel}>{dictionary.titles.subgroupSecondary}</Text>
          </View>
        ))}
        {/* group VIII: one block over the three triads (the secondary
            subgroup), then the noble gases as the main subgroup */}
        <View style={{ ...styles.groupHeader, width: dims.cellWidth * 3 }}>
          <Text style={styles.subgroupLabel}>{dictionary.titles.subgroupSecondary}</Text>
          <Text style={styles.groupNumber}>VIII</Text>
          <View />
        </View>
        <View style={{ ...styles.groupHeaderNarrow, width: dims.cellWidth }}>
          <Text style={styles.subgroupLabel}>{dictionary.titles.subgroupMain}</Text>
        </View>
      </View>

      {/* The grid. The periods column is a sibling of the rows, not a cell
          inside the first row of each period, so a two-row period label can
          never stretch the row it sits in. */}
      <View style={styles.row}>
        <View style={{ width: dims.labelColWidth }}>
          {PERIOD_SPANS.map(({ period, span }) => (
            <View key={period} style={{ ...styles.periodLabel, height: dims.cellHeight * span }}>
              <Text style={styles.axisValue}>{ROMAN_PERIODS[period]}</Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {SHORT_TABLE.map(row => (
            <View key={row.rowNo} style={styles.row}>
              <View style={{ ...styles.rowLabel, width: dims.labelColWidth, height: dims.cellHeight }}>
                <Text style={styles.axisValue}>{row.rowNo}</Text>
              </View>
              {row.cells.map(renderCell)}
            </View>
          ))}
        </View>

        {/* Periods 1-3 leave the three group VIII triad columns empty; the
            zoomed element card lives in that block, as it does in the
            international table's empty upper region. */}
        {highlightedElement && (
          <Animated.View style={{ ...styles.highlight, transform: [{ translateY: cardOffset }] }} pointerEvents="none">
            <HighLightedElement dictionary={dictionary} element={highlightedElement} inline />
          </Animated.View>
        )}
      </View>

      {/* Higher oxides and volatile hydrogen compounds */}
      {renderFormulaRow(dictionary.titles.higherOxides, HIGHER_OXIDES, 'oxides')}
      {renderFormulaRow(dictionary.titles.volatileHydrogenCompounds, VOLATILE_HYDRIDES, 'hydrides')}

      {/* Full series, below the table */}
      <View style={styles.seriesBlock}>
        {renderSeriesStrip('lanthanides', LANTHANIDE_SERIES)}
        {renderSeriesStrip('actinides', ACTINIDE_SERIES)}
      </View>

      {/* Block legend, as on the printed charts */}
      <View style={styles.legend}>
        {BLOCK_OPTIONS.map(block => (
          <View key={block} style={styles.legendItem}>
            <View style={{ ...styles.legendSwatch, backgroundColor: BLOCK_COLORS[block] }} />
            <Text style={styles.legendText}>{dictionary.titles[BLOCK_LABEL_KEYS[block]]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const BLOCK_LABEL_KEYS = {
  s: 'sElements',
  p: 'pElements',
  d: 'dElements',
  f: 'fElements',
} as const;

/** Periods are numbered in Roman numerals, rows in Arabic, as in the charts. */
const ROMAN_PERIODS: Record<number, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
};

const PERIOD_SPANS: { period: number; span: 1 | 2 }[] = [
  { period: 1, span: 1 },
  { period: 2, span: 1 },
  { period: 3, span: 1 },
  { period: 4, span: 2 },
  { period: 5, span: 2 },
  { period: 6, span: 2 },
  { period: 7, span: 2 },
];

export default ShortFormTable;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const dims = useShortFormSizes();

  const rule = { borderWidth: StyleSheet.hairlineWidth, borderColor: colors.GRAY_2 };

  const styles = StyleSheet.create({
    table: {
      paddingHorizontal: sizes.ELEMENT_SIZE * 0.4,
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    headerBand: {
      ...rule,
      backgroundColor: colors.PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
    },
    headerBandText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_3x,
    },
    groupHeader: {
      ...rule,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.PRIMARY,
      paddingHorizontal: 3,
      paddingVertical: 1,
    },
    groupHeaderNarrow: {
      ...rule,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.PRIMARY,
      paddingVertical: 1,
    },
    groupNumber: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_3x,
    },
    subgroupLabel: {
      ...globalStyles.TEXT_STYLE,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_1x,
    },
    cornerLabel: {
      ...rule,
      backgroundColor: colors.PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      paddingVertical: 2,
    },
    periodLabel: {
      ...rule,
      backgroundColor: colors.PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowLabel: {
      ...rule,
      backgroundColor: colors.PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridCell: {
      ...rule,
      backgroundColor: colors.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    axisTitle: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_1x,
      textAlign: 'center',
    },
    axisValue: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_3x,
      textAlign: 'center',
    },
    seriesCell: {
      ...rule,
      alignItems: 'center',
      justifyContent: 'center',
    },
    seriesLabel: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_2x,
    },
    seriesBlock: {
      marginTop: sizes.PADDING,
    },
    legend: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: sizes.MAIN_PADDING,
      gap: sizes.MAIN_PADDING * 2,
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: sizes.PADDING,
    },
    legendSwatch: {
      width: dims.cellHeight * 0.32,
      height: dims.cellHeight * 0.32,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.GRAY_2,
    },
    legendText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_3x,
    },
    sideLabelBox: {
      ...rule,
      backgroundColor: colors.PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      paddingHorizontal: 2,
    },
    sideLabel: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_1x,
      textAlign: 'center',
    },
    formulaCell: {
      ...rule,
      backgroundColor: colors.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    formula: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.TEXT,
      fontSize: sizes.FONTSIZE_3x,
    },
    highlight: {
      position: 'absolute',
      // exactly over the three triad columns, clear of the noble gas column
      left: dims.labelColWidth * 2 + dims.cellWidth * TRIAD_COLUMN,
      top: 0,
      height: dims.cellHeight * 3,
      width: dims.cellWidth * 3,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      elevation: 10,
    },
  });

  return { styles, colors, sizes, globalStyles, dims };
};
