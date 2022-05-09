import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import { my_colors } from './src/utils/colors.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textBigger}>FIRST APP TEST</Text>
      <Text style={styles.text}>App da Morgana</Text>
    </SafeAreaView>
  );
}
console.log(StatusBar.currentHeight)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0:StatusBar.currentHeight,
    backgroundColor: my_colors.dark_blue,
  },
  text: {
    color: my_colors.white,
  },
  textBigger: {
    flex: 1,
    color: my_colors.white,
  }
});
