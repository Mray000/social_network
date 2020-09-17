import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Post from "./Profile-Post";
import AddPost from "./Profile-AddPost";
import { ScrollView } from "react-native-gesture-handler";
import ProfileElementsContainer from "./Elements/Profile-ProfileElementsContainer";

const image = {
  uri:
    // "https://i.pinimg.com/originals/d7/66/9b/d7669b1ef72b0ca3bf7cf641b43243f1.jpg",
    // "https://i.pinimg.com/564x/da/64/22/da6422b7856aeb095da4ea3bcb4de53d.jpg",
    // "https://i.pinimg.com/736x/90/e4/d4/90e4d4e5fa9ab10eafc3ae29cca284bf.jpg",
    // "https://i.pinimg.com/originals/11/0a/95/110a95ce2d8e1dd450b37ddfbe596a3b.jpg",
    // "https://images.wallpapersden.com/image/download/synthwave-4k_66224_1125x2436.jpg",
    // "https://i.pinimg.com/originals/ab/9f/5c/ab9f5c25767e7622c159c19e72852eb6.png",
    "https://i.pinimg.com/originals/fc/32/87/fc328785bb4b49bdf775692773cfbba0.png",
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
    backgroundColor: "black",
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
