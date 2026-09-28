/**
 * @format
 */

import { expect, it, describe } from '@jest/globals';
import {
  ACTINIDE_SERIES,
  LANTHANIDE_SERIES,
  SHORT_COLUMN_COUNT,
  SHORT_ROW_COUNT,
  SHORT_TABLE,
  subgroupOf,
} from '../src/lib/shortForm';
import { ELEMENT_DATA } from '../src/lib/constants';

const symbolsOf = (rowNo: number) =>
  SHORT_TABLE[rowNo - 1].cells.map(cell =>
    cell.kind === 'element' ? cell.element.symbol : cell.kind === 'series' ? cell.label : null,
  ).filter(Boolean);

describe('short-form table', () => {
  it('has 11 rows of 11 columns', () => {
    expect(SHORT_TABLE).toHaveLength(SHORT_ROW_COUNT);
    SHORT_TABLE.forEach(row => expect(row.cells).toHaveLength(SHORT_COLUMN_COUNT));
  });

  it('splits period IV across two rows', () => {
    expect(symbolsOf(4)).toEqual(['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni']);
    expect(symbolsOf(5)).toEqual(['Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr']);
  });

  it('splits period VI across two rows, with the lanthanide placeholder in group III', () => {
    expect(symbolsOf(8)).toEqual(['Cs', 'Ba', '57-71', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt']);
    expect(symbolsOf(9)).toEqual(['Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn']);
  });

  it('puts the actinide placeholder in group III of period VII', () => {
    const cell = SHORT_TABLE[9].cells[2];
    expect(cell).toEqual({ kind: 'series', id: 'actinides', label: '89-103' });
  });

  it('puts H and He alone in period I', () => {
    expect(symbolsOf(1)).toEqual(['H', 'He']);
  });

  it('places every main-table element except La and Ac', () => {
    const placed = SHORT_TABLE.flatMap(row => row.cells).filter(cell => cell.kind === 'element');
    expect(placed).toHaveLength(ELEMENT_DATA.length - 2);
    expect(placed).toHaveLength(88);
  });

  it('places each element exactly once', () => {
    const symbols = SHORT_TABLE.flatMap(row =>
      row.cells.flatMap(cell => (cell.kind === 'element' ? [cell.element.symbol] : [])),
    );
    expect(new Set(symbols).size).toBe(symbols.length);
    expect(symbols).not.toContain('La');
    expect(symbols).not.toContain('Ac');
  });

  it('derives subgroups from the group number, not the block', () => {
    expect(subgroupOf(1)).toBe('A'); // Li
    expect(subgroupOf(17)).toBe('A'); // Cl
    expect(subgroupOf(3)).toBe('B'); // Sc — La is stored with block 's'
    expect(subgroupOf(11)).toBe('B'); // Cu
    expect(subgroupOf(18)).toBe('A'); // noble gases
  });

  it('builds full 57-71 and 89-103 series that match their labels', () => {
    expect(LANTHANIDE_SERIES).toHaveLength(15);
    expect(ACTINIDE_SERIES).toHaveLength(15);
    expect(LANTHANIDE_SERIES[0].symbol).toBe('La');
    expect(ACTINIDE_SERIES[0].symbol).toBe('Ac');
    expect(LANTHANIDE_SERIES[0].static.generalProperties.atomicNumber).toBe(57);
    expect(LANTHANIDE_SERIES[14].static.generalProperties.atomicNumber).toBe(71);
    expect(ACTINIDE_SERIES[0].static.generalProperties.atomicNumber).toBe(89);
    expect(ACTINIDE_SERIES[14].static.generalProperties.atomicNumber).toBe(103);
  });
});
