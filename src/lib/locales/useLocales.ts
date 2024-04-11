import { useSelector } from 'react-redux';
import { selectSettings } from '../../store/reducer/settings';
import { getRussianDictionary } from './ru';
import { getEnglishDictionary } from './en';

const useLocales = () => {
  const langId = useSelector(selectSettings).langID;
  return langId === 'ru' ? getRussianDictionary() : getEnglishDictionary();
};

export default useLocales;
