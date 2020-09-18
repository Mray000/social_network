import React from "react";
import { Link } from "react-router-native";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

const Navigation = () => {
  return (
    <View style={styles.nav}>
      <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
        <Icon name="home" color="#517fa4" />
      </Link>
      <Link to="/dialogs" underlayColor="#f0f4f7" style={styles.navItem}>
        <Icon name="message-square" type="feather" color="#517fa4" />
      </Link>
      <Link to="/music" underlayColor="#f0f4f7" style={styles.navItem}>
        <Icon name="music" type="feather" color="#517fa4" />
      </Link>
      <Link to="/settings" underlayColor="#f0f4f7" style={styles.navItem}>
        <Icon name="settings" type="feather" color="#517fa4" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0E073C",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default Navigation;
