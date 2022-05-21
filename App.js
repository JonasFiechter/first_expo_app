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
import { Timer } from './src/components/timer.js';
import { FocusHistory } from './src/features/focusHistory.js';


export default function App() {
  console.log('working fine')
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history}/>
        </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {setHistory([...history, subject])}}
            clearSubject={() => setCurrentSubject(null)}
          />)}
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