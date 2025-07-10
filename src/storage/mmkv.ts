import AsyncStorage from '@react-native-async-storage/async-storage';

// Simple helpers
export const saveToStorage = async (key: string, value: any) => {
  const json = JSON.stringify(value);
  await AsyncStorage.setItem(key, json);
};

export const getFromStorage = async (key: string) => {
  const json = await AsyncStorage.getItem(key);
  return json ? JSON.parse(json) : null;
};

export const removeFromStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
