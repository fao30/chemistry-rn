import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useColors } from '../../constants/color';

const GradientBackground = ({ children }: any) => {
  const colors = useColors();
  return (
    <LinearGradient colors={colors.BACKGROUND_GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
