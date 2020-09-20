import React from "react";
import People from "./Dialogs-People";
import Message from "./Dialogs-Message";
import AddMessage from "./Dialogs-AddMessage";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../utils/AuthRedirect";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { withRouter } from "react-router-native";
import DialogsHeader from "./Dialogs-Header";

const image = {
  uri: "https://mfiles.alphacoders.com/753/753320.jpg",

  // "https://i.pinimg.com/736x/0c/2a/c8/0c2ac8aa158ddad9fa3d7e9e3dae7eed.jpg",
};

const Dialogs = (props) => {
  // let userId = !!props.userId;
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        {/* <View>DIALOGS</View> */}
        {!props.userId && <People />}
        {props.userId && (
          <View>
            <DialogsHeader userId={props.userId} />
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
    // position: "absolute",
  },
  messages: {
    width: 400,
    // backgroundColor: "red",
  },
});

export default Dialogs;
