import React from "react";
import { View, Text, } from 'react-native'
import * as Animatable from 'react-native-animatable';

import { styles } from "../PetLove";
import Menu from "../Menu/Menu";

export default function PetWalker() {
    return (
        <View style={styles.container}>
            <Animatable.View style={styles.containerHeader}>
                <Animatable.Text style={styles.message}>PetWalker</Animatable.Text>
            </Animatable.View>

            <Animatable.View style={styles.containerPasseios}>


                
            </Animatable.View>




        </View>
    )
}