import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
  StyleSheet,
} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useState } from "react"
import { RFPercentage } from "react-native-responsive-fontsize"

interface FolderListProps {
  id: string
  name: string
  size: number
}

/**
FolderList component displays information about a folder including:
 * - Folder name
 * - Number of files inside
 * - Folder icon and action menu
 * @param folder - An object containing folder information:
 * @param folder.id - The ID of the folder
 * @param folder.name - The name of the folder
 * @param folder.size - The number of files in the folder
 * @author Tien Dat
 */
const FolderList: React.FC<FolderListProps> = (folder) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }

  return (
    <TouchableOpacity style={styles.allItem} onLayout={onLayout}>
      <View style={{ flex: 5, flexDirection: "row", alignItems: "center" }}>
        <Icon
          style={styles.iconFolderImage}
          name="folder"
          size={size.width * 0.06}
          color="dodgerblue"
        />
        <Text style={styles.textOfAllItem}>{folder.name}</Text>
      </View>
      <View style={{ flex: 2 }}>
        {folder.size > 1 ? (
          <Text style={styles.textOfAllItem}>{folder.size} Files</Text>
        ) : (
          <Text style={styles.textOfAllItem}>{folder.size} File</Text>
        )}
      </View>
      <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
        <AntDesign name="ellipsis1" size={size.width * 0.02} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  allItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  iconFolderImage: {},
  textOfAllItem: {
    fontFamily: "Arial",
    fontSize: RFPercentage(1.1),
    fontWeight: "bold",
  },
})
1
export default FolderList
