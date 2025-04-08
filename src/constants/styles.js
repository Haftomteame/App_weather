import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#4A90E2',
  secondary: '#F5A623',
  background: '#F8F9FA',
  card: '#FFFFFF',
  text: '#333333',
  textLight: '#666666',
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',
  border: '#E0E0E0',
  shadow: '#000000',
};

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 6,
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.md,
    padding: SIZES.md,
    margin: SIZES.sm,
    ...SHADOWS.medium,
  },
  title: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.md,
  },
  subtitle: {
    fontSize: SIZES.lg,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.sm,
  },
  text: {
    fontSize: SIZES.md,
    color: COLORS.text,
  },
  textLight: {
    fontSize: SIZES.md,
    color: COLORS.textLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.lg,
    color: COLORS.textLight,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.error,
    fontSize: SIZES.lg,
  },
}); 