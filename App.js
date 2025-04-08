import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import { COLORS } from './src/constants/styles';
import { appStyles } from './src/styles/AppStyles';
import CurrentWeather from './src/components/CurrentWeather';
import HourlyForecast from './src/components/HourlyForecast';
import WeatherBroadcastButton from './src/components/WeatherBroadcastButton';
import Background from './src/components/Background';

export default function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission d\'accès à la localisation refusée');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setError('Erreur lors de la récupération de la localisation');
      }
    })();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code&timezone=auto`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('Erreur lors de la récupération des données météo');
    }
  };

  const renderContent = () => {
    if (error) {
      return (
        <View style={appStyles.centerContainer}>
          <Text style={[appStyles.errorText]}>{error}</Text>
        </View>
      );
    }

    if (!location || !weatherData) {
      return (
        <View style={appStyles.centerContainer}>
          <ActivityIndicator size="large" color={COLORS.card} />
          <Text style={[appStyles.loadingText]}>Chargement des données météo...</Text>
        </View>
      );
    }

    return (
      <ScrollView 
        style={appStyles.scrollView} 
        contentContainerStyle={appStyles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <WeatherBroadcastButton />
        <CurrentWeather weatherData={weatherData} />
        <HourlyForecast weatherData={weatherData} />
      </ScrollView>
    );
  };

  return (
    <Background>
      <SafeAreaView style={appStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.gradientStart} />
        {renderContent()}
      </SafeAreaView>
    </Background>
  );
} 