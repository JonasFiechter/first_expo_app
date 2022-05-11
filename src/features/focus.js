import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { my_colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from '../components/roundedButton';

export const Focus = () => {
    const [subject, setSubject] = useState(null);
    console.log(subject)
    return (
        <View style={styles.conatainer}>
            <View style={styles.inputContainer}>
                <TextInput o
                nChangeText={setSubject} 
                label="What would you like to focus on?"
                style={styles.textInput}
                />
                <View style={styles.btnContainer}>
                    <RoundedButton title="+" size={50}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    conatainer: {
        flex: 1
    },
    btnContainer: {
        justifyContent: 'center',
    },
    text: {
        color: my_colors.white
    },
    inputContainer: {
        padding: 25,
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        marginRight: 10,
    },

})