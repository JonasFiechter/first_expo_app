import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { Countdown } from './countdown.js'
import { my_colors } from '../utils/colors';
import { RoundedButton } from './roundedButton.js';
import { spacing } from '../utils/sizes.js';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './timing';

export const Timer = ({focusSubject, clearSubject}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);
    const PATTERN = [1 * 1000];
    const onEnd = function() {
        Vibration.vibrate(PATTERN)
    }
    
    return (
        <View style={styles.countdownContainer}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted} 
                    onProgress={setProgress} 
                    onEnd={onEnd}/>
                <View style={styles.focusSubject}>
                    <Text style={styles.title}>Focusing on:</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={styles.progressBar}>
                <ProgressBar
                    progress={progress}
                    color={my_colors.white}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={setMinutes}/>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && 
                    <RoundedButton title='Start' onPress={()=>{setIsStarted(true)}}>
                    </RoundedButton>}
                {isStarted && 
                <RoundedButton 
                    title='Pause' 
                    onPress={()=>{setIsStarted(false)}}>
                </RoundedButton>}
            </View>
            <View style={styles.clearButtonWrapper}>
                <RoundedButton
                    title='reset'
                    size={50}
                    onPress={clearSubject}>
                </RoundedButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    countdownContainer: {
        flex: 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    clearButtonWrapper : {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: spacing.xxl,
    },
    focusSubject: {
        paddingTop: spacing.sm,
    },
    title: {
        color: my_colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: my_colors.white,
        textAlign: 'center',
    },
    progressBar: {
        color: my_colors.white,
        paddingTop: spacing.sm,
    },
})