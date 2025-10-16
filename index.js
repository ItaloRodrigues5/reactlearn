import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Index(){

    const [temperatura, setTemperatura] = useState(25);

    const getBackgroundColor = () => {
        if (temperatura < 15) return '#4da6ff';
        if (temperatura < 25) return '#80d4ff';
        if (temperatura < 35) return '#ffd633';
        return '#ff704d';
    };

    const resetarTemperatura = () => setTemperatura(25);
    return(
        <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
            <Text style={styles.title}>Controle de Temperatura</Text>
            <Text style={styles.temperature}>{temperatura}°</Text>

            <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={50}
            step={1}
            value={temperatura}
            onValueChange={setTemperatura}
            minimumTrackTintColor='#ff9900'
            maximumTrackTintColor='#ccc'
            thumbTintColor='#ff8000'
            />

            <Pressable style={styles.button} onPress={resetarTemperatura}>
                <Text style={styles.buttonText}>Resetar</Text>
            </Pressable>

            <Text style={styles.footer}>
                Ajuste a temperatura usando o Slider
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff3e0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e65c00',
        marginBottom: 40,
    },
    temperature: {
        fontSize: 60,
        fontWeight: '600',
        color: '#e65c00',
        marginBottom: 30,
    },
    slider: {
        width: '90%',
        height: 40,
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#ff9900',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 40,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
});