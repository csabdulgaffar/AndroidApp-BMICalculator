import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Constants } from 'expo-constants';

const BMICalculator = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [description, setDescription] = useState('');

    const calculateBMI = () => 
    {
        if (weight && height) {
            const bmi = (weight) / ((height * 0.01) ** 2)
            setBmi(bmi.toFixed(1));
            if (bmi < 18.5) {
                setDescription('Underweight')
            }
            else if (bmi >= 18.5 && bmi <= 24.9) {

                setDescription('Normal ')
            }
            else if (bmi >= 24.9 && bmi <= 29.9) {

                setDescription('Overweight ')
            }
            else {

                setDescription('Obese ')
            }

        }
        else {
            setBmi('Wrong Input')
            setDescription('Please enter details first')
        
        }
    }
    

return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>BMICalculator</Text>
        </View>
        <TextInput
            style={styles.input}
            value={weight}
            onChangeText={(text) => {
                setWeight(text)
            }}
            placeholder='Weight in KG'
            keyboardType='numeric'
        />
        <TextInput
            style={styles.input}
            value={height}
            onChangeText={(text) => {
                setHeight(text)
            }}
            placeholder='height in cm'
            keyboardType='numeric'
        />
        <TouchableOpacity
            style={styles.button}
            onPress={calculateBMI
            }

        >
            <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <View
            style={styles.resultView}>
            <Text style={styles.result}>{bmi}</Text>
            <Text style={styles.result}>{description}</Text>


        </View>
        <View
            style={styles.copyright}>
            <Text style={styles.copyrightText}>Made by Abdul Gaffar @ Sept 2023</Text>

        </View>
    </View>

)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "",
        backgroundColor: '#dc143c'
    },
    title: {
        backgroundColor: '#fff',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10


    }
    ,
    titleText:
    {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'

    }
    ,
    input:
    {
        height: 55,
        margin: 15,
        borderWidth: 1 / 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff'

    },
    button:
    {
        height: 55,
        margin: 15,
        borderWidth: 1 / 2,
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    resultView: {
        margin: 15,
        backgroundColor: '#fff',
        padding: 10,
    },
    result:
    {
        fontSize: 30,
        color: '#2c6975',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    copyright:
    {
        bottom: 0,
        backgroundColor: '#fff',
        marginTop: 100,

    }
    ,
    copyrightText: {
        textAlign: 'center',
    }


});


export default BMICalculator;
