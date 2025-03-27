import React from "react"
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { RFPercentage } from "react-native-responsive-fontsize"

interface ProjectListProps {
  id: string // Unique project ID
  imageUrl: string // URL of the project's representative image
  name: string // Project name
  size?: string // Project size (could be file size or dimensions)
  edited: number // Number of days since last edit
}

/**
 * Project list component that displays a list of projects with detailed information.
 *
 * @param {Object} props - Component properties.
 * @param {ProjectListProps[]} props.projects - The list of projects to be displayed.
 * @returns
 */
const ProjectList = ({ projects }: { projects: ProjectListProps[] }) => {
  return (
    <View style={styles.listContainer}>
      {/* Table header */}
      <View style={styles.headerTable}>
        <View style={{ flex: 4.9 }}>
          <Text style={styles.textHeaderTable}>Name</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.textHeaderTable}>Size</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.textHeaderTable}>Last viewed</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      {/* List of projects */}
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No folders</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.allItem}>
            <View
              style={{ flex: 5, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.imageOfAllItem}
              />
              <Text style={[styles.textOfAllItem, { marginLeft: 15 }]}>
                {item.name}
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.textOfAllItem}>{item.size}</Text>
            </View>
            <View style={{ flex: 2 }}>
              {item.edited === 1 ? (
                <Text style={styles.textOfAllItem}>{item.edited} day ago</Text>
              ) : (
                <Text style={styles.textOfAllItem}>{item.edited} days ago</Text>
              )}
            </View>
            <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
              <AntDesign name="ellipsis1" size={20} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
    maxHeight: 480,
    alignContent: "center",
  },
  headerTable: {
    flexDirection: "row",
  },
  textHeaderTable: {
    fontSize: 15,
    color: "#484848",
  },
  allItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  imageOfAllItem: {
    width: "9%",
    aspectRatio: 1,
    borderRadius: 5,
  },
  textOfAllItem: {
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: "bold",
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

export default ProjectList
