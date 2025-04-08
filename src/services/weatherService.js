const BASE_URL = 'https://api.open-meteo.com/v1';

export const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&hourly=temperature_2m,weather_code&timezone=auto`
    );
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error);
    throw error;
  }
}; 