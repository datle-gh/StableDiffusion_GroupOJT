import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" }, // Ẩn thanh tab
        }}
      >
        <Tabs.Screen name="home" options={{ title: "Home" }} />
        <Tabs.Screen name="myproject" options={{ title: "My Project" }} />
        <Tabs.Screen name="aiedit" options={{ title: "AI Edit" }} />
        <Tabs.Screen name="trashlist" options={{ title: "Trash List" }} />
      </Tabs>
    </View>
  );
}
