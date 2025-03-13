import React, { useState } from "react"
import {
  View,
  Image,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageSourcePropType,
} from "react-native"
import Hoverable from "react-native-hoverable"

interface ImageContainerProps {
  imageUri: ImageSourcePropType
  avatarUrl: ImageSourcePropType
  author: string
  date: string
}

/**
 *  ImageContainer là component hiển thị một hình ảnh với thông tin của người đăng
 * @param imageUri - đường dẫn hình ảnh
 * @param avatarUrl - đường dẫn ảnh đại diện của người đăng
 * @param author - tên người đăng
 * @param date - ngày đăng
 * @returns
 */
const ImageContainer: React.FC<ImageContainerProps> = ({
  imageUri,
  avatarUrl,
  author,
  date,
}) => {
  const [opacity] = useState(new Animated.Value(0))

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

  return (
    <Hoverable onMouseEnter={showOverlay} onMouseLeave={hideOverlay}>
      <View style={styles.container}>
        <Image source={imageUri} style={styles.image} />
        <Animated.View style={[styles.overlay, { opacity }]}>
          <View style={styles.infoBox}>
            <View style={styles.authorBox}>
              <Image source={avatarUrl} style={styles.authorImage} />
              <Text style={styles.author}>{author}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.message}>
            Save, share and use your image however you please
          </Text>
        </Animated.View>
      </View>
    </Hoverable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: "4%",
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
    width: 26,
    height: 26,
    marginRight: 5,
    borderRadius: 100,
  },
  author: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "black",
    fontSize: 12,
  },
  message: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 12,
    textAlign: "left",
    marginTop: 5,
  },
})

export default ImageContainer
