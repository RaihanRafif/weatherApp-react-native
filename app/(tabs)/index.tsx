import WeatherInfo from "@/components/components/weatherInfo";
import WeatherSearch from "@/components/components/weatherSearch";
import { BASE_URL } from '../../constants/constant'
import axios from "axios";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {


  const searchWeather = (location: any) => {
    axios
      .get(`${BASE_URL}?q=${location}&appid=${process.env['API_KEY']}`)
      .then((response) => {
        const data = response.data
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})