import { Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const AiEditLayout = () => {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AiEditLayout;