import { useState } from "react"
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import Ionicons from "react-native-vector-icons/Ionicons"
import GenerateButton from "./GenerateButton"
const AiEdit = () => {
  const [image, setImage] = useState<string | null>(null)

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Platform.OS === "web") {
      const file = event.target.files?.[0]
      if (file) {
        setImage(URL.createObjectURL(file))
      }
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const ImageUploadComponent = () => {
    if (image) {
      return <Image source={{ uri: image }} style={styles.image} />
    }

    return (
      <TouchableOpacity
        onPress={
          Platform.OS === "web"
            ? () => document.getElementById("fileInput")?.click()
            : pickImage
        }
        style={styles.chooseImage}
      >
        <View style={styles.uploadContent}>
          {Platform.OS === "web" && (
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={uploadImage}
              style={{ display: "none" }}
            />
          )}
          <Ionicons name="image-outline" size={50} color="#A8A8A8" />
          <Text style={styles.textUploadImage}>
            {Platform.OS === "web"
              ? "Upload a reference image"
              : "Choose an image"}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ImageUploadComponent />
      <TouchableOpacity style={styles.generateButton}>
        <View style={styles.generateContent}>
          <Ionicons name="sparkles-sharp" size={30} color="#FFFFFF" />
          <Text style={styles.textGenerate}>Generate</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AiEdit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: Platform.OS === "web" ? 800 : "90%",
    height: Platform.OS === "web" ? 400 : 300,
    borderWidth: 2,
    borderColor: "#A8A8A8",
    borderRadius: 10,
    marginBottom: 20,
  },
  chooseImage: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#A8A8A8",
    borderRadius: 10,
    width: Platform.OS === "web" ? 800 : "90%",
    height: Platform.OS === "web" ? 400 : 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  uploadContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  textUploadImage: {
    color: "#A8A8A8",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  generateButton: {
    backgroundColor: "#3EB8AF",
    borderRadius: 10,
    padding: 15,
    width: Platform.OS === "web" ? 200 : "50%",
    alignItems: "center",
  },
  generateContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textGenerate: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
})
