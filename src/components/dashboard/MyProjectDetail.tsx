import {
  FlatList,
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState, useEffect, useMemo } from "react"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import SortNew from "../basicCompos/SortNew"
import ProjectList from "../basicCompos/ProjectList"
import pencil_plus from "../../../assets/icons/component10/pencil-plus.png"
import cloud_upload from "../../../assets/icons/component10/cloud-upload.png"
import import_icon from "../../../assets/icons/component10/file-download.png"
import DashboardButton from "../basicCompos/other/DashboardButton"
import Card from "../basicCompos/other/Card"
import { DisplayingType } from "../basicCompos/SortNew"
import { RFPercentage } from "react-native-responsive-fontsize"

interface Design {
  id: string
  imageUrl: string
  name: string
  edited: number
  size: string
  lastViewed: string
}

const designs: Design[] = [
  {
    id: "1",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "The house",
    edited: 1,
    size: "1 GB",
    lastViewed: "N/A",
  },
  {
    id: "2",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Garden",
    edited: 3,
    size: "12 MB",
    lastViewed: "N/A",
  },
  {
    id: "3",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Tea",
    edited: 1,
    size: "3.8 MB",
    lastViewed: "N/A",
  },
  {
    id: "4",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Character",
    edited: 3,
    size: "2 GB",
    lastViewed: "N/A",
  },
  {
    id: "5",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Floor Lamp",
    edited: 2,
    size: "3.06 MB",
    lastViewed: "5 days ago",
  },
  {
    id: "6",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Handle",
    edited: 5,
    size: "4.92 MB",
    lastViewed: "5 days ago",
  },
  {
    id: "7",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Panel Curtain",
    edited: 2,
    size: "4.76 MB",
    lastViewed: "5 days ago",
  },
  {
    id: "8",
    imageUrl:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
    name: "Panel Curtain",
    edited: 2,
    size: "4.76 MB",
    lastViewed: "5 days ago",
  },
]

const buttons = [
  {
    title: "New design",
    icon: pencil_plus,
    color: "#EBE7FE",
    //route?
  },
  {
    title: "Upload",
    icon: cloud_upload,
    color: "#E3F7C5",
    //route?
  },
  {
    title: "Import",
    icon: import_icon,
    color: "#FFE8D6",
    //route?
  },
]

const MyProjectDetail = () => {
  //lưu trữ giá trị sort hiện tại
  const [data, setData] = useState<Design[]>(designs)
  //Kiểu hiển thị
  const [displayType, setDisplayType] = useState<DisplayingType>("List")

  const recentDesigns = useMemo(() => {
    return data.filter((item) => item.edited <= 3)
  }, [data])

  const [size, setSize] = useState({ width: 0, height: 0 })
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      onLayout={onLayout}
      style={styles.container}
    >
      {/*Project name */}
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome6
          name="angle-left"
          size={size.width * 0.015}
          color="#2F4F4F"
        />
        <Text style={styles.textProject}>Project name</Text>
      </TouchableOpacity>

      {/*Button*/}
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <View style={styles.button} key={index}>
            <DashboardButton
              title={button.title}
              icon={button.icon}
              color={button.color}
              onPress={() => console.log}
            />
          </View>
        ))}
      </View>

      {/*Recent designs */}
      <View style={styles.recentDesignContainer}>
        <Text style={styles.subTitle}>Recent designs</Text>
        <FlatList
          horizontal
          data={recentDesigns}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={[
                styles.recentDesigns,
                {
                  width: size.width * 0.17,
                  marginRight: size.width * 0.02,
                },
              ]}
            >
              <Card
                label={item.name}
                imageUrl={item.imageUrl}
                lastDay={item.edited}
              />
            </View>
          )}
        />
      </View>

      {/*All design */}
      <View style={styles.allDesign}>
        <Text style={styles.subTitle}>All design</Text>

        <View style={styles.sortContainer}>
          <SortNew
            defaultDesigns={data}
            defaultDisplayType={displayType}
            onSorted={setData}
            onDisplayTypeChange={setDisplayType}
          />
        </View>

        {displayType === "List" ? (
          <View style={styles.designList}>
            <ProjectList projects={data} />
          </View>
        ) : (
          <View style={styles.designGrid}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ flexGrow: 1 }}
              numColumns={4}
              renderItem={({ item }) => (
                <View style={styles.gridItem}>
                  <Card
                    label={item.name}
                    imageUrl={item.imageUrl}
                    lastDay={item.edited}
                  />
                </View>
              )}
            />
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "30%",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textProject: {
    fontFamily: "Arial",
    fontSize: RFPercentage(1.3),
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    gap: 30,
  },
  button: {
    backgroundColor: "#EBE7FE",
    width: "18%",
    height: "100%",
    borderRadius: 10,
  },
  subTitle: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: RFPercentage(1.6),
    marginBottom: 10,
  },
  recentDesignContainer: {
    marginTop: 40,
    height: "25%",
    width: "100%",
    maxHeight: 200,
  },
  recentDesigns: {
    height: "80%",
  },
  allDesign: {
    flex: 1,
    marginTop: 25,
    height: "100%",
  },
  sortContainer: {
    height: 60,
  },
  designList: {
    flex: 1,
    width: "100%",
    height: "10%",
  },
  designGrid: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  gridItem: {
    width: "15%",
    height: "80%",
    marginHorizontal: 50,
    marginVertical: 70,
  },
})

export default MyProjectDetail
