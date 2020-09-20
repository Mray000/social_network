import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { AddMessageFunction } from "./../../Redux/Reducers/DialogsReducer";
import { required } from "../../utils/Validaters";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MyTextInput from "../../mini-components/MyInput";
import { Icon } from "react-native-elements";

const AddMessageForm = (props) => {
  return (
    <View onSubmit={props.handleSubmit} style={styles.container}>
      <Field
        placeholder={"New message"}
        name={"message"}
        component={MyTextInput}
        validate={[required]}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={props.handleSubmit(props.onSubmit)}
      >
        <Icon name="send" color="#7E17A5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 413,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
    // backgroundColor: "red",
  },
  input: {
    width: 350,
    backgroundColor: "#652E73",
    borderRadius: 8,
    padding: 10,
    color: "white",
    // marginLeft: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    // backgroundColor: "#7E17A5",
  },
  text: {
    color: "white",
  },
});

const AddMessageReduxForm = reduxForm({
  form: "message",
})(AddMessageForm);

const AddMessage = (props) => {
  const onSubmit = (formData) => {
    formData.message ? props.AddMessageFunction(formData.message) : null;
    formData.message = "";
  };
  return (
    <View>
      <AddMessageReduxForm onSubmit={onSubmit} />
    </View>
  );
};

export default connect(Object, { AddMessageFunction })(AddMessage);
