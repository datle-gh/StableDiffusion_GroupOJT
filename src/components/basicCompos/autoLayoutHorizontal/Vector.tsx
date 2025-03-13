import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import arrow from  '../../../assets/image/vector/arrow.png';

interface VectorProps {}

const Vector: React.FC<VectorProps> = () => {
  return (
    <View style={styles.container}>
      <Image source={arrow as ImageSourcePropType} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50, 
    height: 50,
    resizeMode: "contain",
  },
});

export default Vector;