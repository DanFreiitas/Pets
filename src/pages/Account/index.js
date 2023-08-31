import React from "react";
import { View, StyleSheet } from "react-native";
import { Animation } from "react-native-animatable";

import Menu from "../Menu/Menu";

export default function MyAcount() {
    return (
        <View style={styles.container}>
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
    }    
});
