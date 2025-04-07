# Application Météo React Native

Une application météo simple et élégante utilisant React Native et l'API OpenMeteo.

## Fonctionnalités

- Affichage de la météo actuelle
- Température actuelle
- Température ressentie
- Taux d'humidité
- Icône météo
- Prévisions horaires
- Localisation automatique

## Structure du projet

```
src/
  ├── components/          # Composants React Native
  │   ├── CurrentWeather.js
  │   └── HourlyForecast.js
  ├── constants/          # Constantes et configurations
  │   └── weatherIcons.js
  ├── hooks/             # Hooks personnalisés
  │   └── useLocation.js
  └── services/          # Services et API
      └── weatherService.js
```

## Prérequis

- Node.js
- npm ou yarn
- Expo CLI
- Un appareil mobile ou un émulateur

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd weather-app
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Démarrez l'application :
```bash
npm start
# ou
yarn start
```

4. Scannez le QR code avec l'application Expo Go sur votre appareil mobile ou lancez l'application dans un émulateur.

## API utilisée

L'application utilise l'API OpenMeteo (https://api.open-meteo.com) qui est gratuite et ne nécessite pas de clé API.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request. 