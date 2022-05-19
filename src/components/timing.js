import React from 'react';
import { View, StyleSheet} from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { RoundedButton } from './roundedButton';

export const Timing = ({ onChangeTime }) => {

    return (
        <>
        <View style={styles.timingButton}>
            <RoundedButton 
                size={60} 
                title='10' 
                onPress={()=> onChangeTime(10)}
            />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton 
                size={60} 
                title='15' 
                onPress={()=> onChangeTime(15)}
            />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton 
                size={60} 
                title='30' 
                onPress={()=> onChangeTime(30)}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})