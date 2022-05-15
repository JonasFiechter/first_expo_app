import React, { useState } from 'react';
import {View,StyleSheet} from 'react-native';
import { Countdown } from './countdown.js'
import { my_colors } from '../utils/colors';
import { RoundedButton } from './roundedButton.js';

export const Timer = ({focusSubject}) => {
    const [isStarted, setIsStarted] = useState(false)
    return (
        <View style={styles.countdownContainer}>
            <View style={styles.countdown}>
                <Countdown isPaused={!isStarted} onProgress={() => {}} onEnd={() => {}}/>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && 
                    <RoundedButton title='Start' onPress={()=>{setIsStarted(true)}}>
                    </RoundedButton>}
                {isStarted && 
                <RoundedButton title='Pause' onPress={()=>{setIsStarted(false)}}>
                </RoundedButton>}
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
        padding: 15,
        justifyContent: 'center',
        alignContent: 'center',
    }
})