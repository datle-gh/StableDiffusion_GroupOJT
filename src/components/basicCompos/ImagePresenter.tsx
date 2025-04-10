import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { handleImageUrlType, useImageSize } from "../../helpers/imageUtils"
import { RFPercentage } from "react-native-responsive-fontsize"
import not_found_image from "../../../assets/images/3d-renders/not-found.jpg"

/**
 * ImagePresenter displays an image along with its name and prompt description.
 * It also includes left and right navigation buttons for cycling through images.
 *
 * @param {ImageType} image - The image object containing:
 * - `uri`: the image URL or local path,
 * - `info.name`: the display name of the image,
 * - `info.prompt`: the prompt or description associated with the image.
 */
const ImagePresenter: React.FC<ImageType> = (image) => {
  const { size, error } = useImageSize(image.uri)

  return (
    <View style={styles.container}>
      <Text style={styles.imageName}>{image.info.name}</Text>
      <Text style={styles.imagePrompt}>{image.info.prompt}</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.transitButton}>
          <AntDesign name="left" size={size.width * 0.08} color="black" />
        </TouchableOpacity>
        <View style={{ width: "32%" }}>
          {size.width > 0 && size.height > 0 && (
            <Image
              source={error ? not_found_image : handleImageUrlType(image.uri)}
              style={{
                width: "100%",
                aspectRatio: size.height !== 0 ? size.width / size.height : 1,
                borderRadius: 10,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              resizeMode="contain"
              onError={() => {
                console.warn(`Image failed to display. ${image.uri}`)
              }}
            />
          )}
        </View>
        <TouchableOpacity style={styles.transitButton}>
          <AntDesign name="right" size={size.width * 0.08} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imageName: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.5),
    textAlign: "center",
  },
  imagePrompt: {
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
    fontSize: RFPercentage(1.2),
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  transitButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default ImagePresenter
