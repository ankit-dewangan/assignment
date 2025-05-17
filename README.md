# Mobile App Onboarding Flow

A React Native mobile application demonstrating a modern onboarding flow with permissions handling, phone authentication, and user profile management.

## Features

- 🎨 Clean, modern UI with animations
- 📱 Permission handling (Location, ATT)
- 📞 Phone number authentication flow
- 👤 User profile management
- 🏗️ Modular architecture with TypeScript
- 💅 Consistent styling with custom Typography

## Tech Stack

- Expo SDK
- React Native
- TypeScript
- Expo Router
- Context API for state management

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Run on your preferred platform:
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## Project Structure

```
src/
├── app/                 # Screen components
├── components/          # Reusable UI components
├── constants/          # Theme and configuration
├── context/           # Application state
└── utils/             # Helper functions
```

## Assumptions & Limitations

- App Tracking Transparency is mocked
- OTP verification is simulated
- User data persists only during runtime (no AsyncStorage)
- Requires Expo Go or development build

## Known Issues

- Limited offline support
- No deep linking configuration
- Minimal error handling

## Future Improvements

- [ ] Persist user data with AsyncStorage
- [ ] Add proper error boundaries
- [ ] Implement actual OTP verification
- [ ] Add unit tests
- [ ] Support offline mode

## License

MIT