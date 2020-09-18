import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "react-router-native";

const People = (props) => {
  const [redirect, SetRedirect] = useState(false);
  return (
    <View>
      {props.people.map((humon) => (
        <View key={humon.id}>
          {redirect ? (
            <Redirect to={`/dialogs/${humon.id}`} />
          ) : (
            <Text
              onPress={() => {
                console.log(humon.id);
                SetRedirect(true);
              }}
              style={styles.text}
            >
              {humon.name}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  return {
    people: state.Dialogs.people,
  };
};

export default connect(mapStateToProps)(People);
