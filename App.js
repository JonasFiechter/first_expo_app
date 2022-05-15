import React, { useState } from 'react';
import { StyleSheet, 
        Text, 
        SafeAreaView, 
        Platform, 
        StatusBar, 
        Image, 
        View } from 'react-native';
import { my_colors } from './src/utils/colors.js';
import { Focus } from './src/features/focus.js';
import { Timer } from './src/components/timer.js'


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? <Focus addSubject={setCurrentSubject}/> :
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => {}}
          />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0:StatusBar.currentHeight,
    backgroundColor: my_colors.dark_blue,},
  text: {
    color: my_colors.white},
});