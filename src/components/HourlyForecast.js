import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { hourlyForecastStyles } from '../styles/HourlyForecastStyles';

const HourlyForecast = ({ weatherData }) => {
  if (!weatherData) return null;

  const currentHour = new Date().getHours();
  const next24Hours = Array.from({ length: 24 }, (_, i) => (currentHour + i) % 24);

  return (
    <View style={hourlyForecastStyles.container}>
      <Text style={hourlyForecastStyles.title}>Prévisions sur 24h</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={hourlyForecastStyles.scrollContent}
      >
        {next24Hours.map((hour) => (
          <View key={hour} style={hourlyForecastStyles.hourCard}>
            <Text style={hourlyForecastStyles.hour}>{hour}:00</Text>
            <Text style={hourlyForecastStyles.temperature}>
              {Math.round(weatherData.hourly.temperature_2m[hour])}°C
            </Text>
            <Text style={hourlyForecastStyles.detail}>
              {weatherData.hourly.precipitation_probability[hour]}%
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HourlyForecast; 