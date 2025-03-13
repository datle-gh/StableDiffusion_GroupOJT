import React from "react"
import { ImageSourcePropType, StyleSheet, TouchableOpacity } from "react-native"
import Svg, { Defs, Filter, FeColorMatrix, Image } from "react-native-svg"

const ColorFilterImage = ({
  imageUri,
  matrix,
}: {
  imageUri: string | ImageSourcePropType
  matrix: number[]
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("Pressed")}
    >
      <Svg style={styles.image}>
        <Defs>
          <Filter id="colorFilter">
            <FeColorMatrix type="matrix" values={matrix.join(" ")} />
          </Filter>
        </Defs>
        <Image
          href={imageUri === "string" ? { uri: imageUri } : imageUri}
          width="100%"
          height="100%"
          filter="url(#colorFilter)"
        />
      </Svg>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "15%",
    aspectRatio: 1,
    margin: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
})

export default ColorFilterImage
