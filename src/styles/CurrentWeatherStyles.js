import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/styles';

export const currentWeatherStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: SIZES.md,
    padding: SIZES.lg,
    marginVertical: SIZES.md,
    ...SHADOWS.medium,
  },
  title: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.md,
  },
  weatherInfo: {
    alignItems: 'center',
  },
  temperature: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.md,
  },
  details: {
    width: '100%',
  },
  detail: {
    fontSize: SIZES.md,
    color: COLORS.textLight,
    marginVertical: SIZES.xs,
  },
}); 