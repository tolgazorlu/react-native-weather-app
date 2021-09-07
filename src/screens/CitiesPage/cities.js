import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { Card, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'

const Cities = () => {

  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const fetchCities = (text)=>{
    setCity(text)
    fetch("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+text+"&locationType=city&format=json")    
    .then(item => item.json())
    .then(cityData => {
        setCities(cityData.location.address);
        console.log(cityData.location);
    })
}

  return (
    <LinearGradient colors={['#002855', '#023E7D', '#0353A4', '#0466C8']} style={{flex:1, padding: 20}}>
        <StatusBar
            backgroundColor="#002855"
            translucent={false}
        />
        <TextInput 
          label="Enter a city name"
          right={<TextInput.Icon name="city" />}
          value = {city}
          style = {styles.searchBar}
          onChangeText = {(text) => fetchCities(text)}
        />
        <FlatList 
        data = {cities}
        renderItem = {({item}) => {
          return(
            <Card style={styles.card}>
                <Text>{item}</Text>
            </Card>
          )
        }}
        keyExtractor = {item => item}
        />
    </LinearGradient>
)
}

const styles=StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    marginBottom: 5
  },
  card: {
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
    backgroundColor: 'white'
  }
})

export default Cities
