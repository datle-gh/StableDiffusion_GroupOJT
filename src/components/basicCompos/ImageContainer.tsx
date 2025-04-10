import React, { useEffect, useState } from "react"
import {
  View,
  Image,
  Text,
  Animated,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native"
import Hoverable from "react-native-hoverable"
import { RFPercentage } from "react-native-responsive-fontsize"
import { formatDate } from "../../helpers/dateUtils"
import not_found_image from "../../../assets/images/3d-renders/not-found.jpg"
import { handleImageUrlType, useImageSize } from "../../helpers/imageUtils"

interface ImagePreviewProps {
  id: string
  uri: string | ImageSourcePropType
  info: ImageInfo
  date: Date
  showInfo?: boolean
}

/**
 * ImageContainer is a component that displays an image along with author information.
 * It automatically adjusts the aspect ratio based on the image source and shows an overlay on hover.
 *
 * @param {string} id - Unique identifier for the image (not directly used in the component).
 * @param {string | ImageSourcePropType} uri - The image source, either a URL string or a local asset.
 * @param {ImageInfo} info - Metadata about the image author, including:
 *   - `avatar`: {string | ImageSourcePropType} - Avatar image source of the author.
 *   - `author`: {string} - Name of the image author.
 *   - `date`: {Date} - The date the image was posted.
 */
const ImageContainer: React.FC<ImagePreviewProps> = ({
  uri,
  info,
  date,
  showInfo,
}) => {
  const [opacity] = useState(new Animated.Value(0))
  const { size, error } = useImageSize(uri)

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 })

  const showOverlay = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const hideOverlay = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setParentSize({ width, height })
  }

  return (
    <TouchableOpacity onLayout={onLayout}>
      <Hoverable onMouseEnter={showOverlay} onMouseLeave={hideOverlay}>
        <View style={styles.container}>
          {/* Image display on background */}
          {size.width > 0 && size.height > 0 && (
            <Image
              source={error ? not_found_image : handleImageUrlType(uri)}
              style={{
                width: "100%",
                aspectRatio: size.height !== 0 ? size.width / size.height : 1,
                borderRadius: 10,
              }}
              resizeMode="stretch"
              onError={() => {
                console.warn(`Image failed to display. ${uri}`)
              }}
            />
          )}

          {/* Overlay with author info */}
          {showInfo && (
            <Animated.View style={[styles.overlay, { opacity }]}>
              <View style={styles.infoBox}>
                <View style={styles.authorBox}>
                  <Image
                    source={handleImageUrlType(info.owner.avatar)}
                    style={[
                      styles.authorImage,
                      {
                        width: parentSize.width * 0.12,
                        height: parentSize.width * 0.12,
                      },
                    ]}
                  />
                  <Text style={styles.author}>{info.owner.name}</Text>
                </View>
                <Text style={styles.date}>{formatDate(date)}</Text>
              </View>
              <Text style={styles.message}>
                Save, share and use your image however you please
              </Text>
            </Animated.View>
          )}
        </View>
      </Hoverable>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 10,
    height: "100%",
    overflow: "hidden",
    margin: 10,
  },
  overlay: {
    position: "absolute",
    bottom: "3%",
    left: "4%",
    right: "4%",
    borderRadius: 10,
    backgroundColor: "rgba(254, 252, 252, 0.7)",
    padding: 10,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    marginRight: 5,
    borderRadius: 100,
  },
  author: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFPercentage(1.35),
  },
  date: {
    color: "black",
    fontSize: RFPercentage(1.1),
  },
  message: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: RFPercentage(1.2),
    textAlign: "left",
    marginTop: 5,
  },
})

export default ImageContainer
