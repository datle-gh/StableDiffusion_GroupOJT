import { useState } from "react"
import AlignEditor from "../basicCompos/bigEditor/AlignEditor"
import Title from "../basicCompos/other/Tilte"
import { ScrollView, StyleSheet, View } from "react-native"
import InputDropdown from "../basicCompos/input/InputDropdown"
import InputNumber from "../basicCompos/input/InputNumber"
import lettercase from "../../../assets/icons/text/letter-case.png"
import letterspacing from "../../../assets/icons/text/letter-spacing.png"
import lineheight from "../../../assets/icons/text/text-color.png"
import spacinghorizontal from "../../../assets/icons/text/spacing-horizontal.png"
import spacingvertical from "../../../assets/icons/text/spacing-vertical.png"
import TextAlignEditor from "../basicCompos/bigEditor/TextAlignEditor"
import ColorBoard from "../basicCompos/colorBoard/ColorBoard"

const FontOptions = [
  { label: "Arial", value: "Arial" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Courier New", value: "Courier New" },
  { label: "Verdana", value: "Verdana" },
  { label: "Georgia", value: "Georgia" },
]

const FontWeightOptions = [
  { label: "Normal", value: "normal" },
  { label: "Bold", value: "bold" },
  { label: "Bolder", value: "bolder" },
  { label: "SemiBold", value: "semiBold" },
  { label: "Light", value: "light" },
]

const TextEditTool = () => {
  const [align, setAlign] = useState("left")
  const [font, setFont] = useState("Arial")
  const [fontWeight, setFontWeight] = useState("normal")
  const [letterCase, setLetterCase] = useState("14px")
  const [letterSpacing, setLetterSpacing] = useState("0")
  const [lineHeight, setLineHeight] = useState("0")
  const [spacingHorizontal, setSpacingHorizontal] = useState("0")
  const [spacingVertical, setSpacingVertical] = useState("0")
  const [textAlign, setTextAlign] = useState("left")
  const [colorBackground, setColorBackground] = useState("#ed1111")

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title headerTitle="Align">
          <AlignEditor onAlignChange={setAlign} />
        </Title>

        <Title headerTitle="Text">
          <View style={styles.section}>
            <InputDropdown
              label="Font"
              onSelect={setFont}
              options={FontOptions}
            />
          </View>

          <View style={styles.row}>
            <View style={{ width: "50%" }}>
              <InputDropdown
                label="Font weight"
                options={FontWeightOptions}
                onSelect={setFontWeight}
              />
            </View>
            <View style={{ width: "50%" }}>
              <InputNumber
                icon={lettercase}
                onChange={setLetterCase}
                value={letterCase}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ width: "50%" }}>
              <InputNumber
                icon={letterspacing}
                onChange={setLetterSpacing}
                value={letterSpacing}
                showPercentage={true}
              />
            </View>
            <View style={{ width: "50%" }}>
              <InputNumber
                icon={lineheight}
                onChange={setLineHeight}
                value={lineHeight}
                showPercentage={true}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ width: "50%" }}>
              <InputNumber
                icon={spacinghorizontal}
                onChange={setSpacingHorizontal}
                value={spacingHorizontal}
                showPercentage={true}
              />
            </View>
            <View style={{ width: "50%" }}>
              <InputNumber
                icon={spacingvertical}
                onChange={setSpacingVertical}
                value={spacingVertical}
                showPercentage={true}
              />
            </View>
          </View>

          <TextAlignEditor onTextAlignChange={setTextAlign} />
        </Title>

        <Title headerTitle="Background">
          <ColorBoard
            onColorSelect={setColorBackground}
            value={colorBackground}
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
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 10,
    justifyContent: "center",
  },
})

export default TextEditTool
