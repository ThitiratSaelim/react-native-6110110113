import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props){
    return(
        <View>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.descript}>{props.description}</Text>
            <View style={styles.temp}>
                <Text style={styles.num}>{props.temp}</Text>
                <Text style={styles.unit}>°C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize : 40,
        textAlign: 'center',
        padding: 20,
        color: 'white'
    },
    descript: {
        fontSize : 22,
        textAlign: 'center',
        padding: 20,
        color: 'white'
    },
    temp:{
        flexDirection: 'row',
        padding : 15
    },
    num: {
        fontSize : 45,
        paddingLeft : '42%',
        letterSpacing: 10,
        color: 'white'
    },
    unit: {
        fontSize : 25,  
        color: 'white',
        textAlignVertical: 'center'
    }
});
