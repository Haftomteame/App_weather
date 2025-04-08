import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/styles';
import { backgroundStyles } from '../styles/BackgroundStyles';

const Background = ({ children }) => {
  return (
    <View style={backgroundStyles.container}>
      <LinearGradient
        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
        style={backgroundStyles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={backgroundStyles.content}>
        {children}
      </View>
    </View>
  );
};

export default Background; 