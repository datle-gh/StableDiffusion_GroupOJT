import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

interface CustomBrushProps {
  size: number;
  spacing: number;
  angle: number;
  smudge: number;
  isPreset?: boolean;
}

const CustomBrush: React.FC<CustomBrushProps> = ({ size, spacing, angle, smudge, isPreset = false }) => {
  const width = size * 2;
  const height = size;
  const opacity = Math.max(0.3, Math.min(1, 1 - Math.abs(smudge) / 100));
  
  // Calculate control points for the curved path based on angle
  const angleRad = (angle % 360) * Math.PI / 180;
  const controlX1 = width / 3 + Math.cos(angleRad) * Math.min(spacing, width/4);
  const controlY1 = height / 3 + Math.sin(angleRad) * Math.min(spacing, height/4);
  const controlX2 = width / 2 + Math.cos(angleRad + Math.PI/4) * Math.min(spacing, width/4);
  const controlY2 = height / 2 + Math.sin(angleRad + Math.PI/4) * Math.min(spacing, height/4);
  
  const pathD = `M ${width * 0.1} ${height * 0.9} Q ${controlX1} ${controlY1}, ${controlX2} ${controlY2} T ${width * 0.9} ${height * 0.1}`;

  // Generate splatter effect based on spacing and size with constrained positions
  const numSplatter = Math.max(5, Math.min(15, Math.abs(spacing) / 5));
  const splatter = Array.from({ length: numSplatter }, () => {
    const randX = width * 0.2 + Math.random() * (width * 0.6);
    const randY = height * 0.2 + Math.random() * (height * 0.6);
    const randSize = Math.random() * (size * 0.1) * (1 - Math.abs(smudge) / 200);
    return { x: randX, y: randY, size: randSize };
  });

  // Calculate the maximum possible offset with constraints
  const maxOffset = Math.min(Math.abs(spacing), size * (isPreset ? 0.3 : 0.5));
  const viewBoxWidth = width + maxOffset * 2;
  const viewBoxHeight = height + maxOffset * 2;
  
  return (
    <View style={[styles.container, {
      width: isPreset ? '100%' : Math.min(viewBoxWidth, 200),
      height: isPreset ? '100%' : Math.min(viewBoxHeight, 100),
      marginHorizontal: isPreset ? 0 : Math.min(Math.abs(spacing) / 8, size/4),
      marginVertical: isPreset ? 0 : Math.min(Math.abs(spacing) / 8, size/4)
    }]}>
      <Svg 
        width="100%" 
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <Path 
          d={pathD} 
          stroke="#000" 
          strokeWidth={size * (isPreset ? 0.3 : 0.5)} 
          strokeOpacity={opacity}
          strokeLinecap="round"
          transform={`translate(${maxOffset}, ${maxOffset})`}
        />
        {splatter.map((dot, index) => (
          <Circle
            key={index}
            cx={dot.x + maxOffset}
            cy={dot.y + maxOffset}
            r={dot.size}
            fill="#000"
            fillOpacity={opacity * 0.7}
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomBrush;
