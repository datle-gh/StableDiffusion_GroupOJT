import React, { useState, useRef, useEffect } from "react"
import { View, StyleSheet, ScrollView, ImageSourcePropType } from "react-native"
import Svg, {
  Defs,
  Filter,
  FeColorMatrix,
  FeGaussianBlur,
  Image as SvgImage,
} from "react-native-svg"
import SlideBar from "../other/SlideBar"

const AdjustableFilterImage = ({
  imageUri,
}: {
  imageUri: ImageSourcePropType | string
}) => {
  const [blur, setBlur] = useState(0)
  const [contrast, setContrast] = useState(1)
  const [saturation, setSaturation] = useState(1)
  const [brightness, setBrightness] = useState(1)
  const [hue, setHue] = useState(0)
  const [negative, setNegative] = useState(0)
  const [sepia, setSepia] = useState(0)
  const [temperature, setTemperature] = useState(0)
  const [exposure, setExposure] = useState(1)

  // Ma trận bộ lọc màu dựa trên giá trị slider
  const colorMatrix = [
    contrast * (1 - negative),
    saturation * (1 - sepia),
    hue,
    0,
    temperature,
    hue,
    contrast,
    saturation * (1 - sepia),
    0,
    temperature,
    hue,
    hue,
    contrast * (1 - sepia),
    0,
    exposure,
    0,
    0,
    0,
    1,
    0,
  ]

  return (
    <View style={styles.container}>
      <Svg height={300} width={300}>
        <Defs>
          <Filter id="imageFilter">
            <FeGaussianBlur stdDeviation={blur} />
            <FeColorMatrix type="matrix" values={colorMatrix.join(" ")} />
          </Filter>
        </Defs>
        <SvgImage
          href={imageUri === "string" ? { uri: imageUri } : imageUri}
          height="100%"
          width="100%"
          filter="url(#imageFilter)"
        />
      </Svg>

      {/* Các thanh điều chỉnh thông số sử dụng SlideBar */}
      <ScrollView style={styles.controls}>
        <SlideBar
          label="Blur"
          minimumValue={0}
          maximumValue={10}
          initialValue={blur}
          step={0.1}
          fixedPoint={1}
          onValueChange={setBlur}
        />
        <SlideBar
          label="Contrast"
          minimumValue={0}
          maximumValue={2}
          initialValue={contrast}
          step={0.1}
          fixedPoint={1}
          onValueChange={setContrast}
        />
        <SlideBar
          label="Saturation"
          minimumValue={0}
          maximumValue={2}
          initialValue={saturation}
          step={0.1}
          fixedPoint={1}
          onValueChange={setSaturation}
        />
        <SlideBar
          label="Brightness"
          minimumValue={0}
          maximumValue={2}
          initialValue={brightness}
          step={0.1}
          fixedPoint={1}
          onValueChange={setBrightness}
        />
        <SlideBar
          label="Hue"
          minimumValue={-1}
          maximumValue={1}
          initialValue={hue}
          step={0.1}
          fixedPoint={1}
          onValueChange={setHue}
        />
        <SlideBar
          label="Negative"
          minimumValue={0}
          maximumValue={1}
          initialValue={negative}
          step={0.1}
          fixedPoint={1}
          onValueChange={setNegative}
        />
        <SlideBar
          label="Sepia"
          minimumValue={0}
          maximumValue={1}
          initialValue={sepia}
          step={0.1}
          fixedPoint={1}
          onValueChange={setSepia}
        />
        <SlideBar
          label="Temperature"
          minimumValue={-1}
          maximumValue={1}
          initialValue={temperature}
          step={0.1}
          fixedPoint={1}
          onValueChange={setTemperature}
        />
        <SlideBar
          label="Exposure"
          minimumValue={0.5}
          maximumValue={2}
          initialValue={exposure}
          step={0.1}
          fixedPoint={1}
          onValueChange={setExposure}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  controls: {
    width: "100%",
    marginTop: 20,
  },
})

export default AdjustableFilterImage
