import WeatherInfo from "@/components/components/weatherInfo";
import WeatherSearch from "@/components/components/weatherSearch";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})