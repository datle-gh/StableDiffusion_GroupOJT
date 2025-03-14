import { Picker } from "@react-native-picker/picker"
import React, { useState, useEffect } from "react"
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"

const designs = [
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
]

const TrashColum = () => {
  const [data, setData] = useState(designs)

  const [sortData, setSortData] = useState("newest")

  const handSort = (stypeSort: string) => {
    let sortedData = [...data]
    switch (stypeSort) {
      case "newest":
        sortedData.sort((a, b) => a.edited - b.edited)
        break
      case "oldest":
        sortedData.sort((a, b) => b.edited - a.edited)
        break
      default:
        break
    }
    setData(sortedData)
  }

  useEffect(() => {
    handSort(sortData)
  }, [])

  function onChangeSortValue(value: string) {
    setSortData(value)
    handSort(value)
  }

  return (
    <ScrollView>
      <View style={Style.Container}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Picker
              selectedValue={sortData}
              onValueChange={onChangeSortValue}
              style={Style.Picker}
            >
              <Picker.Item label="Sort: Newest first" value="newest" />
              <Picker.Item label="Sort: Oldest first" value="oldest" />
            </Picker>
          </View>
          <View>
            <TouchableOpacity
              style={[Style.borderIconAntDesign, { marginLeft: 1150 }]}
            >
              <AntDesign name="bars" size={27} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[
                Style.borderIconAntDesign,
                { marginLeft: 20, paddingTop: 3, paddingLeft: 3 },
              ]}
            >
              <AntDesign name="appstore-o" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Style.ContaierItem}>
          {data.map((Item) => (
            <View style={Style.Item}>
              <Image source={{ uri: Item.imageUrl }} style={Style.ImageItem} />
              <Text style={Style.TextName}>{Item.name}</Text>
              <Text style={Style.TextDay}>Edited {Item.edited} days ago</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  Picker: {
    width: 120,
    height: 30,
    borderColor: "#989898",
    borderWidth: 1.2,
    borderRadius: 10,
    padding: 4,
    fontSize: 11,
  },
  borderIconAntDesign: {
    width: 30,
    height: 30,
    borderColor: "#989898",
    borderWidth: 1.2,
    borderRadius: 7,
  },
  ImageItem: {
    width: 280,
    height: 160,
    borderRadius: 10,
  },
  ContaierItem: {
    marginRight: 60,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Item: {
    width: "25%",
    marginTop: 50,
  },
  TextName: {
    fontSize: 15,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 3,
  },
  TextDay: {
    fontSize: 12,
    fontFamily: "Arial",
    color: "#484848",
    marginLeft: 3,
  },
})

export default TrashColum
