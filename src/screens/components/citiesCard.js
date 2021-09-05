import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'


function CitiesCard() {
    return (
        <ImageBackground style={styles.card}></ImageBackground>
    )
}

const styles = StyleSheet.create({

    img: {
        height: 100,
        width: 100,
    },
    card: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'red',
        padding: 20,
        justifyContent: 'space-around',
        backgroundColor: 'black',
        borderTopLeftRadius: 20,
        borderTopEndRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomEndRadius: 20
    },
    degreeText: {
        fontSize: 40,
        color: 'white'
    },
    cityText: {
        fontSize: 40,
        color: 'white'
    }
}
);


export default CitiesCard;