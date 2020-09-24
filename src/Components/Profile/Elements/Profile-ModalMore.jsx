import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Modal from "react-native-modal";
import Job from "./Profile-Job";
import Contacts from "./Profile-Contacts";

const ModalMore = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.moreContainer}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
      >
        <View style={styles.constainer2}>
          <View>
            <Text>Job</Text>
            <Job
              lookingForAJob={props.lookingForAJob}
              lookingForAJobDescription={props.lookingForAJobDescription}
            />
          </View>
          <View>
            <Text>Contacts</Text>
            <Contacts {...props.contacts} />
          </View>
          {/* <TouchableOpacity
            title="+"
            onPress={toggleModal}
            style={styles.close}
          >
            <Icon name="cross" size={36} color="purple" />
          </TouchableOpacity> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  constainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E083D",
    width: 410,
    borderRadius: 10,
    marginTop: 500,
    height: 350,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  moreContainer: {
    backgroundColor: "#0E083D",
    borderRadius: 6,
    width: 225,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },
  close: {
    marginLeft: 362,
    marginTop: -13,
  },
});

export default ModalMore;
