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
              screenOptions={{ headerShown: false }}
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
    backgroundColor: "#F5F5F5",
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
    position: "absolute", // Không làm ảnh hưởng đến Stack
    left: 0,
    top: 0,
    bottom: 0,
    alignSelf: "flex-start", // Không mở rộng ra toàn bộ không gian
    maxWidth: 280, // Giới hạn chiều rộng (hoặc có thể điều chỉnh phù hợp)
  },
  stackContent: {
    flex: 1,
  },
})

export default Layout
