import React from "react";
import People from "./Dialogs-People";
import Message from "./Dialogs-Message";
import AddMessage from "./Dialogs-AddMessage";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../utils/AuthRedirect";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { withRouter } from "react-router-native";

const image = {
  uri:
    // "https://i.pinimg.com/originals/d7/66/9b/d7669b1ef72b0ca3bf7cf641b43243f1.jpg",
    // "https://i.pinimg.com/564x/da/64/22/da6422b7856aeb095da4ea3bcb4de53d.jpg",
    // "https://i.pinimg.com/736x/90/e4/d4/90e4d4e5fa9ab10eafc3ae29cca284bf.jpg",
    // "https://i.pinimg.com/originals/11/0a/95/110a95ce2d8e1dd450b37ddfbe596a3b.jpg",
    // "https://images.wallpapersden.com/image/download/synthwave-4k_66224_1125x2436.jpg",
    // "https://i.pinimg.com/originals/ab/9f/5c/ab9f5c25767e7622c159c19e72852eb6.png",
    // "https://i.pinimg.com/originals/fc/32/87/fc328785bb4b49bdf775692773cfbba0.png",
    // "https://i.pinimg.com/originals/8c/49/81/8c49812ff66cc91f88221a0959e0d447.jpg",
    // "https://64.media.tumblr.com/fed1d59569eb717643359db9dd752c1c/tumblr_pnt4fio1Gk1v37ryh_540.png",
    "https://mfiles.alphacoders.com/753/753320.jpg",
};

const Dialogs = (props) => {
  let userId = !!props.userId;
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        {/* <View>DIALOGS</View> */}
        {!userId && <People />}
        {userId && (
          <View>
            <ScrollView style={styles.messages}>
              <Message />
            </ScrollView>
            <View>
              <AddMessage />
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  messages: {
    width: 400,
    // backgroundColor: "red",
  },
});

export default Dialogs;
