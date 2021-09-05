import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Today = (props) => {
    return (
        <View style={styles.container}>
                <View style={styles.todayHours}>
                    <Text style={styles.hourText}>11.00am</Text>
                    <Image style={styles.hoursWeatherLogo} source={require('../../../assets/weather-logos/004-thunderstorm.png')} />
                    <Text style={styles.hourDegree}>{props.degree}°</Text>
                </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todayHours: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent:'center',
        width: 110,
        height: 180,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        backgroundColor: 'rgba(0,0,0, 0.4)'
        
    },
    hourText: {
        fontSize: 15,
        color: 'white',
        marginBottom: 10
    },
    hoursWeatherLogo: {
        height: 50,
        width: 50
    },
    hourDegree: {
        fontSize: 15,
        color: 'white',
        marginTop: 10
    }
})

export default Today;