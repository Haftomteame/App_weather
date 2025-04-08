import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { weatherBroadcastButtonStyles } from '../styles/WeatherBroadcastButtonStyles';

const WeatherBroadcastButton = () => {
  const openWeatherBroadcast = async () => {
    // URL de la diffusion météo (à remplacer par l'URL réelle)
    const weatherBroadcastUrl = 'https://www.meteofrance.com/';
    
    try {
      const supported = await Linking.canOpenURL(weatherBroadcastUrl);
      
      if (supported) {
        await Linking.openURL(weatherBroadcastUrl);
      } else {
        console.error(`L'URL ${weatherBroadcastUrl} n'est pas supportée`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ouverture de l\'URL:', error);
    }
  };

  return (
    <TouchableOpacity 
      style={weatherBroadcastButtonStyles.button}
      onPress={openWeatherBroadcast}
    >
      <Ionicons name="radio" size={24} color="white" />
      <Text style={weatherBroadcastButtonStyles.buttonText}>Diffusion Météo</Text>
    </TouchableOpacity>
  );
};

export default WeatherBroadcastButton; 