import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ASODOPAKSPODKAPOSDKAPSDPOKPO</Text>
    </SafeAreaView>
  );
}
console.log(StatusBar.currentHeight)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0:StatusBar.currentHeight,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  }
});
