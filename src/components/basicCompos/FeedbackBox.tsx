import { StyleSheet, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { useState } from "react"

/**
 * FeedbackBox component allows users to write and send comments.
 * @param onChangeValue - A callback function that is triggered when the user
 *                        presses the send button. It receives the comment text as a parameter.
 */
const FeedbackBox = ({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void
}) => {
  const [comment, setComment] = useState("")

  const handleSend = () => {
    if (comment.trim() !== "") {
      onChangeValue(comment)
      setComment("")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write a comment"
        style={styles.textInput}
        value={comment}
        onChangeText={setComment}
        multiline
        textAlignVertical="top"
      />
      <View style={styles.sendIcon}>
        <TouchableOpacity onPress={handleSend}>
          <MaterialCommunityIcons name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d7d7d7",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  textInput: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "90%",
    marginTop: 10,
    marginHorizontal: 10,
  },
  sendIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 5,
  },
})

export default FeedbackBox
