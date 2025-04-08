import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/styles';

export const hourlyForecastStyles = StyleSheet.create({
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
  scrollContent: {
    paddingRight: SIZES.md,
  },
  hourCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: SIZES.sm,
    padding: SIZES.md,
    marginRight: SIZES.md,
    alignItems: 'center',
    minWidth: 80,
    ...SHADOWS.small,
  },
  hour: {
    fontSize: SIZES.md,
    color: COLORS.textLight,
    marginBottom: SIZES.xs,
  },
  temperature: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.xs,
  },
  detail: {
    fontSize: SIZES.sm,
    color: COLORS.textLight,
  },
}); 