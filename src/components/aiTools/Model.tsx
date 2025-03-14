import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native"
import model from "../../../assets/image/ModelImage/ModelImage.png"

interface ModelItem {
  id: string
  image: ImageSourcePropType
}

const models: ModelItem[] = [
  { id: "1", image: model },
  { id: "2", image: model },
  { id: "3", image: model },
  { id: "4", image: model },
  { id: "5", image: model },
  { id: "6", image: model },
]

const ModelTool: React.FC = () => {
  const [search, setSearch] = useState<string>("")

  const filteredModels = models.filter((model) => model.id.includes(search))

  return (
    <View style={styles.container}>
      <Text style={styles.header}>3D model</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredModels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.image} />
        )}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
})

export default ModelTool
