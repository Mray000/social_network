import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Post from "./Profile-Post";
import AddPost from "./Profile-AddPost";
import { ScrollView } from "react-native-gesture-handler";
import ProfileElementsContainer from "./Elements/Profile-ProfileElementsContainer";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileElementsContainer />
      {/* <AddPost />
      <ScrollView>
        <Post />
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Profile;
