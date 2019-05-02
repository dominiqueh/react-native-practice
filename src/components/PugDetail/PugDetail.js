import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const pugDetail = props => {
  let modalContent = null;

  if (props.selectedPug) {
    modalContent = (
      <View>
        <Image source={props.selectedPug.image} style={styles.pugImage} />
        <Text style={styles.pugName}>{props.selectedPug.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPug !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  pugImage: {
    width: "100%",
    height: 400
  },
  pugName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default pugDetail;
