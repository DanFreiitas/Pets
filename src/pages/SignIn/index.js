import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const [password, setPassword] = useState('');
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder="Username" style={styles.input}></TextInput>

                <Text style={styles.title}>Senha</Text>
                <TextInput secureTextEntry={true} value={password} onChangeText={setPassword} placeholder="Password" style={styles.input}></TextInput>

                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('PetWalker')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={styles.buttonRegistre}>
                    <Text style={styles.buttonTextRegistre}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop:28,
    },
    input: {
        borderBottomWidth: 1,
        height:40,
        marginBottom:12,
        fontSize:16
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistre:{
        marginTop: 14,
        alignSelf: 'center',
    },
    buttonTextRegistre:{
        color: '#a1a1a1'
    }
    
})