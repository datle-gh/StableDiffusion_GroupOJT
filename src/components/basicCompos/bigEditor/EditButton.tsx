import { useState, useEffect, useRef } from "react"
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  LayoutChangeEvent,
  Animated,
} from "react-native"

interface ButtonProps {
  title?: string
  icon?: ImageSourcePropType
  state: string
}

/** EditButtons Component - Displays a group of animated selectable buttons with separators.
 * @param {Object[]} buttons - Array of button objects to render
 * @param {string} [buttons[].title] - Optional title of the button
 * @param {ImageSourcePropType} [buttons[].icon] - Optional icon to display beside the title
 * @param {string} buttons[].state - Unique state value associated with each button
 * @param {(value: string | undefined) => void} onValueChange - Callback when the selected button changes
 * @author Tien Dat
 */
const EditButtons = ({
  buttons,
  onValueChange,
}: {
  buttons: ButtonProps[]
  onValueChange: (value: string | undefined) => void
}) => {
  const [parentWidth, setParentWidth] = useState<number>(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const animatedPosition = useRef(new Animated.Value(0)).current

  /** Update button group width when layout changes */
  const handleLayout = (event: LayoutChangeEvent) => {
    setParentWidth(event.nativeEvent.layout.width)
  }

  /** Animate the selected button movement */
  useEffect(() => {
    if (buttons.length > 0 && parentWidth > 0) {
      const buttonWidth = (parentWidth * 0.96) / buttons.length
      const activeWidth = buttonWidth * 0.9
      const centerOffset = (buttonWidth - activeWidth) / 2

      Animated.spring(animatedPosition, {
        toValue: buttonWidth * selectedIndex + centerOffset,
        useNativeDriver: false,
        speed: 10,
        bounciness: 8,
      }).start()
    }
  }, [selectedIndex, parentWidth])

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={[styles.buttonGroup, { width: parentWidth * 0.96 }]}>
        <Animated.View
          style={[
            styles.activeBackground,
            {
              width: Math.floor(parentWidth / buttons.length) * 0.86,
              transform: [{ translateX: animatedPosition }],
            },
          ]}
        />

        {buttons.map((btn, index) => (
          <View key={index} style={styles.buttonWrapper}>
            {index !== 0 && <View style={styles.separator} />}
            <TouchableOpacity
              style={[
                styles.groupButton,
                { width: Math.floor(parentWidth / buttons.length) * 0.955 },
              ]}
              onPress={() => {
                setSelectedIndex(index)
                onValueChange(btn.state)
              }}
            >
              {btn.icon && (
                <Image
                  source={btn.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              )}
              {btn.title && <Text style={styles.text}>{btn.title}</Text>}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  buttonGroup: {
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    position: "relative",
  },

  activeBackground: {
    position: "absolute",
    top: "10%",
    bottom: "10%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },

  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  separator: {
    width: 1,
    height: "50%",
    backgroundColor: "#d0d0d0",
    alignSelf: "center",
    zIndex: 2,
  },

  groupButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 16,
    zIndex: 3,
  },

  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },

  icon: {
    marginRight: 5,
    width: "28%",
    height: 22,
  },
})

export default EditButtons
