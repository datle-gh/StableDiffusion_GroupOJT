import React, { useState } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  Image,
} from "react-native"
import plus from "../../../../assets/icons/plus.png"
import Modal from "react-native-modal"
import AdjustableFilterImage from "./CustomFilter"

const screenWidth = Dimensions.get("window").width

const FilterTabButton = ({
  imageUri,
}: {
  imageUri: ImageSourcePropType | string
}) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.container}>
      {/* Nút hình vuông có dấu "+" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsVisible(true)}
      >
        <Image
          source={plus}
          style={{
            width: "50%",
            height: "50%",
          }}
        />
      </TouchableOpacity>

      {/* Modal dạng tab trượt từ bên phải */}
      <Modal
        isVisible={isVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        backdropOpacity={0.3}
        style={styles.modal}
        onBackdropPress={() => setIsVisible(false)}
      >
        <ScrollView>
          <View style={styles.tabContainer}>
            {/* Nút đóng tab */}
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

            <AdjustableFilterImage imageUri={imageUri} />
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  button: {
    width: "90%",
    aspectRatio: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  plus: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  tabContainer: {
    width: screenWidth * 0.25,
    height: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6347",
  },
})

export default FilterTabButton
