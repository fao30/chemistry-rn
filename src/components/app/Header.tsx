import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { StyleSheet, View, Text, Image, ImageStyle, TouchableWithoutFeedback } from 'react-native';
import { getGlobalStyles } from '../../constants/globalStyles';
import { NavigationAction, NavigationProp, NavigationState, useNavigation, useRoute } from '@react-navigation/native';
import screens from '../../constants/screens';
import icons from '../../assets/icons';
import useLocales from '../../lib/locales/useLocales';
import { StopPlayingAudio } from '../../utils/AudioHandler';
import images from '../../assets/images';

const Header = ({ focused, setFocused }: { focused: string; setFocused: any }) => {
  const { styles, colors } = useStyles();

  const route = useRoute();
  const navigation = useNavigation();
  const dictionary = useLocales();

  const navigate = (screen: string) => {
    if (screen != screens.ELEMENT) {
      StopPlayingAudio();
    }

    if (route.name !== screen) {
      if (route.name === screens.ELEMENT) {
        navigation?.goBack();
      }
      // @ts-ignore
      navigation?.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigate(screens.HOME)}
        onFocus={() => {
          setFocused('home');
        }}>
        <View
          style={[
            styles.headerIconContainer,
            {
              backgroundColor: 'white',
            },
          ]}>
          <Image
            source={icons.HOME}
            style={[
              styles.icon,
              { tintColor: colors.PRIMARY, marginRight: 10 },
              focused === 'home' ? { tintColor: colors.BLACK } : {},
            ]}
          />
          <Image
            source={images.LOGO}
            style={[
              styles.icon,
              {
                tintColor: undefined,
                transform: [
                  {
                    scale: 1.3,
                  },
                ],
              },
            ]}
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.container2}>
        <HeaderIcon
          text={dictionary.titles.reactivitySeries}
          iconName="REACTIVITY_SERIES"
          Icon={icons.TABLE2}
          focused={focused}
          setFocused={setFocused}
          onPress={() => navigate(screens.REACTIVITY_SERIES)}
        />
        <HeaderIcon
          text={dictionary.titles.solubilityChart}
          iconName="SOLUBILITY_CHART"
          Icon={icons.TABLE}
          focused={focused}
          setFocused={setFocused}
          onPress={() => navigate(screens.SOLUBILITY_CHART)}
        />
        <HeaderIcon
          text={dictionary.navbar.list}
          iconName="list"
          Icon={icons.LIST}
          focused={focused}
          setFocused={setFocused}
          onPress={() => navigate(screens.LIST)}
        />
        <HeaderIcon
          text={dictionary.navbar.compare}
          iconName="code-compare"
          Icon={icons.COMPARE}
          focused={focused}
          setFocused={setFocused}
          onPress={() => navigate(screens.COMPARE)}
        />
        <HeaderIcon
          text=""
          iconName="settings"
          Icon={icons.SETTINGS}
          style={{ marginEnd: 0 }}
          focused={focused}
          setFocused={setFocused}
          onPress={() => navigate(screens.SETTINGS)}
        />
      </View>
    </View>
  );
};

const HeaderIcon = ({
  text,
  Icon,
  iconName,
  style = {},
  onPress = () => {},
  focused,
  setFocused,
}: {
  text: string;
  Icon: any;
  iconName: string;
  style?: ImageStyle;
  onPress?: () => void;
  focused: string;
  setFocused: any;
}) => {
  const { styles } = useStyles();

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onFocus={() => {
        setFocused(iconName);
      }}>
      <View
        style={[styles.headerIconContainer, focused === iconName ? { backgroundColor: 'rgba(255,255,255,0.2)' } : {}]}>
        <Image source={Icon} style={[styles.icon, style]} />
        {text && <Text style={styles.iconText}>{text}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.PRIMARY,
      padding: sizes.PADDING,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginStart: sizes.PADDING * 3,
      padding: 5,
      borderRadius: sizes.BORDER_RADIUS,
    },
    icon: {
      tintColor: colors.NAV_BAR_TEXT,
      height: sizes.ICON,
      width: sizes.ICON,
      marginEnd: sizes.PADDING,
    },
    iconText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.NAV_BAR_TEXT,
    },
  });

  return {
    styles,
    colors,
    sizes,
  };
};
