import { StyleSheet, View, Text, ScrollView } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import React, { useState } from "react"
import Astronaut from "../../../assets/images/explore/astronaut.png"
import Boy from "../../../assets/images/explore/boy.png"
import Brisa from "../../../assets/images/explore/brisa.png"
import Eye from "../../../assets/images/explore/eye.png"
import Hug from "../../../assets/images/explore/hug.png"
import Magic from "../../../assets/images/explore/magic.png"
import Spring from "../../../assets/images/explore/spring.png"
import Tea from "../../../assets/images/explore/tea.png"
import Card from "../basicCompos/other/Card"
import Banner from "../basicCompos/Banner"
import ProjectList from "../basicCompos/ProjectList"

const recentDesigns = [
  {
    id: "1",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "The house",
    edited: 1,
    size: "1 GB",
  },
  {
    id: "2",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Garden",
    edited: 3,
    size: "12 MB",
  },
  {
    id: "3",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Tea",
    edited: 1,
    size: "3.8 MB",
  },
  {
    id: "4",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Character",
    edited: 3,
    size: "2 GB",
  },
  {
    id: "5",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Floor Lamp",
    edited: 2,
    size: "3.06 MB",
  },
  {
    id: "6",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Handle",
    edited: 5,
    size: "4.92 MB",
  },
  {
    id: "7",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Panel Curtain",
    edited: 2,
    size: "4.76 MB",
  },
  {
    id: "8",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "The house",
    edited: 1,
    size: "1 GB",
  },
  {
    id: "9",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Garden",
    edited: 3,
    size: "12 MB",
  },
  {
    id: "10",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Tea",
    edited: 1,
    size: "3.8 MB",
  },
  {
    id: "11",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Character",
    edited: 3,
    size: "2 GB",
  },
  {
    id: "12",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Floor Lamp",
    edited: 2,
    size: "3.06 MB",
  },
  {
    id: "13",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Handle",
    edited: 5,
    size: "4.92 MB",
  },
  {
    id: "14",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Panel Curtain",
    edited: 2,
    size: "4.76 MB",
  },
]

const exploreFirstRow = [
  { imageUrl: Brisa, text: "Text to Image" },
  { imageUrl: Tea, text: "Text effects" },
  { imageUrl: Hug, text: "Erasers" },
  { imageUrl: Spring, text: "Vectors" },
]

const exploreSecondRow = [
  { imageUrl: Astronaut, text: "3D to Image" },
  { imageUrl: Magic, text: "Upscale" },
  { imageUrl: Boy, text: "Personalized" },
  { imageUrl: Eye, text: "Sketch" },
]

const DashboardMain = () => {
  const [parentHeight, setParentHeight] = useState(0)

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Background Section */}
        <View style={styles.backgroundSection}>
          <Banner />
        </View>

        {/* Explore Section */}
        <View
          style={styles.exploreContainer}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setParentHeight(height)
          }}
        >
          <Text style={styles.title}>Explore</Text>
          <View style={[styles.row, { height: parentHeight * 0.37 }]}>
            {exploreFirstRow.map((item, index) => (
              <View style={styles.exploreOptions}>
                <Card key={index} imageUrl={item.imageUrl} label={item.text} />
              </View>
            ))}
          </View>
          <View style={[styles.row, { height: parentHeight * 0.37 }]}>
            {exploreSecondRow.map((item, index) => (
              <View style={styles.exploreOptions}>
                <Card key={index} imageUrl={item.imageUrl} label={item.text} />
              </View>
            ))}
          </View>
        </View>

        {/* Recent designs */}
        <View style={styles.recentContainer}>
          <Text style={styles.title}>Recent designs</Text>
          <View style={styles.projectList}>
            <ProjectList projects={recentDesigns} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  backgroundSection: {
    marginBottom: 20,
    height: "17%",
    justifyContent: "center",
    alignContent: "center",
    padding: 30,
  },
  title: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
  },
  exploreContainer: {
    marginTop: 25,
  },
  row: {
    flexDirection: "row",
    marginBottom: 50,
  },
  exploreOptions: {
    flex: 1,
    marginHorizontal: 20,
  },
  recentContainer: {
    marginTop: 25,
    width: "100%",
  },
  projectList: {
    paddingHorizontal: 20,
    maxHeight: 460,
  },
})

export default DashboardMain
