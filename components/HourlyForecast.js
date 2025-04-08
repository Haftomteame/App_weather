import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const HourlyForecast = ({ hourlyData }) => {
  if (!hourlyData) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prévisions Horaires</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hourlyData.map((hour, index) => (
          <View key={index} style={styles.hourContainer}>
            <Text style={styles.hour}>{new Date(hour.dt * 1000).getHours()}:00</Text>
            <Image
              style={styles.icon}
              source={{
                uri: `http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`
              }}
            />
            <Text style={styles.temp}>{Math.round(hour.temp)}°C</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hourContainer: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hour: {
    fontSize: 16,
    marginBottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  temp: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HourlyForecast; 