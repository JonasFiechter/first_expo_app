import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { my_colors } from "../utils/colors";
import { TextInput } from "react-native-paper";

export const Focus = () => {
    const [subject, setSubject] = useState(null);
    console.log(subject)
    return (
        <View style={styles.conatainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={setSubject} label="What would you like to focus on?"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    conatainer: {
        flex: 1
    },
    text: {
        color: my_colors.white
    },
    inputContainer: {
        flex: 0.5,
        padding: 50,
    }
})