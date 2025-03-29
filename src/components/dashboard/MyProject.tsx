import React, { useState } from "react"
import {
  View,
  StyleSheet,
  FlatList,
  LayoutChangeEvent,
  Text,
} from "react-native"
import CardFolder from "../basicCompos/other/CardFolder"
import SortNew from "../basicCompos/SortNew"
import { RFPercentage } from "react-native-responsive-fontsize"
import FolderList from "../basicCompos/FolderList"
import { DisplayingType } from "../basicCompos/SortNew"

const folders = [
  { id: "1", name: "Account", files: 12, edited: 4 },
  { id: "2", name: "Documents", files: 5, edited: 2 },
  { id: "3", name: "Presentations", files: 2, edited: 3 },
  { id: "4", name: "Finance", files: 4, edited: 5 },
  { id: "5", name: "Product Team", files: 32, edited: 6 },
  { id: "6", name: "News", files: 8, edited: 7 },
  { id: "7", name: "Content Pro", files: 11, edited: 5 },
  { id: "8", name: "Goals", files: 15, edited: 7 },
  { id: "9", name: "Dev Ops", files: 25, edited: 10 },
  { id: "10", name: "Management", files: 4, edited: 12 },
  { id: "11", name: "Operations", files: 9, edited: 24 },
  { id: "12", name: "Performance", files: 32, edited: 11 },
  { id: "13", name: "Performance", files: 32, edited: 1 },
  { id: "14", name: "Performance", files: 32, edited: 2 },
  { id: "15", name: "Performance", files: 32, edited: 4 },
  { id: "16", name: "Performance", files: 32, edited: 3 },
  { id: "17", name: "Performance", files: 32, edited: 5 },
  { id: "18", name: "Performance", files: 32, edited: 3 },
  { id: "19", name: "Performance", files: 32, edited: 5 },
]

const MyProject = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [shownFolders, setShownFolders] = useState(folders)
  const [displayType, setDisplayType] = useState<DisplayingType>("Grid")

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }
  return (
    <View style={styles.container} onLayout={onLayout}>
      {/* Sort */}
      <View style={[styles.sortContainer, { height: size.height * 0.1 }]}>
        <SortNew
          defaultDesigns={shownFolders}
          defaultDisplayType={displayType}
          onSorted={setShownFolders}
          onDisplayTypeChange={setDisplayType}
        />
      </View>

      {/* Folders*/}
      {displayType === "Grid" ? (
        // Grid
        <FlatList
          key={displayType}
          data={shownFolders}
          keyExtractor={(item) => item.id}
          numColumns={4}
          columnWrapperStyle={[
            styles.itemGrid,
            { paddingHorizontal: size.width * 0.032 },
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No folders</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.itemCard} key={item.id}>
              <CardFolder files={item.files} name={item.name} id={item.id} />
            </View>
          )}
        />
      ) : (
        // List
        <FlatList
          key={displayType}
          data={shownFolders}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No folders</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{ paddingHorizontal: size.width * 0.024 }}
            >
              <FolderList id={item.id} name={item.name} size={item.files} />
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderRadius: 20,
  },
  sortContainer: {
    width: "100%",
  },
  itemGrid: {
    justifyContent: "flex-start",
  },
  itemCard: {
    width: "23%",
    margin: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: RFPercentage(2.5),
    color: "#555",
  },
})

export default MyProject
