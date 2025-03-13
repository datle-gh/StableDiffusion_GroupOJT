import React, { useRef, useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native"
import { Svg, Path } from "react-native-svg"

interface DropdownItemProps {
  headerTitle: string
  children: React.ReactNode
}

const Title: React.FC<DropdownItemProps> = ({ headerTitle, children }) => {
  const [expanded, setExpanded] = useState(false)
  const animation = useRef(new Animated.Value(0)).current
  const [contentHeight, setContentHeight] = useState(0)

  const toggleDropdown = () => {
    setExpanded(!expanded)
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  })

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <Text style={styles.title}>{headerTitle}</Text>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
          >
            <Path
              d="M6 9l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </TouchableOpacity>

      {/* Nội dung dropdown với hiệu ứng trượt mượt */}
      <Animated.View
        style={[
          styles.dropdown,
          { height: animatedHeight, overflow: "hidden" },
        ]}
      >
        <View
          style={styles.content}
          onLayout={(event: LayoutChangeEvent) =>
            setContentHeight(event.nativeEvent.layout.height)
          }
        >
          {children}
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  dropdown: {
    paddingHorizontal: 10,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})

export default Title
