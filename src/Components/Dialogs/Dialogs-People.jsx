import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Redirect } from "react-router-native";
// import { LinearGradient } from "expo";
const People = (props) => {
  const [redirect, SetRedirect] = useState([false, 0]);

  if (redirect[0]) {
    return <Redirect to={`/dialogs/${redirect[1]}`} />;
  }

  return (
    <ScrollView style={styles.container}>
      {props.people.map((humon) => {
        return (
          <TouchableOpacity
            key={humon.id}
            style={styles.person_container}
            onPress={() => {
              SetRedirect([true, humon.id]);
            }}
          >
            <Image
              source={require("./../../images/ava.png")}
              style={styles.img}
            />
            <View>
              <Text style={styles.text}>{humon.name}</Text>
              <Text style={styles.text}>Last message</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
    // backgroundColor: "red",
  },
  person_container: {
    alignItems: "center",
    flexDirection: "row",
    width: 410,
    height: 65,
    marginTop: 10,
    backgroundColor: "rgba(0,0,61, 0.9)",
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  text: {
    color: "white",
    // fontWeight: "bold",
    // marginBottom: 22,
    // fontSize: 18,
  },
  img: {
    width: 60,
    height: 60,
  },
});

const mapStateToProps = (state) => {
  return {
    people: state.Dialogs.people,
  };
};

export default connect(mapStateToProps)(People);
