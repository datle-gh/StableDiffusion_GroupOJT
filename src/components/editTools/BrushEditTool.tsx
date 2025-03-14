import React, { useState, useEffect, useMemo } from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native"
import SlideBar from "../basicCompos/other/SlideBar"
import CustomBrush from "../../components/basicCompos/filter/CustomBrush"

interface BrushSettingsProps {
  onSettingsChange: (settings: BrushSettings) => void
}

interface BrushSettings {
  size: number
  spacing: number
  angle: number
  smudge: number
}

interface BrushPreset {
  size: number
  spacing: number
  angle: number
  smudge: number
}

const BrushSettings: React.FC<BrushSettingsProps> = ({ onSettingsChange }) => {
  const [customBrush, setCustomBrush] = useState({
    size: 40,
    spacing: 0,
    angle: 24,
    smudge: 0,
  })
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number | null>(
    null
  )

  useEffect(() => {
    onSettingsChange(customBrush)
  }, [customBrush, onSettingsChange])

  const brushPresets: BrushPreset[] = useMemo(
    () => [
      { size: 10, spacing: -50, angle: 15, smudge: 20 },
      { size: 30, spacing: 0, angle: 45, smudge: -30 },
      { size: 25, spacing: 25, angle: 90, smudge: 0 },
      { size: 30, spacing: -25, angle: 180, smudge: 40 },
      { size: 40, spacing: 50, angle: 270, smudge: -50 },
      { size: 50, spacing: -75, angle: 30, smudge: 60 },
      { size: 30, spacing: 75, angle: 60, smudge: -40 },
      { size: 25, spacing: -40, angle: 120, smudge: 30 },
      { size: 45, spacing: 40, angle: 240, smudge: -20 },
      { size: 30, spacing: -60, angle: 300, smudge: 50 },
      { size: 35, spacing: 60, angle: 150, smudge: -60 },
      { size: 15, spacing: -30, angle: 210, smudge: 45 },
      { size: 20, spacing: 30, angle: 330, smudge: -45 },
      { size: 10, spacing: -20, angle: 75, smudge: 35 },
      { size: 40, spacing: 20, angle: 135, smudge: -35 },
    ],
    []
  )

  const PresetGrid = useMemo(() => {
    return (
      <View style={styles.presetsGrid}>
        {brushPresets.map((preset, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.presetItem,
              selectedPresetIndex === index && styles.selectedPreset,
            ]}
            onPress={() => handlePresetSelect(preset, index)}
          >
            <View style={{ transform: [{ scale: 0.8 }] }}>
              <CustomBrush
                size={preset.size}
                spacing={preset.spacing}
                angle={preset.angle}
                smudge={preset.smudge}
                isPreset={true}
              />
            </View>
            <Text style={styles.presetSizeText}>{preset.size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }, [brushPresets, selectedPresetIndex])

  const handlePresetSelect = (preset: BrushPreset, index: number) => {
    setSelectedPresetIndex(index)
    setCustomBrush(preset)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Brushes</Text>
      <View style={styles.presetsContainer}>{PresetGrid}</View>
      <View style={styles.previewContainer}>
        <CustomBrush
          size={Math.min(customBrush.size, 100)}
          spacing={customBrush.spacing}
          angle={customBrush.angle}
          smudge={customBrush.smudge}
        />
      </View>
      <SlideBar
        label="Size"
        minimumValue={0}
        maximumValue={100}
        initialValue={customBrush.size}
        onValueChange={(value) =>
          setCustomBrush((prev) => ({ ...prev, size: value }))
        }
        isPercent={false}
      />

      <Text style={styles.sectionTitle}>Advanced Settings</Text>

      <SlideBar
        label="Brush Spacing"
        minimumValue={-100}
        maximumValue={100}
        initialValue={customBrush.spacing}
        onValueChange={(value) =>
          setCustomBrush((prev) => ({ ...prev, spacing: value }))
        }
        isPercent={false}
      />

      <SlideBar
        label="Shape Angle"
        minimumValue={0}
        maximumValue={360}
        initialValue={customBrush.angle}
        onValueChange={(value) =>
          setCustomBrush((prev) => ({ ...prev, angle: value }))
        }
        isPercent={false}
      />

      <SlideBar
        label="Smudge"
        minimumValue={-100}
        maximumValue={100}
        initialValue={customBrush.smudge}
        onValueChange={(value) =>
          setCustomBrush((prev) => ({ ...prev, smudge: value }))
        }
        isPercent={false}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.leftPreview}>
          <CustomBrush
            size={Math.min(customBrush.size, 60)}
            spacing={customBrush.spacing}
            angle={customBrush.angle}
            smudge={customBrush.smudge}
          />
        </View>
        <View style={styles.rightButtons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonShadow]}
            onPress={() => console.log("Import pressed")}
          >
            <Text style={styles.buttonText}>Import</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonShadow]}
            onPress={() => console.log("Invert pressed")}
          >
            <Text style={styles.buttonText}>Invert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonShadow]}
            onPress={() => console.log("Remove pressed")}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  presetsContainer: {
    marginBottom: 20,
    width: "100%",
  },
  presetsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  presetItem: {
    width: "17%",
    aspectRatio: 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#F7F7F7",
    margin: "0.66%",
    overflow: "hidden",
    padding: 4,
  },
  selectedPreset: {
    backgroundColor: "#E0E0E0",
    borderWidth: 2,
    borderColor: "#000",
  },
  presetBrush: {
    backgroundColor: "#000",
    borderRadius: 4,
  },
  container: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    width: "100%",
    maxWidth: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
    position: "relative",
    zIndex: 1,
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 4,
    minHeight: 160,
  },
  leftPreview: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  rightButtons: {
    width: 120,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 8,
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  previewContainer: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    marginBottom: 12,
    marginTop: -18,
    overflow: "hidden",
    padding: 12,
  },
  presetSizeText: {
    fontSize: 10,
    color: "#666666",
    marginTop: 2,
    textAlign: "center",
  },
  statText: {
    fontSize: 12,
    color: "#666666",
    marginHorizontal: 8,
  },
})

export default BrushSettings
