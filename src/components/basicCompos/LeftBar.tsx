import React, { useState } from "react"
import { View, StyleSheet, Animated } from "react-native"
import TabButton2 from "./TabButton2"

import cubeSphereIcon from "../../../assets/icons/3d-cube-sphere.png"
import photoIcon from "../../../assets/icons/photo.png"
import moodCogIcon from "../../../assets/icons/mood-cog.png"
import vectorSplineIcon from "../../../assets/icons/vector-spline.png"
import typographyIcon from "../../../assets/icons/typography.png"
import combineIcon from "../../../assets/icons/brand-supernova.png"

const LeftBar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const translateX = new Animated.Value(0)

  //Sự kiện khi click vào tab
  const handlePress = (index: number) => {
    setActiveIndex(index)
    Animated.spring(translateX, {
      toValue: index * 100,
      useNativeDriver: true,
    }).start()
  }

  const leftBarProps = [
    {
      title: "AI Images",
      icon: photoIcon,
    },
    {
      title: "Text Affect",
      icon: typographyIcon,
    },
    {
      title: "3D model",
      icon: cubeSphereIcon,
    },
    {
      title: "Combine",
      icon: combineIcon,
    },
    {
      title: "Personalize",
      icon: moodCogIcon,
    },
    {
      title: "Vectors",
      icon: vectorSplineIcon,
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.tabWrapper}>
        <Animated.View
          style={[
            styles.activeIndicator,
            {
              width: `${100 / leftBarProps.length}%`,
              transform: [{ translateX }],
            },
          ]}
        />
        {leftBarProps.map((tab, index) => (
          <TabButton2
            key={index}
            title={tab.title}
            icon={tab.icon}
            onPress={() => handlePress(index)}
            isActive={activeIndex === index}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "row",
  },
  tabWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    width: "5%",
  },
  activeIndicator: {
    position: "absolute",
    height: "100%",
    zIndex: -1,
  },
})

export default LeftBar
