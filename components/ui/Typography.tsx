import { theme } from '@/constants/theme';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2';
    color?: keyof typeof theme.colors;
    align?: 'left' | 'center' | 'right';
    style?: TextStyle;
    children: React.ReactNode;
}

export function Typography({
    variant = 'h1',
    color = 'text',
    align = 'left',
    style,
    children
}: TypographyProps) {
    return (
        <Text style={[
            styles[variant],
            { color: theme.colors[color], textAlign: align },
            style
        ]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 28,
        fontFamily: theme.fonts.bold,
        marginBottom: theme.spacing.sm,
    },
    h2: {
        fontSize: 24,
        fontFamily: theme.fonts.semiBold,
        marginBottom: theme.spacing.sm,
    },
    h3: {
        fontSize: 20,
        fontFamily: theme.fonts.semiBold,
        marginBottom: theme.spacing.sm,
    },
    subtitle1: {
        fontSize: 16,
        fontFamily: theme.fonts.regular,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.md,
    },
    subtitle2: {
        fontSize: 14,
        fontFamily: theme.fonts.regular,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.sm,
    },
});