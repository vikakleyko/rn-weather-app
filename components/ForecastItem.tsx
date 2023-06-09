import { Image, StyleSheet, Text, View } from "react-native";
import { Timeseries } from "../lib/types";
import {
  getForecastItemDetails,
  getHours,
  getTemperatureCelsius,
  getWeekDay,
} from "../lib/utils";

type ForecastItemProps = {
  item: Timeseries;
};

export default function ForecastItem({
  item: {
    time,
    data: { next_6_hours, instant },
  },
}: ForecastItemProps) {
  function getImageLink() {
    return getForecastItemDetails(next_6_hours?.summary.symbol_code)?.imageLink;
  }

  function getText() {
    return getForecastItemDetails(next_6_hours?.summary.symbol_code)?.text;
  }

  function getTemperature() {
    return getTemperatureCelsius(instant.details.air_temperature);
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.column1}>
        <Image
          source={getImageLink()}
          style={{ width: 120, height: 120 }}
          alt={getText()}
        />
        <Text style={styles.temperature}>{getTemperature()}°C</Text>
      </View>
      <View style={styles.column2}>
        <View style={styles.timeContainer}>
          <Text style={styles.day}>{getWeekDay(time)}</Text>
          <Text style={styles.time}>{getHours(time)}.00</Text>
        </View>
        <Text style={styles.description}>{getText()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 40,
    marginVertical: 30,
  },
  column1: {},
  column2: {
    marginLeft: 50,
  },
  timeContainer: {
    alignItems: "flex-end",
    columnGap: 10,
    flexDirection: "row",
  },
  temperature: {
    fontSize: 18,
    fontStyle: "italic",
  },
  time: {
    fontSize: 24,
    fontWeight: "700",
  },
  day: {
    fontSize: 24,
    fontWeight: "700",
  },
  description: {
    fontSize: 18,
    fontStyle: "italic",
    paddingVertical: 10,
  },
});
