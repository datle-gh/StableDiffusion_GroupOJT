import {
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native"
import {
  BRIGHTNESS,
  GRAYSCALE,
  INVERT,
  SUNSET,
  CYAN_EFFECT,
  VINTAGE,
  WARM_EFFECT,
  COLD_EFFECT,
} from "../../../constants/filterMatrix"
import ColorFilterImage from "./FilterButton"
import FilterTabButton from "./CustomFIlterButton"

const FilterBoard = ({
  imageUri,
}: {
  imageUri: ImageSourcePropType | string
}) => {
  return (
    <View style={styles.container}>
      <ColorFilterImage imageUri={imageUri} matrix={GRAYSCALE} />
      <ColorFilterImage imageUri={imageUri} matrix={BRIGHTNESS} />
      <ColorFilterImage imageUri={imageUri} matrix={COLD_EFFECT} />
      <ColorFilterImage imageUri={imageUri} matrix={INVERT} />
      <ColorFilterImage imageUri={imageUri} matrix={SUNSET} />
      <ColorFilterImage imageUri={imageUri} matrix={CYAN_EFFECT} />
      <ColorFilterImage imageUri={imageUri} matrix={VINTAGE} />
      <ColorFilterImage imageUri={imageUri} matrix={WARM_EFFECT} />
      <FilterTabButton imageUri={imageUri} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
})

export default FilterBoard
