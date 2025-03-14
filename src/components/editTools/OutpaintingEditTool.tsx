import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SlideBar from "../basicCompos/other/SlideBar"

interface OutpaintingSettingsProps {
  onSettingsChange: (settings: OutpaintingOptions) => void
}

interface OutpaintingOptions {
  aspectRatio: string
  samplingMethod: string
  maskedContent: string
  maskingMode: string
  cfgScale: number
  denoisingStrength: number
}

const aspectRatioImages = [
  require("../../../../assets/image/icons/ima7.png"),
  require("../../../../assets/image/icons/ima8.png"),
  require("../../../../assets/image/icons/ima9.png"),
  require("../../../../assets/image/icons/ima10.png"),
  require("../../../../assets/image/icons/ima11.png"),
]

const aspectRatios = ["1:1", "4:3", "3:4", "16:9", "9:16"]
const samplingMethods = ["Euler", "LMS", "Heun", "DDIM", "DPM"]
const maskedContentOptions = ["Fill", "Original", "L. Noise", "Nothing"]
const maskingModes = ["Inpaint masked", "Inpaint not masked"]

type SectionKey =
  | "aspectRatio"
  | "samplingMethod"
  | "maskedContent"
  | "maskingMode"
  | "advanced"

/**
 * !Update the ImageSettings component
 */
