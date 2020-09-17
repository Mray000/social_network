import React from "react";
import { StyleSheet, View } from "react-native";
import { Field, reduxForm } from "redux-form";
import MyTextInput from "../../../mini-components/MyInput";
import { required } from "../../../utils/Validaters";

const StatusForm = (props) => {
  return (
    <View style={styles.container}>
      <Field
        validate={[required]}
        component={MyTextInput}
        name="status"
        style={styles.input}
        submitting={props.submitting}
        onBlur={props.handleSubmit(props.onSubmit)}
      />
    </View>
  );
};

// const maxLength10 = maxLength(10);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "pink",
    marginTop: -3,
    borderRadius: 5,
  },
  input: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    height: 24,
  },
});

export const StatusReduxForm = reduxForm({
  form: "status",
})(StatusForm);
