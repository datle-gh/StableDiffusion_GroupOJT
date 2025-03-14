import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import metalColorIcon from "../../../../assets/icons/metal-color.png"
import SlideBar from "../basicCompos/other/SlideBar"

interface MaterialSettingsProps {
  onSettingsChange: (settings: MaterialSettings) => void
}

interface MaterialSettings {
  color: string
  roughness: number
  metalness: number
  emission: number
  selectedFilter: number | null
}

interface Filter {
  id: string
  color: string
}

interface ExpandedSections {
  material: boolean
  metalColor: boolean
  filter: boolean
  effect: boolean
  cloner: boolean
}

const filters: Filter[] = [
  { id: "filter1", color: "#FF6B6B" },
  { id: "filter2", color: "#4ECDC4" },
  { id: "filter3", color: "#45B7D1" },
  { id: "filter4", color: "#96CEB4" },
  { id: "filter5", color: "#FFEEAD" },
  { id: "filter6", color: "#D4A5A5" },
  { id: "filter7", color: "#9370DB" },
  { id: "filter8", color: "#FFB6C1" },
]

type SectionKey = "material" | "filter" | "effect" | "cloner" | "metalColor"

/**
 * !Update the MaterialSettings component
 */
const MaterialEditTool: React.FC<MaterialSettingsProps> = ({
  onSettingsChange,
}) => {
  const [settings, setSettings] = useState<MaterialSettings>({
    color: "#9370DB",
    roughness: 32,
    metalness: 80,
    emission: 40,
    selectedFilter: null,
  })

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    material: true,
    metalColor: false,
    filter: true,
    effect: false,
    cloner: false,
  })

  useEffect(() => {
    onSettingsChange(settings)
  }, [settings, onSettingsChange])

  const handleFilterSelect = (index: number) => {
    setSettings((prev) => ({ ...prev, selectedFilter: index }))
  }

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <View style={styles.container}>
      {/* Material Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("material")}
        >
          <Text style={styles.sectionTitle}>Material</Text>
          <Ionicons
            name={expandedSections.material ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        {expandedSections.material && (
          <View style={styles.sectionContent}>
            {/* Metal Color Section */}
            <TouchableOpacity
              style={styles.colorButton}
              onPress={() => toggleSection("metalColor")}
            >
              <View style={styles.colorButtonContent}>
                <Image source={metalColorIcon} style={styles.icon} />
                <Text style={styles.colorText}>Metal Color</Text>
              </View>
              <Ionicons
                name={
                  expandedSections.metalColor ? "chevron-down" : "chevron-up"
                }
                size={20}
                color="#666666"
                style={styles.expandIcon}
              />
            </TouchableOpacity>

            {expandedSections.metalColor && (
              <View style={styles.metalColorContent}>
                <View style={styles.colorGrid}>
                  {[
                    "#FFD700",
                    "#C0C0C0",
                    "#B87333",
                    "#4682B4",
                    "#8B4513",
                    "#CD7F32",
                  ].map((color, index) => (
                    <TouchableOpacity
                      key={`metal-${index}`}
                      style={[
                        styles.colorItem,
                        settings.color === color && styles.selectedColor,
                      ]}
                      onPress={() =>
                        setSettings((prev) => ({ ...prev, color }))
                      }
                    >
                      <View
                        style={[
                          styles.colorPreview,
                          { backgroundColor: color },
                        ]}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            <SlideBar
              label="Roughness"
              minimumValue={0}
              maximumValue={100}
              initialValue={settings.roughness}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, roughness: value }))
              }
              isPercent={false}
            />

            <SlideBar
              label="Metalness"
              minimumValue={0}
              maximumValue={100}
              initialValue={settings.metalness}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, metalness: value }))
              }
              isPercent={false}
            />

            <SlideBar
              label="Emission"
              minimumValue={0}
              maximumValue={100}
              initialValue={settings.emission}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, emission: value }))
              }
              isPercent={false}
            />
          </View>
        )}
      </View>

      {/* Filter Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("filter")}
        >
          <Text style={styles.sectionTitle}>Filter</Text>
          <Ionicons
            name={expandedSections.filter ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        {expandedSections.filter && (
          <View style={styles.sectionContent}>
            <View style={styles.filterGrid}>
              {filters.map((filter, index) => (
                <TouchableOpacity
                  key={filter.id}
                  style={[
                    styles.filterItem,
                    settings.selectedFilter === index && styles.selectedFilter,
                  ]}
                  onPress={() => handleFilterSelect(index)}
                >
                  <View
                    style={[
                      styles.filterPreview,
                      { backgroundColor: filter.color },
                    ]}
                  />
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.filterItem}>
                <Text style={styles.plusIcon}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Effect Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("effect")}
        >
          <Text style={styles.sectionTitle}>Effect</Text>
          <Ionicons
            name={expandedSections.effect ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        {expandedSections.effect && (
          <View style={styles.sectionContent}>
            <View style={styles.effectContent}>
              <SlideBar
                label="Glow"
                minimumValue={0}
                maximumValue={100}
                initialValue={0}
                onValueChange={(value) => console.log("Glow effect:", value)}
                isPercent={false}
              />
              <SlideBar
                label="Blur"
                minimumValue={0}
                maximumValue={100}
                initialValue={0}
                onValueChange={(value) => console.log("Blur effect:", value)}
                isPercent={false}
              />
            </View>
          </View>
        )}
      </View>

      {/* Cloner Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("cloner")}
        >
          <Text style={styles.sectionTitle}>Cloner</Text>
          <Ionicons
            name={expandedSections.cloner ? "chevron-down" : "chevron-up"}
            size={20}
            color="#666666"
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        {expandedSections.cloner && (
          <View style={styles.sectionContent}>
            <View style={styles.clonerContent}>
              <SlideBar
                label="Count"
                minimumValue={1}
                maximumValue={10}
                initialValue={1}
                onValueChange={(value) => console.log("Clone count:", value)}
                isPercent={false}
              />
              <SlideBar
                label="Spacing"
                minimumValue={0}
                maximumValue={100}
                initialValue={10}
                onValueChange={(value) => console.log("Clone spacing:", value)}
                isPercent={false}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    padding: 8,
  },
  colorItem: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedColor: {
    borderColor: "#000000",
    borderWidth: 2,
  },
  colorPreview: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    width: "100%",
    maxWidth: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
  },
  section: {
    marginBottom: 8,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  expandIcon: {
    marginLeft: 8,
  },
  sectionContent: {
    marginTop: 8,
  },
  colorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    padding: 8,
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 8,
  },
  colorButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  metalColorContent: {
    marginTop: 0,
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  colorText: {
    fontSize: 14,
    color: "#333333",
  },
  filterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 8,
  },
  filterItem: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedFilter: {
    borderColor: "#000000",
    borderWidth: 2,
  },
  filterPreview: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  plusIcon: {
    fontSize: 24,
    color: "#666666",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  effectContent: {
    marginTop: 8,
  },
  clonerContent: {
    marginTop: 8,
  },
  nestedSection: {
    marginTop: 16,
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    padding: 12,
  },
})

export default MaterialEditTool
