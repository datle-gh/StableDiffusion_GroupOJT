import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  LayoutChangeEvent,
  TouchableOpacity,
  Text,
  Image,
} from "react-native"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  SharedValue,
} from "react-native-reanimated"
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler"
import ColorPicker, { Panel3 } from "reanimated-color-picker"
import reset from "../../../../assets/icons/color-board/refresh.png"

/**
 * ColorMixer component
 * @description - A color mixer component with two color sliders and a color picker
 * @param value - The inital color value
 * @param onColorChange - The function to handle color change
 * @returns
 */
const ColorMixer: React.FC<{
  value: string
  onColorChange: (color: string) => void
}> = ({ value, onColorChange }) => {
  const [parentWidth, setParentWidth] = useState(0)
  const [parentHeight, setParentHeight] = useState(0)
  const [RADIUS, setRADIUS] = useState(0)
  const [color, setColor] = useState(value)
  const [opacity, setOpacity] = useState(100)

  const handleLayout = (event: LayoutChangeEvent) => {
    setParentWidth(event.nativeEvent.layout.width)
    setParentHeight(event.nativeEvent.layout.height)
  }

  useEffect(() => {
    if (parentWidth > 0) {
      setRADIUS(parentWidth * 0.25)
    }
  }, [parentWidth])

  const CENTER_X = parentWidth / 2
  const CENTER_Y = parentHeight / 2
  const STROKE_WIDTH = parentWidth * 0.02

  const circleRadius = RADIUS * 0.5

  const START_ANGLE_LEFT = (150 * Math.PI) / 180
  const END_ANGLE_LEFT = (210 * Math.PI) / 180
  const angleLeft = useSharedValue(START_ANGLE_LEFT)
  const startXLeft = CENTER_X + RADIUS * Math.cos(START_ANGLE_LEFT)
  const startYLeft = CENTER_Y + RADIUS * Math.sin(START_ANGLE_LEFT)
  const endXLeft = CENTER_X + RADIUS * Math.cos(END_ANGLE_LEFT)
  const endYLeft = CENTER_Y + RADIUS * Math.sin(END_ANGLE_LEFT)

  const START_ANGLE_RIGHT = (-30 * Math.PI) / 180
  const END_ANGLE_RIGHT = (30 * Math.PI) / 180
  const angleRight = useSharedValue(START_ANGLE_RIGHT)
  const startXRight = CENTER_X + RADIUS * Math.cos(START_ANGLE_RIGHT)
  const startYRight = CENTER_Y + RADIUS * Math.sin(START_ANGLE_RIGHT)
  const endXRight = CENTER_X + RADIUS * Math.cos(END_ANGLE_RIGHT)
  const endYRight = CENTER_Y + RADIUS * Math.sin(END_ANGLE_RIGHT)

  const calculateAngle = (
    x: number,
    y: number,
    startAngle: number,
    endAngle: number
  ) => {
    const deltaX = x - CENTER_X
    const deltaY = y - CENTER_Y
    let newAngle = Math.atan2(deltaY, deltaX)
    if (newAngle < 0 && startAngle > (90 * Math.PI) / 180)
      newAngle += 2 * Math.PI
    return Math.min(Math.max(newAngle, startAngle), endAngle)
  }

  const panGestureSlider = (
    startAngle: number,
    endAngle: number,
    angle: SharedValue<number>
  ) => {
    return Gesture.Pan()
      .onUpdate((event) => {
        const newAngle = calculateAngle(
          event.absoluteX,
          event.absoluteY,
          startAngle,
          endAngle
        )
        angle.value = newAngle

        const newOpacity = (newAngle - startAngle) / (endAngle - startAngle)
        setOpacity(newOpacity * 100)
      })
      .onEnd(() => {
        angle.value = withSpring(angle.value, { damping: 100, stiffness: 1000 })
      })
  }
  const animatedThumbStyle = (angle: SharedValue<number>) =>
    useAnimatedStyle(() => {
      const x = CENTER_X + RADIUS * Math.cos(angle.value)
      const y = CENTER_Y + RADIUS * Math.sin(angle.value)
      return {
        transform: [
          { translateX: x - STROKE_WIDTH / 2 },
          { translateY: y - STROKE_WIDTH / 2 },
        ],
      }
    })

  //Color change handler
  const handleColorChange = (selectedColor: { hex: string; rgba: string }) => {
    setColor(selectedColor.hex)

    const rgbaMatch = selectedColor.rgba.match(
      /rgba?\(\d+, \d+, \d+, ([\d.]+)\)/
    )

    const newOpacity = rgbaMatch
      ? Math.round(parseFloat(rgbaMatch[1]) * 100)
      : 100
    setOpacity(newOpacity)

    const rgbaColor = hexToRgba(selectedColor.hex, newOpacity / 100)
    onColorChange(rgbaColor)
  }

  const hexToRgba = (hex: string, alpha: number): string => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  //Reset button handler
  const handleReset = () => {
    setColor("#ed1111")
    setOpacity(100)
  }

  return (
    <View>
      <GestureHandlerRootView onLayout={handleLayout} style={styles.container}>
        <View>
          <Svg height={RADIUS * 2 + STROKE_WIDTH * 2} width={parentWidth}>
            <Defs>
              <LinearGradient id="left" x1="50%" y1="0%" x2="50%" y2="100%">
                <Stop offset="0%" stopColor={color} stopOpacity="100%" />
                <Stop offset="25%" stopColor={color} stopOpacity="75%" />
                <Stop offset="50%" stopColor={color} stopOpacity="50%" />
                <Stop offset="75%" stopColor={color} stopOpacity="25%" />
                <Stop
                  offset="100%"
                  stopColor="rgba(255,255,255,0)"
                  stopOpacity="0"
                />
              </LinearGradient>
              <LinearGradient id="right" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="black" stopOpacity="1" />
                <Stop offset="100%" stopColor="white" stopOpacity="0" />
              </LinearGradient>
            </Defs>
            <Path
              d={`M ${startXLeft} ${startYLeft} A ${RADIUS} ${RADIUS} 0 0 1 ${endXLeft} ${endYLeft}`}
              stroke="url(#left)"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeLinecap="round"
            />
            <Path
              d={`M ${startXRight} ${startYRight} A ${RADIUS} ${RADIUS} 0 0 1 ${endXRight} ${endYRight}`}
              stroke="url(#right)"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeLinecap="round"
            />
          </Svg>
          <ColorPicker
            style={{
              width: circleRadius * 3,
              height: circleRadius * 3,
              position: "absolute",
              top: CENTER_Y - circleRadius * 1.5,
              left: CENTER_X - circleRadius * 1.5,
              borderRadius: circleRadius,
            }}
            value={color}
            onChange={handleColorChange}
          >
            <Panel3 thumbSize={RADIUS * 0.1} />
          </ColorPicker>
          <GestureDetector
            gesture={panGestureSlider(
              START_ANGLE_LEFT,
              END_ANGLE_LEFT,
              angleLeft
            )}
          >
            <Animated.View
              style={[
                styles.knob,
                {
                  width: STROKE_WIDTH,
                  height: STROKE_WIDTH,
                  borderRadius: STROKE_WIDTH,
                },
                animatedThumbStyle(angleLeft),
              ]}
            />
          </GestureDetector>
          <GestureDetector
            gesture={panGestureSlider(
              START_ANGLE_RIGHT,
              END_ANGLE_RIGHT,
              angleRight
            )}
          >
            <Animated.View
              style={[
                styles.knob,
                {
                  width: STROKE_WIDTH,
                  height: STROKE_WIDTH,
                  borderRadius: STROKE_WIDTH,
                },
                animatedThumbStyle(angleRight),
              ]}
            />
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
      <TouchableOpacity
        onPress={handleReset}
        style={[
          styles.resetButton,
          {
            width: RADIUS * 0.68,
            height: RADIUS * 0.25,
            top: CENTER_Y - RADIUS * 1.2,
            left: CENTER_X - RADIUS * 0.34,
          },
        ]}
      >
        <Image source={reset} style={styles.btnIcon} />
        <Text style={[styles.btnText, { fontSize: RADIUS * 0.13 }]}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ColorMixer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  knob: {
    backgroundColor: "white",
    position: "absolute",
    borderWidth: 3,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resetButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#939393ce",
    borderRadius: 50,
  },
  btnIcon: {
    alignItems: "center",
    width: "20%",
    height: "70%",
    marginRight: "15%",
  },
  btnText: {
    color: "#000",
  },
})
