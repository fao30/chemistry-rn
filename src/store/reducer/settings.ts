import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PRIMARY_COLOR } from '../../constants/color';
import { defaultLang } from '../../lib/constants';

// init states
const initState = {
  settings: {
    langID: defaultLang,
    showElementName: true,
    showElementAtomicWeight: true,
    tabWidth: 1,
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
    setPlaySound(state, action) {
      state.settings.playSound = action.payload;
    },
    setPrimaryColor(state, action) {
      state.settings.primaryColor = action.payload;
    },
  },
});

export const { setLangID, setShowElementName, setShowElementAtomicWeight, setPlaySound, setPrimaryColor, setTabWidth } =
  settings.actions;
export default settings.reducer;
export const selectSettings = (state: any): Settings => state.settings.settings;
