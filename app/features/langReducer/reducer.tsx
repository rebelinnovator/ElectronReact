import { createSlice } from '@reduxjs/toolkit';

import { useStore , useDispatch} from 'react-redux';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';

import readAsset from '../../constants/readAsset';

const langSlice = createSlice({
  name: 'lang',
  initialState: { value: 0 , langVal: {} , lang : "eng" },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setLang: (state, lang)=>{
      state.lang = lang.payload;
    },
    setLangVal: (state, langVal)=>{
      state.langVal = langVal.payload;
    }
  },
});

export const { increment, decrement , setLang , setLangVal } = langSlice.actions;

export const getLangAsync = (): AppThunk => (dispatch) => {
  readAsset('./assets/json/lang.json',(result) => {
    dispatch(setLangVal(JSON.parse(result)));
  });
};

export default langSlice.reducer;

export const getLangVal = (state: RootState) => state.lang.langVal ;
export const getLang = (state : RootState) => state.lang.lang ;

