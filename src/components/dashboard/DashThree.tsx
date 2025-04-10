import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
  StyleSheet,
} from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { FlatList } from "react-native-gesture-handler"
import Feedback from "../basicCompos/other/Feedback"
import FeedbackBox from "../basicCompos/FeedbackBox"
import LikeButton from "../basicCompos/LikeButton"
import UseButton from "../basicCompos/UseButton"
import ImagePresenter from "../basicCompos/ImagePresenter"
import SuggestBar from "../basicCompos/SuggestBar"

const feedbacks = [
  {
    id: 1,
    name: "Kris Roher",
    comment: "OMG!!!! This is soooo coool!!",
    avatar:
      "https://www.mannoapp.com/static/media/Hombre3.d4400226e83bb0344bcb.png",
  },
  {
    id: 2,
    name: "Audrey Simmmons",
    comment: "Stunning!",
    avatar:
      "https://i.pinimg.com/236x/fe/bf/1f/febf1f437971a4055082ec6d6aca7ed3.jpg",
  },
  {
    id: 3,
    name: "Alfonso Stanton",
    comment: "Very nice work! Keep it up!",
    avatar:
      "https://static.univid.io/profile/toyfaces/coloredbg/ToyFaces_Colored_BG_63.jpg",
  },
  {
    id: 4,
    name: "Val Purvis",
    comment: "Awesome work mask!",
    avatar:
      "https://cdn.dribbble.com/users/230875/screenshots/12114173/media/df3e6ff6ad1ee715644dfad9a7e89b6a.jpg?resize=400x300&vertical=center",
  },
  {
    id: 5,
    name: "Leo Stanton",
    comment: "Awesome work!",
    avatar:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvKExDXfDDQQRrE3tZCGWGSPhxmVXIqYjEEVaMp4EZkqm3bSo7",
  },
  {
    id: 6,
    name: "Bill Gaston",
    comment: "Looks amazing!",
    avatar:
      "https://picx.zhimg.com/v2-9b062ef1027200b74b3dedef6b02a8fe_l.jpg?source=1def8aca",
  },
]

const DashThree: React.FC<ImageType> = (image) => {
  const [parentSize, setParentSize] = React.useState({ width: 0, height: 0 })

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setParentSize({ width, height })
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      {/* Left Side - Content */}
      <View style={styles.leftSide}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.infoSide}>
            <TouchableOpacity>
              <AntDesign
                name="close"
                size={parentSize.width * 0.024}
                color="black"
              />
            </TouchableOpacity>

            <View style={styles.infoContainer}>
              <Feedback
                accountAvatar={image.info.owner.avatar}
                accountId={image.info.owner.id}
                accountName={image.info.name}
                comment={`@${image.info.owner.email}`}
                date={image.date}
                id={image.id}
              />
            </View>
          </View>
          <View style={styles.buttonSide}>
            <View
              style={[
                styles.button,
                {
                  width: "47%",
                },
              ]}
            >
              <LikeButton />
            </View>
            <View
              style={[
                styles.button,
                {
                  width: "45%",
                },
              ]}
            >
              <UseButton />
            </View>
          </View>
        </View>

        {/* Image Presenter */}
        <ImagePresenter
          uri={image.uri}
          categories={image.categories}
          date={image.date}
          id={image.id}
          info={image.info}
          loves={image.loves}
        />

        {/* Suggest bar*/}
        <View style={styles.suggestBarContainer}>
          <SuggestBar
            categories={image.categories}
            date={image.date}
            id={image.id}
            info={image.info}
            loves={image.loves}
            uri={image.uri}
          />
        </View>
      </View>

      {/* Right Side - Feedback */}
      <View style={styles.rightSide}>
        <Text
          style={{ fontSize: parentSize.width * 0.024, fontWeight: "bold" }}
        >
          Feedback
        </Text>
        <FlatList
          data={feedbacks}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Feedback
                accountAvatar={item.avatar}
                accountName={item.name}
                comment={item.comment}
                accountId={item.id.toString()}
                date={new Date()}
                id={item.id.toString()}
              />
            </View>
          )}
        />

        <View style={styles.feedbackBox}>
          <FeedbackBox onChangeValue={(value) => console.log(value)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
  },
  leftSide: { flex: 2, height: "100%" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    paddingHorizontal: 10,
  },
  infoSide: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "42%",
    justifyContent: "space-between",
  },
  infoContainer: { width: "90%", height: "100%" },
  buttonSide: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "26%",
    justifyContent: "space-between",
  },
  button: {
    height: "70%",
  },
  suggestBarContainer: { height: "23%" },
  rightSide: {
    width: "30%",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderLeftWidth: 1,
    borderColor: "#ddd",
  },
  feedbackBox: { height: "20%", marginTop: 8 },
})

export default DashThree
