import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"

import Image11 from "../../../assets/images/text-effect/image11.png"
import Image12 from "../../../assets/images/text-effect/image12.png"
import Image13 from "../../../assets/images/text-effect/image13.png"
import Image14 from "../../../assets/images/text-effect/image14.png"
import Image15 from "../../../assets/images/text-effect/image15.png"
import Image16 from "../../../assets/images/text-effect/image16.png"
import Image17 from "../../../assets/images/text-effect/image17.png"
import Image18 from "../../../assets/images/text-effect/image18.png"

const images: ImageSourcePropType[] = [
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
]

interface RenderItemProps {
  item: ImageSourcePropType
}

const TextEffectTool: React.FC = () => {
  const renderItem = ({ item }: RenderItemProps) => (
    <TouchableOpacity activeOpacity={0.7}>
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Text Effect</Text>

      <View style={styles.searchContainer}>
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.imageList}
      />
    </View>
  )
}

export default TextEffectTool

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 216,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "#F7F7F7",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  imageList: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 150,
  },
  image: {
    width: 216,
    height: 88,
    marginBottom: 8,
    borderRadius: 8,
  },
})
