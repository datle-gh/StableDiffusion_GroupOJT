import React from "react"
import { View, StyleSheet } from "react-native"
import MyProject from "../../../components/dashboard/MyProject"

const MyProjectScreen = () => {
  return (
    <View style={styles.container}>
      <MyProject />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MyProjectScreen
