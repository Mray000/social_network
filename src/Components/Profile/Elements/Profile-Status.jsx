import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
// import { Button } from "react-native-clean-form";
import { StatusReduxForm } from "./Profile-StatusForm";

const Status = (props) => {
  let [editMode, SetEditMode] = useState(false);
  let [status, SetStatus] = useState(props.aboutMe);
  const ActivateEditMode = () => {
    SetEditMode(true);
  };
  const DeactivateEditMode = () => {
    SetEditMode(false);
  };
  useEffect(() => {
    SetStatus(props.aboutMe);
  }, [props.aboutMe]);

  const onSubmit = (formData) => {
    DeactivateEditMode();
    SetStatus(formData.status);
    props.UpdateStatus(formData.status);
  };

  return (
    <View style={styles.container}>
      {!editMode && (
        <TouchableNativeFeedback
          onPress={ActivateEditMode}
          // background={
          //   Platform.OS === "android"
          //     ? TouchableNativeFeedback.SelectableBackground()
          //     : ""
          // }
        >
          <View style={styles.status_container}>
            <Text style={styles.text}>
              {status}
              {/* {Platform.OS !== "android" ? "(Android only)" : ""} */}
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
      {editMode && (
        <StatusReduxForm
          onSubmit={onSubmit}
          status={status}
          initialValues={{ status: status }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 30,
    marginTop: 10,
  },

  status_container: {
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Status;
