import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardMain from '../../../components/dashboard/DashboardMain';

const Home = () => {
  return (
    <View style={styles.container}>
      <DashboardMain />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;