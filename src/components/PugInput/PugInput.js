import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PugInput extends Component {
  state = {
    pugName: ""
  };

  componentDidMount() {
    
  }

  pugNameChangedHandler = val => {
    this.setState({
      pugName: val
    });
  };

  pugSubmitHandler = () => {
    if (this.state.pugName.trim() === "") {
      return;
    }

    this.props.onPugAdded(this.state.pugName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          pugholder="An awesome pug"
          value={this.state.pugName}
          onChangeText={this.pugNameChangedHandler}
          style={styles.pugInput}
        />
        <Button
          title="Add"
          style={styles.pugButton}
          onPress={this.pugSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  pugInput: {
    width: "70%"
  },
  pugButton: {
    width: "30%"
  }
});

export default PugInput;
