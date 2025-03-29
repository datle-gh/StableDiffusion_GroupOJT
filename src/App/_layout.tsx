import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import MenuLeft from "../components/basicCompos/menu/MenuLeft"
import MenuTop from "../components/basicCompos/menu/MenuTop"
const Layout = () => {
  const [menuWidth, setMenuWidth] = useState(0)

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <MenuTop />
        </View>

        <View style={styles.mainSection}>
          {/* MenuLeft tự động theo nội dung */}
          <View
            style={styles.menuContainer}
            onLayout={(event) => setMenuWidth(event.nativeEvent.layout.width)}
          >
            <MenuLeft />
          </View>

          {/* Stack chiếm phần còn lại */}
          <View style={[styles.stackContent, { marginLeft: menuWidth }]}>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="(tabs)"
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  topSection: {
    width: "100%",
    zIndex: 1,
  },
  mainSection: {
    flex: 1,
    flexDirection: "row",
  },
  menuContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    alignSelf: "flex-start",
    maxWidth: 280,
  },
  stackContent: {
    flex: 1,
    backgroundColor: "transparent",
  },
})

export default Layout
