import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native"
import Switch from "../Switch"

interface InputSwitchProps {
  label: string
  icon: ImageSourcePropType
  defaultValue: boolean
  onChange: (value: boolean) => void
}

/**
 * Component Input with switch
 * @param label Label of switch
 * @param icon Icon of switch
 * @param defaultValue Default value
 * @param onChange Callback when switch value change
 */
const InputSwitch: React.FC<InputSwitchProps> = ({
  label,
  icon,
  defaultValue = false,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.label}>{label}</Text>
        <Switch defaultVal={defaultValue} onValueChange={onChange} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9d7d7",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginLeft: "3%",
    marginRight: "4%",
    width: "5%",
    height: "50%",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
  },
})

export default InputSwitch
