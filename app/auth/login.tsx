import { Button } from '@/components/ui/Button';
import { PhoneInput } from '@/components/ui/PhoneInput';
import { Typography } from '@/components/ui/Typography';
import { theme } from '@/constants/theme';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validatePhone = (number: string) => {
        return /^[6-9]\d{9}$/.test(number);
    };

    const handleLogin = async () => {
        if (!validatePhone(phone)) {
            setError('Please enter a valid phone number');
            return;
        }

        setError('');
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock successful login
            router.push('/auth/verify');
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Typography variant="h1">Login</Typography>
                <Typography variant="subtitle1">
                    Enter your phone number to continue
                </Typography>

                <View style={styles.form}>
                    <PhoneInput
                        value={phone}
                        onChangeText={setPhone}
                        error={error}
                    />

                    <Button
                        label="Continue"
                        onPress={handleLogin}
                        loading={loading}
                        disabled={!phone || loading}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
        padding: theme.spacing.lg,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: theme.spacing.sm,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.xl,
    },
    form: {
        gap: theme.spacing.lg,
    },
});