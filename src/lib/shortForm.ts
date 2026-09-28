import { ELEMENT_DATA, ELEMENT_DATA2, ELEMENT_DATA3 } from './constants';
import type { Element, ElementBlock, ShortCell, ShortColumn, ShortRow, ShortSubgroup } from '../types';

/**
 * Short-period ("Russian" / Soviet) form of the periodic table.
 *
 * 8 Roman groups, each split into a main (A) and secondary (B) subgroup.
 * Periods I-III take one row, periods IV-VII take two rows each => 11 rows.
 * Group VIII is four columns wide: three triads (Fe-Co-Ni, Ru-Rh-Pd, Os-Ir-Pt)
 * plus the noble gases.
 */

// 11 element columns. Groups I-VII are one column each; group VIII is four.
export const SHORT_COLUMNS: ShortColumn[] = [
  { group: 1, roman: 'I', slot: 'main' },
  { group: 2, roman: 'II', slot: 'main' },
  { group: 3, roman: 'III', slot: 'main' },
  { group: 4, roman: 'IV', slot: 'main' },
  { group: 5, roman: 'V', slot: 'main' },
  { group: 6, roman: 'VI', slot: 'main' },
  { group: 7, roman: 'VII', slot: 'main' },
  { group: 8, roman: 'VIII', slot: 'triad0' },
  { group: 8, roman: 'VIII', slot: 'triad1' },
  { group: 8, roman: 'VIII', slot: 'triad2' },
  { group: 8, roman: 'VIII', slot: 'noble' },
];

export const SHORT_COLUMN_COUNT = SHORT_COLUMNS.length;

// IUPAC group (1-18) -> column index. Main (A) and secondary (B) subgroups
// share a column for groups I-VII.
const COLUMN_BY_IUPAC_GROUP: Record<number, number> = {
  1: 0,
  11: 0,
  2: 1,
  12: 1,
  3: 2,
  13: 2,
  4: 3,
  14: 3,
  5: 4,
  15: 4,
  6: 5,
  16: 5,
  7: 6,
  17: 6,
  8: 7,
  9: 8,
  10: 9,
  18: 10,
};

// First (0-based) row of each period.
const PERIOD_ROW_START: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 5, 6: 7, 7: 9 };

export const SHORT_ROW_COUNT = 11;

// The series live in group III of the first row of periods VI and VII, and are
// drawn in full as separate strips below the table.
const SERIES_COLUMN = 2;
const LANTHANIDE_ROW = PERIOD_ROW_START[6];
const ACTINIDE_ROW = PERIOD_ROW_START[7];

export const LANTHANIDE_LABEL = '57-71';
export const ACTINIDE_LABEL = '89-103';

// La and Ac are stored in ELEMENT_DATA at group 3 (not in the series arrays),
// but in the short form their cells are taken by the series placeholders and
// they belong to the strips below instead. Exclude them by symbol: `block` is
// unreliable here (La is stored as 's', Ac as 'f').
const SERIES_HEAD_SYMBOLS = ['La', 'Ac'];

/**
 * Electron block of an element, used to colour the short-form table the way the
 * printed charts do (s / p / d / f).
 *
 * Derived from the atomic number and group rather than read from the data's
 * `block` field, which is wrong for La (stored as 's') and Ac (stored as 'f').
 */
export const blockOf = (element: {
  symbol: string;
  group: number | null;
  static: { generalProperties: { atomicNumber: number } };
}): ElementBlock => {
  const z = element.static.generalProperties.atomicNumber;
  // the lanthanide and actinide series
  if ((z >= 57 && z <= 71) || (z >= 89 && z <= 103)) {
    return 'f';
  }
  // helium is 1s2, so it sits with the s-block despite being a noble gas
  if (element.symbol === 'He') {
    return 's';
  }
  const group = element.group;
  if (group == null) {
    return 'f';
  }
  if (group <= 2) {
    return 's';
  }
  if (group >= 13) {
    return 'p';
  }
  return 'd';
};

/** Fill colours per block, taken from the reference chart. */
export const BLOCK_COLORS: Record<ElementBlock, string> = {
  s: '#F4A7A3',
  p: '#F7EE9B',
  d: '#A9D4EE',
  f: '#C3E3A5',
};

export const BLOCK_OPTIONS: ElementBlock[] = ['s', 'p', 'd', 'f'];

/** Main (A) for groups 1, 2 and 13-18; secondary (B) for the d-block, 3-12. */
export const subgroupOf = (iupacGroup: number): ShortSubgroup => (iupacGroup >= 3 && iupacGroup <= 12 ? 'B' : 'A');

/**
 * Row of a period a given element falls on. Small periods have one row; in a
 * large period the s-block and groups 3-10 take the first row, groups 11-12
 * and the p-block the second.
 */
