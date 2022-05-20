import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { my_colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from '../components/roundedButton';
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);
    return (
        <View style={styles.conatainer}>
            <View style={styles.inputContainer}>
                <TextInput 
                onChangeText={setSubject} 
                label="What would you like to focus on?"
                style={styles.textInput}
                />
                <View style={styles.btnContainer}>
                    <RoundedButton title="+" size={50} onPress={()=> addSubject(subject)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    conatainer: {
    },
    btnContainer: {
        justifyContent: 'center',
    },
    text: {
        color: my_colors.white
    },
    inputContainer: {
        padding: spacing.lg,
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },

})