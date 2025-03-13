import React from 'react';
import { View, StyleSheet } from 'react-native';
import AiEdit from '../../../components/generate/AiEdit';

const AiEditScreen = () => {
  return (
    <View style={styles.container}>
      <AiEdit />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AiEditScreen;