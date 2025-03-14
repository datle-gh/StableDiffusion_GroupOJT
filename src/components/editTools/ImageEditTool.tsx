import { ImageSourcePropType, ScrollView, StyleSheet, View } from "react-native"
import Title from "../basicCompos/other/Tilte"
import FilterBoard from "../basicCompos/filter/FilterBoard"
import SlideBar from "../basicCompos/other/SlideBar"
import { useState } from "react"
import RatioEditor from "../basicCompos/bigEditor/RatioEditor"
import TabButton1 from "../basicCompos/TabButton1"
import FlipEditor from "../basicCompos/bigEditor/FlipEditor"
import InputNumber from "../basicCompos/input/InputNumber"
import angle from "../../../assets/icons/angle.png"

const ImageEditTool = ({ imageUri }: { imageUri: ImageSourcePropType }) => {
  const [saturation, setSaturation] = useState(0)
  const [brightness, setBrightness] = useState(0)
  const [contrast, setContrast] = useState(0)
  const [highlights, setHighlights] = useState(0)
  const [shadows, setShadows] = useState(0)
  const [aspectRatio, setAspectRatio] = useState(1)
  const [isReplaced, setIsReplaced] = useState(false)
  const [isRemoveBg, setIsRemoveBg] = useState(false)
  const [flip, setFlip] = useState("vertical")
  const [anglePercentage, setAnglePercentage] = useState("90")

  return (
    <View style={styles.container}>
      <ScrollView>
        <Title headerTitle="Aspect Ratio">
          <RatioEditor onAspectRatioChange={setAspectRatio} />
        </Title>
        <Title headerTitle="Edit image">
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ width: "50%" }}>
              <TabButton1
                icon={imageUri}
                title="Replace"
                onPress={() => setIsReplaced((prev) => !prev)}
                isActive={isReplaced}
              />
            </View>
            <View style={{ width: "50%" }}>
              <TabButton1
                icon={imageUri}
                title="Remove BG"
                onPress={() => setIsRemoveBg((prev) => !prev)}
                isActive={isRemoveBg}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <View style={{ width: "50%" }}>
              <FlipEditor onFlipChange={setFlip} />
            </View>
            <View style={{ width: "50%" }}>
              <InputNumber
                icon={angle}
                onChange={setAnglePercentage}
                showPercentage={true}
                value={anglePercentage}
              />
            </View>
          </View>
        </Title>
        <Title headerTitle="Filter">
          <FilterBoard imageUri={imageUri} />
        </Title>
        <Title headerTitle="Light">
          <SlideBar
            label="Saturation"
            onValueChange={setSaturation}
            fixedPoint={0}
            initialValue={saturation}
            maximumValue={100}
            minimumValue={-100}
            step={1}
          />
          <SlideBar
            label="Brightness"
            onValueChange={setBrightness}
            fixedPoint={0}
            initialValue={brightness}
            maximumValue={100}
            minimumValue={-100}
            step={1}
          />
          <SlideBar
            label="Contrast"
            onValueChange={setContrast}
            fixedPoint={0}
            initialValue={contrast}
            isPercent
            maximumValue={100}
            minimumValue={0}
            step={1}
          />
          <SlideBar
            label="Highlights"
            onValueChange={setHighlights}
            fixedPoint={0}
            initialValue={highlights}
            maximumValue={50}
            minimumValue={-50}
            step={1}
          />
          <SlideBar
            label="Shadows"
            onValueChange={setShadows}
            fixedPoint={0}
            initialValue={shadows}
            maximumValue={50}
            minimumValue={0}
            step={1}
          />
        </Title>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "25%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
})

export default ImageEditTool
