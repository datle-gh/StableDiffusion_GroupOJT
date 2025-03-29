import { Stack } from "expo-router"
import React from "react"
import { View, StyleSheet } from "react-native"

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default HomeLayout
