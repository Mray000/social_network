import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Post from "./Profile-Post";
import AddPost from "./Profile-AddPost";
import { ScrollView } from "react-native-gesture-handler";
import ProfileElementsContainer from "./Elements/Profile-ProfileElementsContainer";

const image = {
  uri:
    // "https://i.pinimg.com/originals/d7/66/9b/d7669b1ef72b0ca3bf7cf641b43243f1.jpg",
    // "https://i.pinimg.com/originals/11/0a/95/110a95ce2d8e1dd450b37ddfbe596a3b.jpg",
    // "https://i.pinimg.com/originals/ab/9f/5c/ab9f5c25767e7622c159c19e72852eb6.png",
    // "https://i.pinimg.com/originals/fc/32/87/fc328785bb4b49bdf775692773cfbba0.png",
    // "https://i.pinimg.com/originals/8c/49/81/8c49812ff66cc91f88221a0959e0d447.jpg",
    // "https://64.media.tumblr.com/fed1d59569eb717643359db9dd752c1c/tumblr_pnt4fio1Gk1v37ryh_540.png",
    "https://mfiles.alphacoders.com/753/753320.jpg",
  // "https://i.pinimg.com/564x/5b/d0/22/5bd0221dc523577f7088a7bd7f0f70f2.jpg",
};

const Profile = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <ProfileElementsContainer />
      <AddPost />
      <ScrollView>
        <Post />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Profile;
