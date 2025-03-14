import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState, useEffect } from "react"
import { Picker } from "@react-native-picker/picker"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import AntDesign from "react-native-vector-icons/AntDesign"

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
]

const MyProjectDetail = () => {
  const [itemData, setItemData] = useState<Design[]>(designs)
  //lưu trữ danh sách các item
  const [data, setData] = useState<Design[]>(designs)
  //lưu trữ giá trị sort hiện tại
  const [selectedSort, setSelectedSort] = useState<string>("newest")
  //hàm xử lý lựa chọn của người dùng.

  const handleSort = (sortStype: string) => {
    let sortedData = [...data]
    switch (sortStype) {
      case "newest":
        sortedData.sort((a, b) => a.edited - b.edited)
        setItemData(sortedData)
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
    handleSort(selectedSort)
  }, [])

  //hàm xử lý khi người dùng thay đổi sort
  function onChangeSortValue(value: string) {
    setSelectedSort(value)
    handleSort(value)
  }

  return (
    <ScrollView>
      <View style={Style.Container}>
        <View>
          <TouchableOpacity style={Style.row}>
            <FontAwesome6 name="angle-left" size={17} coler="#2F4F4F" />
            <Text style={Style.Text1}>Project name</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.Button2}>
          <View style={Style.NewDesign}>
            <TouchableOpacity style={Style.rowRow}>
              <View style={Style.backgroundIcon}>
                <MaterialCommunityIcons
                  name="border-color"
                  size={25}
                  style={Style.Icon}
                />
              </View>
              <Text style={Style.Text1}>New design</Text>
              <MaterialCommunityIcons name="plus" size={25} />
            </TouchableOpacity>
          </View>

          <View style={Style.Upload}>
            <TouchableOpacity style={Style.rowRow}>
              <View style={Style.backgroundIcon}>
                <Ionicons
                  name="cloud-upload-outline"
                  size={25}
                  style={Style.Icon2}
                />
              </View>
              <Text style={Style.Text1}>Upload</Text>
              <MaterialCommunityIcons name="plus" size={25} />
            </TouchableOpacity>
          </View>

          <View style={Style.Import}>
            <TouchableOpacity style={Style.rowRow}>
              <View style={Style.backgroundIcon}>
                <Fontisto name="import" size={23} style={Style.Icon3} />
              </View>
              <Text style={Style.Text1}>Import</Text>
              <MaterialCommunityIcons name="plus" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Style.RecentDesign}>
          <Text style={Style.Text2}>Recent designs</Text>
          <FlatList
            horizontal
            data={itemData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              if (item.edited <= 3) {
                return (
                  <View style={{ paddingRight: 30, marginTop: 20 }}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={Style.ImageRecent}
                    />
                    <Text style={Style.Text3}>{item.name}</Text>
                    <Text style={{ fontSize: 10 }}>
                      Edited {item.edited} days ago
                    </Text>
                  </View>
                )
              }
              return null
            }}
          />
        </View>

        <View style={Style.AllDesign}>
          <Text style={Style.Text2}>All design</Text>
          <View style={Style.buttonAllDesign}>
            <Picker
              style={Style.picker}
              selectedValue={selectedSort}
              onValueChange={onChangeSortValue}
            >
              <Picker.Item label="Sort: Newest first" value="newest" />
              <Picker.Item label="Sort: Oldest first" value="oldest" />
            </Picker>

            <TouchableOpacity
              style={[Style.borderIconAntDesign, { marginLeft: 1150 }]}
            >
              <AntDesign name="bars" size={27} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Style.borderIconAntDesign,
                { marginLeft: 20, paddingTop: 3, paddingLeft: 3 },
              ]}
            >
              <AntDesign name="appstore-o" size={22} />
            </TouchableOpacity>
          </View>
          <View style={Style.HeaderTable}>
            <View style={[Style.Colum, { flex: 5 }]}>
              <Text style={Style.TextHeaderTable}>Name</Text>
            </View>
            <View style={[Style.Colum, { flex: 2 }]}>
              <Text style={Style.TextHeaderTable}>Size</Text>
            </View>
            <View style={[Style.Colum, { flex: 3 }]}>
              <Text style={Style.TextHeaderTable}>Last viewed</Text>
            </View>
          </View>
          <View>
            {data.map((item) => (
              <View style={Style.AllItem}>
                <View style={[Style.Colum, { flex: 5 }]}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View>
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={Style.ImageOfAllItem}
                      />
                    </View>
                    <View>
                      <Text style={[Style.TextOfAllItem, { marginLeft: 15 }]}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[Style.Colum, { flex: 2 }]}>
                  <Text style={Style.TextOfAllItem}>{item.size}</Text>
                </View>
                <View style={[Style.Colum, { flex: 2 }]}>
                  <Text style={Style.TextOfAllItem}>
                    {item.edited} days ago
                  </Text>
                </View>
                <TouchableOpacity style={[Style.Colum, { flex: 1 }]}>
                  <AntDesign name="ellipsis1" size={20} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rowRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    marginTop: 18,
  },
  Text1: {
    fontFamily: "Arial",
    fontSize: 13,
  },
  Button2: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  NewDesign: {
    backgroundColor: "#EBE7FE",
    width: 200,
    height: 80,
    borderRadius: 10,
  },
  backgroundIcon: {
    backgroundColor: "#FFFFFF",
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  Icon: {
    paddingLeft: 10,
    paddingTop: 12,
  },
  Upload: {
    backgroundColor: "#E3F7C5",
    width: 200,
    height: 80,
    borderRadius: 10,
  },
  Icon2: {
    paddingLeft: 11,
    paddingTop: 10,
  },
  Import: {
    backgroundColor: "#FFE8D6",
    width: 200,
    height: 80,
    borderRadius: 10,
  },
  Icon3: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  Text2: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 16,
  },
  ImageRecent: {
    width: 200,
    height: 110,
    borderRadius: 10,
  },
  Text3: {
    fontFamily: "Arial",
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 13,
  },
  RecentDesign: {
    marginTop: 40,
  },
  picker: {
    width: 120,
    height: 30,
    borderColor: "#989898",
    borderWidth: 1.2,
    borderRadius: 10,
    padding: 4,
    fontSize: 11,
  },
  AllItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  ImageOfAllItem: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  TextOfAllItem: {
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: "bold",
  },
  AllDesign: {
    marginTop: 25,
  },
  buttonAllDesign: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  borderIconAntDesign: {
    width: 30,
    height: 30,
    borderColor: "#989898",
    borderWidth: 1.2,
    borderRadius: 7,
  },
  HeaderTable: {
    flexDirection: "row",
  },
  TextHeaderTable: {
    fontSize: 13,
    marginTop: 15,
    color: "#484848",
  },
  Colum: {
    justifyContent: "center",
  },
})

export default MyProjectDetail
