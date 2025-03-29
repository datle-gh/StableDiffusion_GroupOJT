import React from "react"
import { View, StyleSheet } from "react-native"
import DashTwo from "../../../components/dashboard/DashTwo"

const Discovery = () => {
  return (
    <View style={styles.container}>
      <DashTwo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Discovery