const OutpaintingEditTool: React.FC<OutpaintingSettingsProps> = ({
  onSettingsChange,
}) => {
  const [settings, setSettings] = useState<OutpaintingOptions>({
    aspectRatio: "1:1",
    samplingMethod: "Euler",
    maskedContent: "Fill",
    maskingMode: "Inpaint masked",
    cfgScale: 10,
    denoisingStrength: 0.85,
  })

  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    aspectRatio: true,
    samplingMethod: true,
    maskedContent: true,
    maskingMode: true,
    advanced: true,
  })

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  useEffect(() => {
    onSettingsChange(settings)
  }, [settings, onSettingsChange])

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("aspectRatio")}
        >
          <Text style={styles.sectionTitle}>Aspect ratio</Text>
          <Ionicons
            name={expandedSections.aspectRatio ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        {expandedSections.aspectRatio && (
          <View style={styles.sectionContent}>
            <View style={styles.optionsGrid}>
              {aspectRatioImages.map((image, index) => (
                <TouchableOpacity
                  key={aspectRatios[index]}
                  style={[
                    styles.optionBox,
                    settings.aspectRatio === aspectRatios[index] &&
                      styles.selectedOption,
                  ]}
                  onPress={() =>
                    setSettings({
                      ...settings,
                      aspectRatio: aspectRatios[index],
                    })
                  }
                >
                  <Image source={image} style={styles.optionImage} />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.ratioPreviewContainer}>
              <GridLines />
              <View
                style={[
                  styles.ratioPreview,
                  getRatioStyle(settings.aspectRatio),
                ]}
              />
            </View>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("samplingMethod")}
        >
          <Text style={styles.sectionTitle}>Sampling method</Text>
          <Ionicons
            name={
              expandedSections.samplingMethod ? "chevron-down" : "chevron-up"
            }
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        {expandedSections.samplingMethod && (
          <View style={styles.sectionContent}>
            <View style={styles.optionsGrid}>
              {samplingMethods.map((method) => (
                <TouchableOpacity
                  key={method}
                  style={[
                    styles.optionBox,
                    settings.samplingMethod === method && styles.selectedOption,
                  ]}
                  onPress={() =>
                    setSettings({ ...settings, samplingMethod: method })
                  }
                >
                  <Text
                    style={[
                      styles.buttonText,
                      settings.samplingMethod === method &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {method}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("maskedContent")}
        >
          <Text style={styles.sectionTitle}>Masked content</Text>
          <Ionicons
            name={
              expandedSections.maskedContent ? "chevron-down" : "chevron-up"
            }
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        {expandedSections.maskedContent && (
          <View style={styles.sectionContent}>
            <View style={styles.optionsGrid}>
              {maskedContentOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionBox,
                    settings.maskedContent === option && styles.selectedOption,
                  ]}
                  onPress={() =>
                    setSettings({ ...settings, maskedContent: option })
                  }
                >
                  <Text
                    style={[
                      styles.buttonText,
                      settings.maskedContent === option &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("maskingMode")}
        >
          <Text style={styles.sectionTitle}>Masking mode</Text>
          <Ionicons
            name={expandedSections.maskingMode ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        {expandedSections.maskingMode && (
          <View style={styles.sectionContent}>
            <View style={styles.optionsGrid}>
              {maskingModes.map((mode) => (
                <TouchableOpacity
                  key={mode}
                  style={[
                    styles.optionBox,
                    settings.maskingMode === mode && styles.selectedOption,
                  ]}
                  onPress={() =>
                    setSettings({ ...settings, maskingMode: mode })
                  }
                >
                  <Text
                    style={[
                      styles.buttonText,
                      settings.maskingMode === mode &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {mode}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("advanced")}
        >
          <Text style={styles.sectionTitle}>Advanced</Text>
          <Ionicons
            name={expandedSections.advanced ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        {expandedSections.advanced && (
          <View style={styles.sectionContent}>
            <View style={styles.section}>
              <SlideBar
                label="CFG Scale"
                minimumValue={1}
                maximumValue={20}
                initialValue={settings.cfgScale}
                step={0.1}
                fixedPoint={1}
                isPercent={false}
                onValueChange={(value) =>
                  setSettings({ ...settings, cfgScale: value })
                }
              />
            </View>
            <View style={styles.section}>
              <SlideBar
                label="Denoising Strength"
                minimumValue={0}
                maximumValue={1}
                initialValue={settings.denoisingStrength}
                step={0.01}
                fixedPoint={2}
                isPercent={true}
                onValueChange={(value) =>
                  setSettings({ ...settings, denoisingStrength: value })
                }
              />
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    width: "100%",
    maxWidth: 360,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    alignSelf: "center",
  },
  section: {
    marginBottom: 16,
    backgroundColor: "transparent",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 8,
    marginHorizontal: -12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  expandIcon: {
    marginLeft: 8,
  },
  sectionContent: {
    marginTop: 8,
  },
  settingButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    padding: 8,
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 8,
  },
  settingButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 14,
    color: "#333333",
  },
  optionsContent: {
    marginTop: 0,
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  optionsGrid: {
    backgroundColor: "#f7f7f7f7",
    borderRadius: 16,
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 0,
    justifyContent: "space-between",
    padding: 8,
  },
  optionBox: {
    width: 50,
    height: 40,
    borderRadius: 14,
    backgroundColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    flex: 1,
  },
  selectedOption: {
    backgroundColor: "#ffffff",
  },
  optionImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  buttonText: {
    fontSize: 14,
    color: "#4A4A4A",
    textAlign: "center",
    flexWrap: "wrap",
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#E6E8EB",
  },
  selectedButton: {
    backgroundColor: "#EBF9FF",
    borderColor: "#2196F3",
  },
  selectedButtonText: {
    color: "#333333",
    fontWeight: "bold",
  },
  sliderContainer: {
    marginTop: 16,
  },
  sliderLabel: {
    fontSize: 15,
    color: "#4A4A4A",
    marginBottom: 8,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValue: {
    fontSize: 14,
    color: "#333333",
    textAlign: "right",
  },
  ratioPreviewContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    width: "100%",
    aspectRatio: 3 / 2,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    position: "relative",
    overflow: "hidden",
  },
  ratioPreview: {
    backgroundColor: "#90EE90",
    borderRadius: 4,
    position: "relative",
    zIndex: 2,
  },
  gridContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  gridLine: {
    backgroundColor: "#E0E0E0",
  },
})

const getRatioStyle = (ratio: string) => {
  const [width, height] = ratio.split(":").map(Number)
  const baseSize = 110
  return {
    width: baseSize * (width / Math.max(width, height)),
    height: baseSize * (height / Math.max(width, height)),
    backgroundColor: "#90EE90",
  }
}

const GridLines = () => {
  const rows = 4
  const columns = 6

  return (
    <View style={styles.gridContainer}>
      {/* Vertical lines */}
      {Array(columns - 1)
        .fill(0)
        .map((_, i) => (
          <View
            key={`col-${i}`}
            style={[
              styles.gridLine,
              {
                position: "absolute",
                left: `${((i + 1) / columns) * 100}%`,
                top: 0,
                bottom: 0,
                width: 1,
              },
            ]}
          />
        ))}
      {/* Horizontal lines */}
      {Array(rows - 1)
        .fill(0)
        .map((_, i) => (
          <View
            key={`row-${i}`}
            style={[
              styles.gridLine,
              {
                position: "absolute",
                top: `${((i + 1) / rows) * 100}%`,
                left: 0,
                right: 0,
                height: 1,
              },
            ]}
          />
        ))}
    </View>
  )
}

export default OutpaintingEditTool
