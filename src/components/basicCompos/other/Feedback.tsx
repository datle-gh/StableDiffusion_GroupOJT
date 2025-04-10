import { StyleSheet, View, Text, Image, LayoutChangeEvent } from "react-native"
import { handleImageUrlType } from "../../../helpers/imageUtils"
import { useState } from "react"

const Feedback: React.FC<Feedback> = ({
  accountAvatar,
  accountName,
  comment,
}) => {
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 })
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setParentSize({ width, height })
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Image
        source={handleImageUrlType(accountAvatar)}
        style={[
          styles.avatar,
          { width: parentSize.width * 0.12, height: parentSize.width * 0.12 },
        ]}
        resizeMode="stretch"
      />
      <View style={styles.commentContainer}>
        <Text
          style={[styles.accountName, { fontSize: parentSize.width * 0.05 }]}
        >
          {accountName}
        </Text>
        <Text style={[styles.comment, { fontSize: parentSize.width * 0.035 }]}>
          {comment}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    marginRight: 10,
  },
  commentContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
  },
  accountName: {
    fontWeight: "bold",
  },
  comment: {
    color: "#555",
  },
})

export default Feedback
