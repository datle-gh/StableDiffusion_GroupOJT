import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"

interface CardProps {
  imageUrl: string | ImageSourcePropType
  label: string
  lastDay?: number
}

/**
 * Card component
 * @description Card component for displaying image and text, which are pressable at explore section and recent section
 * @param imageUrl - image source
 * @param label - text label
 * @param lastDay - last edited day (optional)
 */
const Card: React.FC<CardProps> = ({ imageUrl, label, lastDay }) => {
  const imageSource =
    typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {lastDay &&
          (lastDay === 1 ? (
            <Text style={styles.dateEdit}>Edited 1 day ago</Text>
          ) : (
            <Text style={styles.dateEdit}>Edited {lastDay} days ago</Text>
          ))}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "90%",
    borderRadius: 12,
  },
  textContainer: {
    marginTop: 8,
  },
  label: {
    fontSize: RFPercentage(1),
    fontWeight: "bold",
  },
  dateEdit: {
    color: "#888",
  },
})

export default Card