const rowIndexOf = (element: { group: number; period: number }): number =>
  PERIOD_ROW_START[element.period] + (element.period <= 3 ? 0 : element.group >= 11 ? 1 : 0);

const periodOfRow = (rowIndex: number): number => {
  if (rowIndex <= 2) {
    return rowIndex + 1;
  }
  return 4 + Math.floor((rowIndex - 3) / 2);
};

const buildShortTable = (): ShortRow[] => {
  const rows: ShortRow[] = [];

  for (let rowIndex = 0; rowIndex < SHORT_ROW_COUNT; rowIndex++) {
    const period = periodOfRow(rowIndex);
    rows.push({
      rowNo: rowIndex + 1,
      period,
      isFirstRowOfPeriod: PERIOD_ROW_START[period] === rowIndex,
      periodRowSpan: period <= 3 ? 1 : 2,
      cells: Array.from({ length: SHORT_COLUMN_COUNT }, (): ShortCell => ({ kind: 'empty' })),
    });
  }

  ELEMENT_DATA.forEach(element => {
    if (element.group == null || SERIES_HEAD_SYMBOLS.includes(element.symbol)) {
      return;
    }
    const rowIndex = rowIndexOf(element);
    const columnIndex = COLUMN_BY_IUPAC_GROUP[element.group];
    rows[rowIndex].cells[columnIndex] = {
      kind: 'element',
      element: element as unknown as Element,
      subgroup: subgroupOf(element.group),
    };
  });

  rows[LANTHANIDE_ROW].cells[SERIES_COLUMN] = {
    kind: 'series',
    id: 'lanthanides',
    label: LANTHANIDE_LABEL,
  };
  rows[ACTINIDE_ROW].cells[SERIES_COLUMN] = {
    kind: 'series',
    id: 'actinides',
    label: ACTINIDE_LABEL,
  };

  return rows;
};

export const SHORT_TABLE = buildShortTable();

const bySymbol = (symbol: string): Element => ELEMENT_DATA.find(e => e.symbol === symbol) as unknown as Element;

/** Full 57-71 and 89-103 series, including La and Ac, so they match the labels. */
export const LANTHANIDE_SERIES: Element[] = [bySymbol('La'), ...(ELEMENT_DATA2 as unknown as Element[])];
export const ACTINIDE_SERIES: Element[] = [bySymbol('Ac'), ...(ELEMENT_DATA3 as unknown as Element[])];

/**
 * Formula segments; `sub` marks a subscript, rendered as a smaller nested Text
 * (the convention already used for exponents on the element screen).
 */
export type FormulaSegment = { text: string; sub?: boolean };

const f = (...segments: (string | [string])[]): FormulaSegment[] =>
  segments.map(s => (Array.isArray(s) ? { text: s[0], sub: true } : { text: s }));

/** Higher oxides, groups I-VIII. */
export const HIGHER_OXIDES: (FormulaSegment[] | null)[] = [
  f('R', ['2'], 'O'), // I    R2O
  f('R', 'O'), // II   RO
  f('R', ['2'], 'O', ['3']), // III  R2O3
  f('R', 'O', ['2']), // IV   RO2
  f('R', ['2'], 'O', ['5']), // V    R2O5
  f('R', 'O', ['3']), // VI   RO3
  f('R', ['2'], 'O', ['7']), // VII  R2O7
  f('R', 'O', ['4']), // VIII RO4
];

/**
 * Volatile hydrogen compounds. Only groups IV-VII form them; the hydrides of
 * groups I-III are salt-like, not volatile. Note the textbook notation puts
 * hydrogen first for groups VI and VII.
 */
export const VOLATILE_HYDRIDES: (FormulaSegment[] | null)[] = [
  null, // I
  null, // II
  null, // III
  f('R', 'H', ['4']), // IV   RH4
  f('R', 'H', ['3']), // V    RH3
  f('H', ['2'], 'R'), // VI   H2R
  f('H', 'R'), // VII  HR
  null, // VIII
];

if (__DEV__) {
  const placed = SHORT_TABLE.reduce(
    (total, row) => total + row.cells.filter(cell => cell.kind === 'element').length,
    0,
  );
  const expected = ELEMENT_DATA.filter(e => e.group != null && !SERIES_HEAD_SYMBOLS.includes(e.symbol)).length;
  if (placed !== expected) {
    console.warn(`[shortForm] placed ${placed} elements, expected ${expected}`);
  }
  const seriesTotal = LANTHANIDE_SERIES.length + ACTINIDE_SERIES.length;
  if (seriesTotal !== 30) {
    console.warn(`[shortForm] series hold ${seriesTotal} elements, expected 30`);
  }
}
