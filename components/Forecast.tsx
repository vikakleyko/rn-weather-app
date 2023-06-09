import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { timeStamps } from "../lib/const";
import { getHours } from "../lib/utils";
import ForecastItem from "./ForecastItem";

export default function Forecast() {
  const { data, error } = useFetch();

  return (
    <>
      {error && (
        <Text style={styles.errorMessage}>
          Something went wrong:( try again later
        </Text>
      )}
      {data && (
        <>
          <Text style={styles.titel}>Lulea</Text>
          <ScrollView style={styles.weatherContainer}>
            {data.properties.timeseries
              .filter(
                (el) =>
                  timeStamps.includes(getHours(el.time)) && el.data.next_6_hours
              )
              .map((item, index) => (
                <View key={index}>
                  <ForecastItem item={item} />
                </View>
              ))}
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    paddingTop: 20,
    color: "red",
  },
  weatherContainer: {
    width: "100%",
  },
  titel: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "italic",
  },
});
