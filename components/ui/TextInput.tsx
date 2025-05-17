import { theme } from '@/constants/theme';
import { TextInput as RNTextInput, StyleSheet, Text, TextInputProps, View } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function TextInput({ label, error, ...props }: CustomTextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: theme.spacing.sm,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    paddingVertical: 13,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.text,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.error,
    fontSize: 12,
    marginTop: theme.spacing.xs,
  },
});