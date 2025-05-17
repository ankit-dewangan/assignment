import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { theme } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export default function Welcome() {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const slideAnim = useRef(new Animated.Value(50)).current;

	useEffect(() => {
		Animated.parallel([
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.spring(slideAnim, {
				toValue: 0,
				tension: 50,
				friction: 7,
				useNativeDriver: true,
			}),
		]).start();
	}, [fadeAnim, slideAnim]);

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={require('@/assets/images/welcome.png')}
					style={styles.image}
					contentFit="contain"
				/>
			</View>
			<View style={styles.overlay} />

			<Animated.View
				style={[
					styles.content,
					{
						opacity: fadeAnim,
						transform: [{ translateY: slideAnim }],
					},
				]}
			>
				<View style={styles.textContainer}>
					<Typography
						variant="h1"
						color="primary"
						align="center"
						style={styles.title}
					>
						Welcome to the application!
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						style={styles.subtitle}
					>
						Start your journey with us and discover amazing features
					</Typography>
				</View>

				<View style={styles.buttonContainer}>
					<Link href="/onboarding/permissions" asChild>
						<Button label="Get Started" />
					</Link>
				</View>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	imageContainer: {
		height: '65%',
		width: '100%',
		position: 'relative',
	},
	image: {
		width: '75%',
		alignSelf: 'center',
		height: '100%',
		transform: [{ scale: 1.1 }],
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(108, 99, 255, 0.1)', // Primary color with opacity
		zIndex: 1,
	},
	content: {
		zIndex: 2,
		flex: 1,
		backgroundColor: theme.colors.background,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		marginTop: -30,
		padding: theme.spacing.lg,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -3,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4.65,
		elevation: 6,
	},
	textContainer: {
		marginBottom: theme.spacing.xl,
	},
	title: {
		fontSize: 32,
		marginBottom: theme.spacing.md,
	},
	subtitle: {
		lineHeight: 24,
		opacity: 0.8,
	},
	buttonContainer: {
		paddingHorizontal: theme.spacing.md,
	},
});