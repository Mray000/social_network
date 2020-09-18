import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
// import { ActionsContainer, Button } from "react-native-clean-form";
import { AddMessageFunction } from "./../../Redux/Reducers/DialogsReducer";
import { required } from "../../utils/Validaters";
import { View, Button, StyleSheet } from "react-native";
import MyTextInput from "../../mini-components/MyInput";

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
      {/* <ActionsContainer>
        <Button
          submitting={props.submitting}
          onPress={props.handleSubmit(props.onSubmit)}
          style={styles.button}
          // color="purple"
        >
        {"==>"}
        </Button>
      </ActionsContainer> */}
      <View style={styles.button}>
        <Button
          submitting={props.submitting}
          onPress={props.handleSubmit(props.onSubmit)}
          style={styles.button}
          color="purple"
          title="==>"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-around",
    backgroundColor: "red",
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  button: {
    width: 100,
    height: 40,
  },
});

const AddMessageReduxForm = reduxForm({
  form: "message",
})(AddMessageForm);

const AddMessage = (props) => {
  const onSubmit = (formData) => {
    props.AddMessageFunction(formData.message);
    formData.message = "";
  };
  return (
    <View>
      {/* <Text>message</Text> */}
      <AddMessageReduxForm onSubmit={onSubmit} />
    </View>
  );
};

export default connect(Object, { AddMessageFunction })(AddMessage);
