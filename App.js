import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './src/components/Card.js';

const App = () => {
  const jeff = {
    name: 'Jeff',
    bio: 'I am Jeff',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
  };
  return (
    <View style={styles.pageContainer}>
      <Card user={jeff} />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
