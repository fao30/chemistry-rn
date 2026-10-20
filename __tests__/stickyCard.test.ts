/**
 * @format
 */

import { expect, it, describe } from '@jest/globals';
import { findCell, overlaps, stickyCardRanges } from '../src/lib/stickyCard';
import { SHORT_TABLE } from '../src/lib/shortForm';

// piecewise-linear lookup with 'extend' extrapolation, as Animated.interpolate does
const interpolate = ({ inputRange, outputRange }: ReturnType<typeof stickyCardRanges>, x: number) => {
  let i = 1;
  while (i < inputRange.length - 1 && x > inputRange[i]) i++;
  const [x0, x1, y0, y1] = [inputRange[i - 1], inputRange[i], outputRange[i - 1], outputRange[i]];
  return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
};

describe('stickyCardRanges', () => {
  // focused row spans 300..350, card is 150 tall, so it covers the row for scroll offsets in (150, 350)
  const ranges = stickyCardRanges(300, 350, 150, 4);
  const cardAt = (scroll: number) => interpolate(ranges, scroll);

  it('is valid for Animated.interpolate', () => {
    const { inputRange } = ranges;
    inputRange.slice(1).forEach((value, i) => expect(value).toBeGreaterThan(inputRange[i]));
  });

  it('follows the scroll while the row is clear of the card', () => {
    [-50, 0, 100, 150, 354, 500].forEach(scroll => expect(cardAt(scroll)).toBeCloseTo(scroll));
  });

  it('parks below the row instead of covering it', () => {
    [151, 200, 300, 349].forEach(scroll => {
      const top = cardAt(scroll);
      expect(top).toBe(354);
      expect(overlaps(top, top + 150, 300, 350)).toBe(false);
    });
  });

  it('never covers the row at any scroll offset', () => {
    for (let scroll = 0; scroll < 600; scroll += 0.5) {
      const top = cardAt(scroll);
      expect(overlaps(top, top + 150, 300, 350)).toBe(false);
    }
  });
});

describe('findCell', () => {
  const grid = SHORT_TABLE.map(row =>
    row.cells.map(cell => (cell.kind === 'element' ? cell.element.symbol : undefined)),
  );

  it('finds the short-form triads in columns 7-9, under the element card', () => {
    expect(findCell(grid, 'Fe')).toEqual({ row: 3, col: 7 });
    expect(findCell(grid, 'Ni')).toEqual({ row: 3, col: 9 });
    expect(findCell(grid, 'Ds')).toEqual({ row: 9, col: 9 });
  });

  it('returns undefined for anything not in the grid', () => {
    expect(findCell(grid, 'lanthanides')).toBeUndefined();
    expect(findCell(grid, 'none')).toBeUndefined();
  });
});
