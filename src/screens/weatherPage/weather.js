import React from 'react';
import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import Main from '../components/weatherPageComponents/main';
import Today from '../components/weatherPageComponents/today';
import styles from './weatherStyle';
import LinearGradient from 'react-native-linear-gradient';

function Weather() {
    return (
        <LinearGradient colors={['#002855', '#023E7D', '#0353A4', '#0466C8']} style={styles.container}>
            <StatusBar
                backgroundColor="#002855"
                translucent={false}
            />
            <View style={{ flex: 1 }}>
                <Main />
            </View>
            <View style={{ flex: 0.6 }}>
                <View>
                    <Text style={styles.title}>Today</Text>
                </View>
                <ScrollView horizontal={true} style={styles.todayWeathers}>
                    <Today />
                    <Today degree="15" />
                    <Today />
                    <Today />
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

export default Weather;