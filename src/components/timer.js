import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Countdown } from './countdown.js'
import { my_colors } from '../utils/colors';


export const Timer = ({focusSubject}) => (
    <View style={styles.countdownContainer}>
        <View style={styles.countdown}>
            <Countdown onProgress={() => {}} onEnd={() => {}}/>
        </View>
    </View>
)

const styles = StyleSheet.create ({
    countdownContainer: {
        flex: 1,
        backgroundColor: 'gray',
    },
    countdown: {
        flex: 0.5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
})