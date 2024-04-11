import type { Lang } from '../types';

import { ELEMENT_DATA, ELEMENT_DATA2, ELEMENT_DATA3, ELEMENT_DATA_COMPLETE } from './constants';

const getElement = () => {
  const sortedElements = [...ELEMENT_DATA].sort((a, b) => {
    if (a.period === b.period) return a.group - b.group;
    return a.period - b.period;
  });

  const numRows = Math.max(...sortedElements.map(e => e.period));
  const numCols = Math.max(...sortedElements.map(e => e.group));

  const tableRows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const element = sortedElements.find(e => e.period === i + 1 && e.group === j + 1);
      row.push(element ?? null);
    }
    tableRows.push(row);
  }

  return tableRows;
};

export const ELEMENT_DATA1 = getElement();

const toElementsHashMap = () => {
  const elementsHashMap = new Map();
  ELEMENT_DATA_COMPLETE.forEach(element => {
    elementsHashMap.set(element.symbol, element);
  });

  return elementsHashMap;
};

export const ELEMENTS_HASH_MAP = toElementsHashMap();

export const isElement = (symbol: string | undefined) => {
  if (!symbol) return false;
  return ELEMENTS_HASH_MAP.has(symbol);
};

export const getElementBySymbol = (symbol: string) => {
  return ELEMENTS_HASH_MAP.get(symbol);
};

export const formatDate = ({ date, lang, style }: { date: Date; lang: Lang; style: 'short' | 'long' }): string =>
  date.toLocaleDateString(lang, {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'numeric',
    day: 'numeric',
  });

export function kelvinToCelsius(K: number, lang: Lang) {
  return Math.round(K - 273.15).toLocaleString(lang);
}

export function kelvinToFahrenheit(K: number, lang: Lang) {
  return Math.round(((K - 273.15) * 9) / 5 + 32).toLocaleString(lang);
}
