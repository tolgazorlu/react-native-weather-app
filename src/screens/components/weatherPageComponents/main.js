import React, { useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Main() {

    const [currentMonth, setCurrentMonth] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [currentHour, setCurrentHour] = useState('');
    const [currentMinute, setCurrentMinute] = useState('');

    useEffect(() =>{
        var month = new Date().getMonth();
        setCurrentMonth(months[month]);
        var day = new Date().getDay();
        setCurrentDay(days[day]);
        var hour = new Date().getHours();
        setCurrentHour(hour)
        var min = new Date().getMinutes();
        setCurrentMinute(min)
    })

    return (
        <View style={styles.container}>
            <View style={styles.cityTitle}>
                <View>
                <Text style={{fontSize: 20, color:'white'}}>{currentDay}</Text>
                <Text style={styles.cityName}>London</Text>
                <Text style={styles.cityDate}>19-02-2021</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.hour}>{currentHour}:{currentMinute}</Text>
                    <Text style={styles.month}>{currentMonth}</Text>
                </View>
            </View>
            <View style={styles.weatherInfo}>
                <Image style={styles.weatherImgLogo} source={require('../../../assets/weather-logos/003-sunny.png')} />
                <Text style={{ fontSize: 70, fontWeight: '100', color: 'white' }}>|</Text>
                <View style={styles.weatherDescription}>
                    <Text style={styles.weatherDegree} >13°</Text>
                    <Text style={{ color: 'white' }}>Rainy Shower</Text>
                </View>
            </View>
            <View style={styles.description}>
                <View style={styles.wind}>
                    <Image style={{ height: 60, width: 60 }} source={require('../../../assets/weather-logos/007-windy.png')} />
                    <Text style={{color:'white', marginTop: 5}}>19km/h</Text>
                </View>
                <View style={styles.cloudy}>
                    <Image style={{ height: 60, width: 60 }} source={require('../../../assets/weather-logos/005-cloudy.png')} />
                    <Text style={{color:'white', marginTop: 5}}>75%</Text>
                </View>
                <View style={styles.humidity}>
                    <Image style={{ height: 60, width: 60 }} source={require('../../../assets/weather-logos/022-humidity.png')} />
                    <Text style={{color:'white', marginTop: 5}}>85%</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cityName: {
        fontSize: 60,
        fontWeight: '500',
        color:'white'
    },
    hour: {
        color: 'white',
        fontSize: 20,
    },
    month:{
        color: 'white'
    },
    cityDate: {
        fontWeight: '300',
        fontSize: 20, 
        color:'white',
    },
    cityTitle: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    weatherInfo: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    weatherImgLogo: {
        height: 150,
        width: 150
    },
    weatherDegree: {
        fontSize: 90, color:'white'
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 0.7,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    wind:{
        alignItems: 'center'
    },
    cloudy: {
        alignItems: 'center'
    },
    humidity: {
        alignItems: 'center'
    },
    weatherDescription: {
        alignItems: 'center'
    }
})

export default Main;