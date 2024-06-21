import WeatherInfo from "@/components/components/weatherInfo";
import WeatherSearch from "@/components/components/weatherSearch";
import { BASE_URL } from '../../constants/constant'
import axios from "axios";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [weatherData, setWeatherData] = useState()

  const [status, setStatus] = useState('')

  const searchWeather = (location: any) => {
    // Mengatur status ke "loading"
    setStatus('loading')
    axios
      .get(`${BASE_URL}?q=${location}&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
      .then((response) => {
        const data = response.data
        data.visibility /= 1000
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15
        data.main.temp = data.main.temp.toFixed(2)
        setWeatherData(data)
        // Mengatur status ke "success"
        setStatus('success')
      })
      .catch((error) => {
        // Mengatur status ke "error"
        setStatus('error')
      })
  }

  const renderComponent = () => {    
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />
      case 'success':
        return <WeatherInfo weatherData={weatherData} />
      case 'error':
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        )
      default:
        return
    }
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginTop20: {
    marginTop: 20
  }
})