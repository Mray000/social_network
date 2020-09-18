import React from "react";
import { View, Text, Image } from "react-native";

const Preloader = () => {
  return (
    <View
      style={{
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#0E073C",
        flex: 1,
      }}
    >
      <Image
        source={require("../images/preloader.gif")}
        style={{ width: 100, height: 100, marginLeft: "40%" }}
      />
      {/* <Text style={{ color: "white" }}>GGG</Text> */}
    </View>
  );
};

export default Preloader;
