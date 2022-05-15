import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Countdown } from './countdown.js'
import { my_colors } from '../utils/colors';


export const Timer = ({focusSubject}) => (
    <View>
        <Countdown style={styles.countdown} onProgress={() => {}} onEnd={() => {}}/>
    </View>
)

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
    },
})