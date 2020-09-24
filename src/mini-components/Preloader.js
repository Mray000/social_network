import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

const Preloader = () => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://i.pinimg.com/originals/0e/3e/68/0e3e683a50835eee5c54c48f6c590775.jpg",
      }}
      style={styles.imageBack}
    >
      <Image source={require("../images/preloader.gif")} style={styles.image} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBack: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0E073C",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
});

export default Preloader;
