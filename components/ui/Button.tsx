import { theme } from '@/constants/theme';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
    label: string;
    onPress?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    loading?: boolean;
}

export function Button({
    label,
    onPress,
    variant = 'primary',
    disabled,
    loading
}: ButtonProps) {
    return (
        <Pressable
            style={[
                styles.button,
                variant === 'secondary' && styles.buttonSecondary,
                (disabled || loading) && styles.buttonDisabled
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? 'white' : theme.colors.primary} />
            ) : (
                <Text style={[
                    styles.text,
                    variant === 'secondary' && styles.textSecondary
                ]}>
                    {label}
                </Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        width: '100%',
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: theme.fonts.semiBold,
    },
    textSecondary: {
        color: theme.colors.primary,
    },
});