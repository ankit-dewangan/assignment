import { PermissionCard } from '@/components/PermissionCard';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { theme } from '@/constants/theme';
import { requestLocationPermission, requestTrackingPermission } from '@/utils/permissions';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Permissions() {
    const [locationGranted, setLocationGranted] = useState(false);
    const [trackingGranted, setTrackingGranted] = useState(false);

    const handleLocationPermission = async () => {
        const granted = await requestLocationPermission();
        setLocationGranted(granted);
    };

    const handleTrackingPermission = async () => {
        const granted = await requestTrackingPermission();
        setTrackingGranted(granted);
    };

    const handleContinue = () => {
        router.push('/auth/login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Typography variant="h1">App Permissions</Typography>
                <Typography variant="subtitle1">
                    We need a few permissions to provide you with the best experience
                </Typography>
            </View>

            <View style={styles.permissions}>
                <PermissionCard
                    title="Location Access"
                    description="We need your location to show you relevant content and services near you."
                    onRequest={handleLocationPermission}
                    granted={locationGranted}
                />

                <PermissionCard
                    title="App Tracking"
                    description="Allow us to provide you with a personalized experience and relevant advertisements."
                    onRequest={handleTrackingPermission}
                    granted={trackingGranted}
                />
            </View>

            <View style={styles.footer}>
                <Button
                    label="Continue"
                    onPress={handleContinue}
                    disabled={!locationGranted}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.lg,
    },
    header: {
        marginBottom: theme.spacing.xl,
    },
    permissions: {
        flex: 1,
    },
    footer: {
        marginTop: theme.spacing.lg,
    },
});