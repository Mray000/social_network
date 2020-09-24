import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Country = ({ country = "Russia", town = "Kazan" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {country}, {town}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E083D",
    marginTop: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Country;
