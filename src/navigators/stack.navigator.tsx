import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatusBarComponent from '../components/global/StatusBarComponent';
import { useColors } from '../constants/color';
import screens from '../constants/screens';

//Screens
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import ElementPage from '../screens/Element';
import ListPage from '../screens/List';
import Compare from '../screens/Compare';
import Tables from '../screens/Tables';
import Tables_2 from '../screens/Tables_2';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  const colors = useColors();
  return (
    <>
      <StatusBarComponent isDark={colors.isDark} backgroundColor={colors.BACKGROUND} />
      <Stack.Navigator
        initialRouteName={screens.HOME}
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name={screens.HOME} component={Home} />
        <Stack.Screen name={screens.SETTINGS} component={Settings} />
        <Stack.Screen name={screens.ELEMENT} component={ElementPage} />
        <Stack.Screen name={screens.LIST} component={ListPage} />
        <Stack.Screen name={screens.COMPARE} component={Compare} />
        <Stack.Screen name={screens.REACTIVITY_SERIES} component={Tables} />
        <Stack.Screen name={screens.SOLUBILITY_CHART} component={Tables_2} />
      </Stack.Navigator>
    </>
  );
};
