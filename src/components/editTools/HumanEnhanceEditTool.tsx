import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SlideBar from "../basicCompos/other/SlideBar"

const sliders = [
  { label: "Smile", initialValue: 24 },
  { label: "Age", initialValue: -70 },
  { label: "Eye direction", initialValue: -27 },
  { label: "Hair waviness", initialValue: -30 },
  { label: "Bangs length", initialValue: 35 },
  { label: "Eye wrinkles", initialValue: 60 },
  { label: "Eye openness", initialValue: -18 },
  { label: "Lighting Left", initialValue: -18 },
  { label: "Lighting Right", initialValue: 19 },
  { label: "Glare reduction", initialValue: 50 },
]

const HumanEnhanceEditTool: React.FC = () => {
  const [values, setValues] = useState(
    sliders.reduce((acc, slider) => {
      acc[slider.label] = slider.initialValue
      return acc
    }, {} as Record<string, number>)
  )

  const handleValueChange = (label: string, value: number) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }))
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 150 }}
    >
      <Text style={styles.title}>Enhancements</Text>
      {sliders.map((slider) => (
        <SlideBar
          key={slider.label}
          label={slider.label}
          initialValue={slider.initialValue}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(value) => handleValueChange(slider.label, value)}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
})

export default HumanEnhanceEditTool
