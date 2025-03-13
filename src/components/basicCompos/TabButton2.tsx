import {
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native"

export interface TabButtonProps {
  title: string
  icon: ImageSourcePropType
  onPress?: () => void
  isActive: boolean
}

/**
 * Component for a tab button with style 2
 * @param title - name of the button
 * @param icon - icon of the button
 * @param onPress - function to be called when button is pressed
 * @param isActive - boolean to determine if button is active
 * @returns
 */
const TabButton2: React.FC<TabButtonProps> = ({
  title,
  icon,
  onPress,
  isActive,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.iconContainer} />
      <Text style={[styles.tabText, isActive && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tabButton: {
    width: "5%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: "#e0e0e0",
  },
  tabText: {
    fontSize: 12,
    color: "#555",
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
  iconContainer: {
    width: 20,
    height: 20,
  },
})

export default TabButton2
