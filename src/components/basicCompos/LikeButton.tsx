import {
  StyleSheet,
  TouchableOpacity,
  Text,
  LayoutChangeEvent,
  View,
} from "react-native"
import { AntDesign } from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"
import { useEffect, useRef, useState } from "react"

const LikeButton = () => {
  const [liked, setLiked] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 })

  const animationRef = useRef<
    Animatable.View & { animate: (animation: any) => void }
  >(null)

  const iconSize = parentSize.height ? parentSize.height * 0.45 : 16

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setParentSize({ width, height })
  }

  const handlePress = () => {
    if (liked) {
      setIsAnimatingOut(true)
      if (animationRef.current) {
        animationRef.current.animate(animationOutStyle, 300).then(() => {
          setShowIcon(false)
          setLiked(false)
          setIsAnimatingOut(false)
        })
      }
    } else {
      setShowIcon(true)
      setLiked(true)
    }
  }

  useEffect(() => {
    if (liked && animationRef.current) {
      animationRef.current.animate(animationInStyle)
    }
  }, [liked])

  const animationInStyle = {
    0: { opacity: 0, scale: 0.3 },
    0.2: { scale: 1.1 },
    0.4: { scale: 0.9 },
    0.6: { opacity: 1, scale: 1.03 },
    0.8: { scale: 0.97 },
    1: { opacity: 1, scale: 1 },
  }

  const animationOutStyle = {
    from: {
      opacity: 1,
      translateY: 0,
    },
    to: {
      opacity: 0,
      translateY: 100,
    },
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      onLayout={onLayout}
    >
      <View style={{ flex: 2, alignItems: "center" }}>
        {(liked || isAnimatingOut) && showIcon && (
          <Animatable.View ref={animationRef}>
            <AntDesign name="heart" size={iconSize} color="red" />
          </Animatable.View>
        )}

        {!liked && !isAnimatingOut && (
          <AntDesign name="hearto" size={iconSize} color="black" />
        )}
      </View>

      <Text style={{ fontSize: iconSize, flex: 2.5, textAlign: "center" }}>
        {liked ? "Liked" : "Like"}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
})

export default LikeButton
