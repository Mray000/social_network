import React from "react";
import Contacts from "./Profile-Contacts";
import Job from "./Profile-Job";
import Status from "./Profile-Status";
import Photo from "./Profile-Photo";
import { View, Text, StyleSheet } from "react-native";

const ProfileElements = (props) => {
  const mine = props.match.params.userId === props.myId;
  return (
    <View style={styles.container}>
      <View>
        <Photo
          photo={props.profile.photos.large}
          mine={mine}
          UpdatePhoto={props.UpdatePhoto}
        />
      </View>
      <View style={styles.name_status_job}>
        <View style={styles.name}>
          <Text style={styles.text}>{props.profile.fullName}</Text>
        </View>
        <Status
          UpdateStatus={props.UpdateStatus}
          aboutMe={props.profile.aboutMe}
          userId={props.profile.userId}
        />
        <Job
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
        />
      </View>
      <View style={styles.contacts}>
        <Contacts {...props.profile.contacts} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-around",
    // color: "white",
  },
  name_status_job: {
    // backgroundColor: "blue",
    // marginLeft: "30%",
    // marginTop: "-30%",
    color: "white",
  },
  contacts: {
    // backgroundColor: "red",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    alignItems: "center",
  },
});

export default ProfileElements;
