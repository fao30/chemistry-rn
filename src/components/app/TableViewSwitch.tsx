import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import { Dictionary, TableView } from '../../types';

export const TABLE_VIEW_FOCUS_IDS: Record<TableView, string> = {
  international: 'tableView:international',
  short: 'tableView:short',
};

const TableViewSwitch = ({
  focused,
  setFocused,
  selected,
  setSelected,
  settings,
  dictionary,
}: {
  focused: string;
  setFocused: (value: string) => void;
  selected: TableView;
  setSelected: (value: TableView) => void;
  settings: any;
  dictionary: Dictionary;
}) => {
  const { styles, colors } = useStyles();

  const options: { value: TableView; label: string }[] = [
    { value: 'international', label: dictionary.titles.tableViewInternational },
    { value: 'short', label: dictionary.titles.tableViewShort },
  ];

  return (
    <View style={styles.container}>
      {options.map(option => {
        const focusId = TABLE_VIEW_FOCUS_IDS[option.value];
        const isSelected = selected === option.value;
        return (
          <TouchableWithoutFeedback
            key={option.value}
            onFocus={() => setFocused(focusId)}
            onPress={() => setSelected(option.value)}>
            <View
              style={{
                ...styles.pill,
                backgroundColor: isSelected ? settings?.primaryColor : 'rgba(255,255,255,0.15)',
                borderColor: focused === focusId ? colors.WHITE : 'transparent',
              }}>
              <Text style={styles.label}>{option.label}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default TableViewSwitch;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: sizes.MAIN_PADDING,
      marginHorizontal: sizes.ELEMENT_SIZE,
      marginBottom: sizes.MAIN_PADDING,
    },
    pill: {
      paddingHorizontal: sizes.MAIN_PADDING * 1.5,
      paddingVertical: sizes.PADDING,
      borderRadius: sizes.BORDER_RADIUS,
      borderWidth: 2,
    },
    label: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
      fontSize: sizes.FONTSIZE_4x,
    },
  });

  return { styles, colors, sizes, globalStyles };
};
