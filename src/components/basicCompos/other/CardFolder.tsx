import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  LayoutChangeEvent,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useState } from "react"
import { RFPercentage } from "react-native-responsive-fontsize"

interface Folder {
  id: string
  name: string
  files: number
}

/**
 * CardFolder component displays a folder card with the folder's name and number of files inside.
 * It includes a folder icon and an ellipsis icon to represent actions.
 *
 * @author Tien Dat
 * @param {Object} folder - The object containing the folder's information.
 * @param {string} folder.id - The ID of the folder.
 * @param {string} folder.name - The name of the folder.
 * @param {number} folder.files - The number of files inside the folder.
 */
const CardFolder: React.FC<Folder> = (folder) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }

  return (
    <TouchableOpacity style={styles.container} onLayout={onLayout}>
      <View
        style={[styles.iconFolder, { marginHorizontal: size.width * 0.03 }]}
      >
        <Icon
          style={styles.iconFolderImage}
          name="folder"
          size={size.width * 0.23}
          color="dodgerblue"
        />
        <TouchableOpacity>
          <AntDesign name="ellipsis1" size={size.width * 0.12} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.textContainer,
          { marginBottom: size.height * 0.08, marginLeft: size.width * 0.05 },
        ]}
      >
        <Text style={styles.folderName}>{folder.name}</Text>
        {folder.files > 1 ? (
          <Text style={styles.folderNumber}>{folder.files} Files</Text>
        ) : (
          <Text style={styles.folderNumber}>{folder.files} File</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    justifyContent: "center",
  },
  iconFolder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconFolderImage: {},
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  folderName: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  folderNumber: {
    fontSize: RFPercentage(1.3),
    fontFamily: "Arial",
    color: "#484848",
    marginTop: 6,
  },
})

export default CardFolder
