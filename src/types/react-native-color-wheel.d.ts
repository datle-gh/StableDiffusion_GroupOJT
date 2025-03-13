declare module 'react-native-color-wheel' {
    import React from 'react';
    import { ViewStyle } from 'react-native';
  
    export interface ColorWheelProps {
      initialColor?: string;
      onColorChange?: (color: string) => void;
      style?: ViewStyle;
    }
  
    export class ColorWheel extends React.Component<ColorWheelProps> {}
  }
  