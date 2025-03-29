import React from "react"
import { View, StyleSheet } from "react-native"
import TrashList from "../../../components/dashboard/TrashList"

const TrashListScreen = () => {
  return (
    <View style={styles.container}>
      <TrashList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default TrashListScreen
