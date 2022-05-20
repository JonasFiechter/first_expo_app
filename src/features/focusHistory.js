import React from "react";
import { View, Text , StyleSheet, FlatList} from "react-native";

export const FocusHistory = ({history}) => {

    if (!history || !history.length) return null;

    const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Last focused things:
            </Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
    },
    item: {
        fontSize: 16,
        color: '#fff',
        paddingTop: 15,
        paddingLeft: 25,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 25,
        fontWeight: 'bold',
    },
})