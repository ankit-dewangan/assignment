import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { theme } from '@/constants/theme';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Verify() {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleVerify = async () => {
        if (otp.length !== 4) {
            setError('Please enter a valid OTP');
            return;
        }

        setError('');
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock successful verification
            router.push('/auth/user-details');
        } catch (err) {
            console.error('Error submitting form:', err);

            setError('Invalid OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Typography variant="h1">Verify Phone</Typography>
                <Typography variant="subtitle1">
                    Enter the 4-digit code sent to your phone
                </Typography>

                <View style={styles.form}>
                    <TextInput
                        style={styles.otpInput}
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType="number-pad"
                        maxLength={4}
                        placeholder="Enter OTP"
                    />

                    {error && <Text style={styles.errorText}>{error}</Text>}

                    <Button
                        label="Verify"
                        onPress={handleVerify}
                        loading={loading}
                        disabled={otp.length !== 4 || loading}
                    />

                    {timer > 0 ? (
                        <Typography variant="subtitle2" align="center">
                            Resend OTP in {timer}s
                        </Typography>
                    ) : (
                        <Button
                            label="Resend OTP"
                            variant="secondary"
                            onPress={() => setTimer(30)}
                        />
                    )}
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
    otpInput: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 8,
    },
    errorText: {
        color: theme.colors.error,
        fontSize: 14,
    },
    timerText: {
        textAlign: 'center',
        color: theme.colors.textSecondary,
    },
});