import React from 'react';
import { View, Text } from 'react-native';
import { currentWeatherStyles } from '../styles/CurrentWeatherStyles';

const CurrentWeather = ({ weatherData }) => {
  const currentHour = new Date().getHours();
  const temperature = weatherData.hourly.temperature_2m[currentHour];
  const humidity = weatherData.hourly.relative_humidity_2m[currentHour];
  const precipitation = weatherData.hourly.precipitation_probability[currentHour];
  const weatherCode = weatherData.hourly.weather_code[currentHour];

  return (
    <View style={currentWeatherStyles.container}>
      <Text style={currentWeatherStyles.title}>Météo Actuelle</Text>
      <View style={currentWeatherStyles.weatherInfo}>
        <Text style={currentWeatherStyles.temperature}>{temperature}°C</Text>
        <View style={currentWeatherStyles.details}>
          <Text style={currentWeatherStyles.detail}>Humidité: {humidity}%</Text>
          <Text style={currentWeatherStyles.detail}>Précipitations: {precipitation}%</Text>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather; 