import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { Link, withRouter } from "react-router-native";
import LinkCreator from "../../mini-components/LinkCreator";

const Navigation = ({ match }) => {
  const navigators = ["profile", "dialogs", "music", "settings"];
  return (
    <View style={styles.nav}>
      {navigators.map((n) => {
        if (n === "profile")
          return <LinkCreator link="profile" name="home" type={null} />;
        if (n === "dialogs")
          return <LinkCreator link="dialogs" name="message-square" />;
        else {
          return <LinkCreator link={n} />;
        }
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0E083D",
  },
});

export default withRouter(Navigation);
