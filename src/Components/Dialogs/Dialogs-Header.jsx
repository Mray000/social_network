import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Redirect } from "react-router-native";
import { SetNavigation } from "../../Redux/Reducers/AppReducer";

const DialogsHeader = ({ people, userId, SetNavigation }) => {
  const [redirect, SetRedirect] = useState(false);
  let humon = people.filter((p) => p.id == userId);
  let name;
  humon.map((h) => (name = h.name));

  if (redirect) {
    return <Redirect to={"/dialogs"} />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          SetRedirect(true);
          SetNavigation(true);
        }}
        style={styles.button}
      >
        <Icon name="keyboard-backspace" size={34} color="#7E17A5" />
      </TouchableOpacity>
      <View style={styles.person_container}>
        <Image source={require("../../images/ava.png")} style={styles.img} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "#000015",
    height: 52,
    borderColor: "#4E97B7",
    borderStyle: "solid",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  text: {
    color: "white",
    fontSize: 24,
    // fontFamily: "Open Sans",
    fontWeight: "bold",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "purple",
    width: 50,
  },
  person_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    width: 364,
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  people: state.Dialogs.people,
});

export default connect(mapStateToProps, { SetNavigation })(DialogsHeader);
