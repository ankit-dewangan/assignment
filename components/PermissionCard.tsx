import { theme } from '@/constants/theme';
import { StyleSheet, View } from 'react-native';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';

interface PermissionCardProps {
    title: string;
    description: string;
    onRequest: () => void;
    granted: boolean;
}

export function PermissionCard({
    title,
    description,
    onRequest,
    granted
}: PermissionCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="subtitle2">{description}</Typography>
            </View>
            <Button
                label={granted ? "Granted" : "Allow"}
                variant={granted ? "secondary" : "primary"}
                onPress={onRequest}
                disabled={granted}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.lg,
    },
    content: {
        marginBottom: theme.spacing.md,
    },
});