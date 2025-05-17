import * as Location from 'expo-location';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import { Platform } from 'react-native';

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting location permission:', error);
    return false;
  }
};

export const requestTrackingPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') {
    try {
      const { status } = await requestTrackingPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Error requesting tracking permission:', error);
      return false;
    }
  }
  // Mock implementation for Android
  return true;
};