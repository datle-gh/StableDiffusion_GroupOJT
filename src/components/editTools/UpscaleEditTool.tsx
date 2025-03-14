import { View, Animated, StyleSheet, LayoutChangeEvent } from "react-native"
import TabButton1 from "../basicCompos/TabButton1"
import SlideBar from "../basicCompos/other/SlideBar"
import Title from "../basicCompos/other/Tilte"
import aperture from "../../../assets/icons/ai-model/aperture.png"
import photosensor2 from "../../../assets/icons/ai-model/photo-sensor-2.png"
import photosensor3 from "../../../assets/icons/ai-model/photo-sensor-3.png"
import grain from "../../../assets/icons/ai-model/grain.png"
import photo_ai from "../../../assets/icons/advanced-upscale/photo-ai.png"
import live_photo from "../../../assets/icons/advanced-upscale/live-photo.png"
import mood_smile from "../../../assets/icons/advanced-upscale/mood-smile.png"
import color_swatch from "../../../assets/icons/advanced-upscale/color-swatch.png"
import InputSwitch from "../basicCompos/input/InputSwitch"
import InputDropdown from "../basicCompos/input/InputDropdown"
import AccelerateEditor from "../basicCompos/bigEditor/AccelerateEditor"
import { ScrollView } from "react-native-gesture-handler"
import { useRef, useState } from "react"

const UpscaleEditTool = () => {
  const [modelMode, setModelMode] = useState("raw")
  const [generalModel, setGeneralModel] = useState(false)
  const [deniseModel, setDeniseModel] = useState(false)
  const [faceModel, setFaceModel] = useState(false)
  const [colorizeModel, setColorizeModel] = useState(false)
  const [resolution, setResolution] = useState("low")
  const [accelerate, setAccelerate] = useState(false)

  const [contentHeight, setContentHeight] = useState<number>(0)
  const [buttonHeight, setButtonHeight] = useState<number>(0)
  const [buttonWidth, setButtonWidth] = useState<number>(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const translateY = useRef(new Animated.Value(0)).current

  const handlePress = (index: number) => {
    setActiveIndex(index)
    Animated.spring(translateY, {
      toValue: index * (contentHeight / aiModelOptions.length),
      useNativeDriver: true,
    }).start()
  }

  const getLayoutHeight = (event: LayoutChangeEvent) => {
    return event.nativeEvent.layout.height
  }
  const getLayoutWidth = (event: LayoutChangeEvent) => {
    return event.nativeEvent.layout.width
  }

  const aiModelOptions = [
    {
      icon: aperture,
      label: "Using raw image data",
      onPress: (index: number) => {
        setModelMode("raw")
        handlePress(index)
      },
    },
    {
      icon: photosensor2,
      label: "Subjected detected",
      onPress: (index: number) => {
        setModelMode("detected")
        handlePress(index)
      },
    },
    {
      icon: photosensor3,
      label: "Subjected in focus",
      onPress: (index: number) => {
        setModelMode("focus")
        handlePress(index)
      },
    },
    {
      icon: grain,
      label: "Image noise level is medium",
      onPress: (index: number) => {
        handlePress(index)
      },
    },
  ]

  const advanceOptions = [
    {
      icon: photo_ai,
      label: "General model",
      onPress: () => {
        setGeneralModel(!generalModel)
      },
      defaultValue: false,
    },
    {
      icon: live_photo,
      label: "Denise model",
      onPress: () => {
        setDeniseModel(!deniseModel)
      },
      defaultValue: false,
    },
    {
      icon: mood_smile,
      label: "Face model",
      onPress: () => {
        setFaceModel(!faceModel)
      },
      defaultValue: false,
    },
    {
      icon: color_swatch,
      label: "Colorize model",
      onPress: () => {
        setColorizeModel(!colorizeModel)
      },
      defaultValue: false,
    },
  ]

  const resolutionOptions = [
    { label: "100% (640x908)", value: "low" },
    { label: "200% (1280x1816)", value: "medium" },
    { label: "300% (1920x2724)", value: "high" },
    { label: "400% (2560x3632)", value: "1080p" },
    { label: "500% (3200x4540)", value: "2K" },
    { label: "600% (3840x5448)", value: "4K" },
    { label: "800% (5120x7264)", value: "8K" },
  ]

  return (
    <View style={{ width: "25%", height: "100%" }}>
      <ScrollView>
        <Title headerTitle="AI Model">
          <Animated.View
            style={[
              styles.activeIndicator,
              {
                height: buttonHeight,
                width: buttonWidth,
                transform: [
                  {
                    translateY: translateY,
                  },
                ],
              },
            ]}
          />
          <View
            onLayout={(event) => {
              setContentHeight(getLayoutHeight(event))
            }}
          >
            {aiModelOptions.map((option, index) => (
              <View
                style={styles.row}
                onLayout={(event) => {
                  setButtonHeight(getLayoutHeight(event))
                  setButtonWidth(getLayoutWidth(event) * 0.98)
                }}
              >
                <TabButton1
                  key={index}
                  icon={option.icon}
                  title={option.label}
                  onPress={() => option.onPress(index)}
                  isActive={activeIndex !== index}
                />
              </View>
            ))}
          </View>
        </Title>
        <Title headerTitle="Advanced">
          {advanceOptions.map((option, index) => (
            <View style={styles.row}>
              <InputSwitch
                icon={option.icon}
                label={option.label}
                onChange={option.onPress}
                defaultValue={option.defaultValue}
              />
            </View>
          ))}
        </Title>
        <Title headerTitle="Resolution">
          <View>
            <InputDropdown
              options={resolutionOptions}
              onSelect={setResolution}
            />
          </View>
        </Title>
        <Title headerTitle="Accelerate">
          <AccelerateEditor onAccelerateChange={setAccelerate} />
        </Title>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
  },
  activeIndicator: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
  },
})

export default UpscaleEditTool
