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

    const [info, setInfo] = useState({
        name: "-",
        temp: "-",
        humidity: "-",
        desc: "-",
        icon: "-",
        clouds: "-",
        speed: "-"
    })

    useEffect(() => {
        getWeather()
    }, [])

    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=aa5c4c46672242a4304b4081511d3174&units=metric`)
            .then(data => data.json())
            .then(results => {
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main.humidity,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                    clouds: results.clouds.all,
                    speed: results.wind.speed
                })
                console.log(results)
            })
    }


    return (
        <View style={styles.container}>
            <View style={styles.cityTitle}>
                <View>
                <Text style={{fontSize: 20, color:'white'}}>{currentDay}</Text>
                <Text style={styles.cityName}>{info.name}</Text>
                <Text style={styles.cityDate}>19-02-2021</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.hour}>{currentHour}:{currentMinute}</Text>
                    <Text style={styles.month}>{currentMonth}</Text>
                </View>
            </View>
            <View style={styles.weatherInfo}>
                <Image style={styles.weatherImgLogo} source={{uri:('http://openweathermap.org/img/wn/10d@2x.png')}} />
                <Text style={{ fontSize: 70, fontWeight: '100', color: 'white' }}>|</Text>
                <View style={styles.weatherDescription}>
                    <Text style={styles.weatherDegree} >{info.temp}°</Text>
                    <Text style={{ color: 'white' }}>{info.desc}</Text>
                </View>
            </View>
            <View style={styles.description}>
                <View style={styles.wind}>
                    <Image style={{ height: 60, width: 60 }} source={require('../../../assets/weather-logos/007-windy.png')} />
                    <Text style={{color:'white', marginTop: 5}}>{info.speed}km/h</Text>
                </View>
                <View style={styles.cloudy}>
                    <Image style={{ height: 60, width: 60 }} source={require('../../../assets/weather-logos/03d.png')} />
                    <Text style={{color:'white', marginTop: 5}}>{info.clouds}%</Text>
                </View>
                <View style={styles.humidity}>
                    <Image style={{ height: 60, width: 60 }} source={require('../../../assets/weather-logos/022-humidity.png')} />
                    <Text style={{color:'white', marginTop: 5}}>{info.humidity}%</Text>
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
        fontSize: 45, color:'white'
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