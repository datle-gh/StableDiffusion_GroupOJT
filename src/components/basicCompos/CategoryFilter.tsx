import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

interface Category {
  name: string
}

interface CategoryFilterProps {
  data: ImageType[]
  onFiltered: (filtered: ImageType[]) => void
}

const categories: Category[] = [
  { name: "3D Renders" },
  { name: "Nature" },
  { name: "Travel" },
  { name: "Animals" },
  { name: "People" },
  { name: "Food & Drink" },
  { name: "Arts & Culture" },
]

/**
 * A component for filtering a list of images by category.
 *
 * When a category is selected, this component filters the image list accordingly
 * and triggers the `onFiltered` callback to update the display.
 * If the selected category is deselected (tapped again), the full image list is shown.
 *
 * @param {ImageType[]} data - The original list of images to be filtered.
 * @param {(filtered: ImageType[]) => void} onFiltered - Callback function triggered after filtering based on the selected category.
 *
 * @author: Tien Dat
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  data,
  onFiltered,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )

  useEffect(() => {
    if (!selectedCategory) {
      onFiltered(data)
    } else {
      const filtered = data.filter((item) =>
        item.categories.includes(selectedCategory.name)
      )
      onFiltered(filtered)
    }
  }, [selectedCategory, data])

  return (
    <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryButton}
          onPress={() =>
            setSelectedCategory((prev) =>
              prev?.name === item.name ? null : item
            )
          }
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item ? styles.boldText : null,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    flex: 1,
  },
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000000",
  },
})

export default CategoryFilter
