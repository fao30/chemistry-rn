import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PRIMARY_COLOR } from '../../constants/color';
import { defaultLang } from '../../lib/constants';
import type { TableView } from '../../types';

// init states
const initState = {
  settings: {
    langID: defaultLang,
    showElementName: true,
    showElementAtomicWeight: true,
    tabWidth: 1,
    tableView: 'international' as TableView,
    playSound: false,
    primaryColor: DEFAULT_PRIMARY_COLOR,
  },
};

export type Settings = typeof initState.settings;

// reducer
const settings = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    setLangID(state, action) {
      state.settings.langID = action.payload;
    },
    setShowElementName(state, action) {
      state.settings.showElementName = action.payload;
    },
    setShowElementAtomicWeight(state, action) {
      state.settings.showElementAtomicWeight = action.payload;
    },
    setTabWidth(state, action) {
      state.settings.tabWidth = action.payload;
    },
    setTableView(state, action) {
      state.settings.tableView = action.payload;
    },
    setPlaySound(state, action) {
      state.settings.playSound = action.payload;
    },
    setPrimaryColor(state, action) {
      state.settings.primaryColor = action.payload;
    },
  },
});

export const {
  setLangID,
  setShowElementName,
  setShowElementAtomicWeight,
  setPlaySound,
  setPrimaryColor,
  setTabWidth,
  setTableView,
} = settings.actions;
export default settings.reducer;
export const selectSettings = (state: any): Settings => state.settings.settings;

/**
 * redux-persist merges one level deep, so state persisted before `tableView`
 * existed rehydrates without it. Fall back to the international view.
 */
export const selectTableView = (state: any): TableView =>
  selectSettings(state).tableView ?? 'international';
