import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/styles';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.xl,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: SIZES.md,
    paddingBottom: SIZES.xl,
  },
  errorText: {
    color: COLORS.card,
    textAlign: 'center',
  },
  loadingText: {
    color: COLORS.card,
    marginTop: SIZES.md,
  },
}); 