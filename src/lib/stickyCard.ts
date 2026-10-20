/**
 * The zoomed element card is pinned to the screen by moving it down by the page
 * scroll offset. When the focused cell would end up underneath it, the card is
 * parked just below that cell's row instead, until scrolling clears the row.
 *
 * All values are in the table's own units, with the card's top at 0 when the
 * page is not scrolled. Returns Animated interpolation ranges that map the
 * scroll offset to the card's offset (extrapolated 1:1 on both sides).
 */
export const stickyCardRanges = (rowTop: number, rowBottom: number, cardHeight: number, gap = 4) => {
  const covering = rowTop - cardHeight; // from here on the pinned card covers the row
  const parked = rowBottom + gap; // card top while parked under the row

  return {
    inputRange: [covering - 1, covering, covering + 0.01, parked, parked + 1],
    outputRange: [covering - 1, covering, parked, parked, parked + 1],
  };
};

/** Do the ranges [aStart, aEnd) and [bStart, bEnd) overlap? */
export const overlaps = (aStart: number, aEnd: number, bStart: number, bEnd: number) => aStart < bEnd && bStart < aEnd;

/** Row and column of `symbol` in a grid of cell symbols, if it is there. */
export const findCell = (grid: (string | undefined)[][], symbol: string) => {
  for (let row = 0; row < grid.length; row++) {
    const col = grid[row].indexOf(symbol);
    if (col !== -1) return { row, col };
  }
  return undefined;
};
