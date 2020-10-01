import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import { compose } from "redux";
import LinkCreator from "../../mini-components/LinkCreator";

const Navigation = ({ match, isNavigation }) => {
  console.log(isNavigation);
  const navigators = ["profile", "dialogs", "music", "settings"];
  if (!isNavigation) {
    return <View />;
  } else
    return (
      <View>
        {/* <View
        style={{
          borderWidth: 1,
          borderColor: "#4E97B7",
          // margin: 10,
        }}
      /> */}
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
      </View>
    );
};
const styles = StyleSheet.create({
  nav: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#132636",
  },
});

const mapStateToProps = (state) => ({
  isNavigation: state.App.isNavigation,
});

export default compose(connect(mapStateToProps), withRouter)(Navigation);
