import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/styles';

export const weatherBroadcastButtonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.md,
    padding: SIZES.md,
    margin: SIZES.md,
    ...SHADOWS.medium,
  },
  buttonText: {
    marginLeft: SIZES.sm,
    fontSize: SIZES.md,
    fontWeight: '600',
    color: COLORS.card,
  },
}); 