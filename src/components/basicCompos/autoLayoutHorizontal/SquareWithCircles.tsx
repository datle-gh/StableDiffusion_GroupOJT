import React, { useState } from "react";
import { View, PanResponder, TouchableOpacity, GestureResponderEvent, PanResponderGestureState } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";
import CloseIcon from "react-native-vector-icons/AntDesign";

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

type ResizeCorner =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "right"
  | "left"
  | "bottom"
  | "top"
  | null;

const SquareWithCircles: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [size, setSize] = useState<Size | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [resizeCorner, setResizeCorner] = useState<ResizeCorner>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const checkResizeCorner = (x: number, y: number): ResizeCorner => {
    if (!position || !size) return null;
    const rightEdge = position.x + size.width;
    const bottomEdge = position.y + size.height;
    const leftEdge = position.x;
    const topEdge = position.y;

    const nearRight = Math.abs(x - rightEdge) < 10;
    const nearLeft = Math.abs(x - leftEdge) < 10;
    const nearTop = Math.abs(y - topEdge) < 10;
    const nearBottom = Math.abs(y - bottomEdge) < 10;

    const nearTopLeft = nearLeft && nearTop;
    const nearTopRight = nearRight && nearTop;
    const nearBottomLeft = nearLeft && nearBottom;
    const nearBottomRight = nearRight && nearBottom;

    if (nearBottomRight) return "bottom-right";
    if (nearBottomLeft) return "bottom-left";
    if (nearTopRight) return "top-right";
    if (nearTopLeft) return "top-left";
    if (nearRight) return "right";
    if (nearLeft) return "left";
    if (nearBottom) return "bottom";
    if (nearTop) return "top";
    return null;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt: GestureResponderEvent) => {
      const { locationX, locationY } = evt.nativeEvent;
      if (!position || !size) {
        setPosition({ x: locationX, y: locationY });
        setSize({ width: 0, height: 0 });
        setIsDrawing(true);
        return;
      }

      const resizeCorner = checkResizeCorner(locationX, locationY);
      const insideRect =
        locationX > position.x &&
        locationX < position.x + size.width &&
        locationY > position.y &&
        locationY < position.y + size.height;

      if (resizeCorner) {
        setResizeCorner(resizeCorner);
        setIsResizing(true);
      } else if (insideRect) {
        setIsDragging(true);
      }
    },
    onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
      if (isDrawing && position) {
        setSize({
          width: Math.max(30, gestureState.moveX - position.x),
          height: Math.max(30, gestureState.moveY - position.y),
        });
      } else if (isResizing && position && size) {
        switch (resizeCorner) {
          case "bottom-right":
            setSize({
              width: Math.max(30, size.width + gestureState.dx),
              height: Math.max(30, size.height + gestureState.dy),
            });
            break;
          case "bottom-left":
            setSize({
              width: Math.max(30, size.width - gestureState.dx),
              height: Math.max(30, size.height + gestureState.dy),
            });
            setPosition({ x: position.x + gestureState.dx, y: position.y });
            break;
          case "top-right":
            setSize({
              width: Math.max(30, size.width + gestureState.dx),
              height: Math.max(30, size.height - gestureState.dy),
            });
            setPosition({ x: position.x, y: position.y + gestureState.dy });
            break;
          case "top-left":
            setSize({
              width: Math.max(30, size.width - gestureState.dx),
              height: Math.max(30, size.height - gestureState.dy),
            });
            setPosition({
              x: position.x + gestureState.dx,
              y: position.y + gestureState.dy,
            });
            break;
          case "right":
            setSize({
              width: Math.max(30, size.width + gestureState.dx),
              height: size.height,
            });
            break;
          case "left":
            setSize({
              width: Math.max(30, size.width - gestureState.dx),
              height: size.height,
            });
            setPosition({ x: position.x + gestureState.dx, y: position.y });
            break;
          case "bottom":
            setSize({
              width: size.width,
              height: Math.max(30, size.height + gestureState.dy),
            });
            break;
          case "top":
            setSize({
              width: size.width,
              height: Math.max(30, size.height - gestureState.dy),
            });
            setPosition({ x: position.x, y: position.y + gestureState.dy });
            break;
        }
      } else if (isDragging && position) {
        setPosition({
          x: position.x + gestureState.dx,
          y: position.y + gestureState.dy,
        });
      }
    },
    onPanResponderRelease: () => {
      setIsDrawing(false);
      setIsResizing(false);
      setResizeCorner(null);
      setIsDragging(false);
    },
  });

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <Svg width="100%" height="100%">
        {position && size && (
          <>
            <Rect
              x={position.x}
              y={position.y}
              width={size.width}
              height={size.height}
              fill="lightgray"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <Circle
              cx={position.x}
              cy={position.y}
              r="5"
              fill="lightgreen"
              stroke="black"
            />
            <Circle
              cx={position.x + size.width}
              cy={position.y}
              r="5"
              fill="lightgreen"
              stroke="black"
            />
            <Circle
              cx={position.x}
              cy={position.y + size.height}
              r="5"
              fill="lightgreen"
              stroke="black"
            />
            <Circle
              cx={position.x + size.width}
              cy={position.y + size.height}
              r="5"
              fill="lightgreen"
              stroke="black"
            />
          </>
        )}
      </Svg>
      {position && size && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: position.x + size.width - 10,
            top: position.y - 10,
            backgroundColor: "black",
            borderRadius: 10,
            width: 20,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPosition(null);
            setSize(null);
          }}
        >
          <CloseIcon name="close" size={15} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SquareWithCircles;