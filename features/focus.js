import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { my_colors } from '../src/utils/colors,js';

export const Focus = () => (
    <View style={styles.conatainer}>
        <Text style={styles.text}>Focus Feature</Text>
    </View>
)

const styles = StyleSheet.create ({
    conatainer: {
        flex: 1
    },
    text: {
        color: my_colors.white
    },
})