import React from "react";
// import ava from "./../../../images/ava.png";
import { Image, StyleSheet, View } from "react-native";
// import { Input } from "react-native-clean-form";
// import { TextInput } from "react-native-gesture-handler";
// import { NavLink } from "react-router-dom";
// import AndroidWebView from "react-native-webview-file-upload-android";
// const Photo = ({ photo, mine, UpdatePhoto }) => {

//   return mine ? (
//     <>
//       <View>
//         <label htmlFor="inputPhoto">
//           <img src={photo ? photo : ava} alt="" id="profile-large-ava" />
//         </label>
//         <input
//           id="inputPhoto"
//           style={{ display: "none" }}
//           type="file"
//           onChange={(e) => {
//             e.target.files[0] && UpdatePhoto(e.target.files[0]);
//           }}
//         />
//       </View>
//       {/* <NavLink to="/edit" className="edit-profile-navlink">
//         Edit profile
//       </NavLink> */}
//     </>
//   ) : (
//     <img src={photo ? photo : ava} alt="" id="profile-large-ava" />
//   );
// };

const Photo = ({ photo }) => {
  const image = {
    uri: photo,
  };
  return (
    <View>
      <Image
        source={photo ? image : require("../../../images/ava.png")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    width: 150,
    height: 150,
  },
});

export default Photo;
