import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import { my_colors } from './src/utils/colors.js'
import { Focus } from './src/features/focus.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus/>
    </SafeAreaView>
  );
}
console.log(StatusBar.currentHeight)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0:StatusBar.currentHeight,
    backgroundColor: my_colors.dark_blue,}
});
