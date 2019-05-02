import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PugInput from "./src/components/PugInput/PugInput";
import PugList from "./src/components/PugList/PugList";
import PugDetail from "./src/components/PugDetail/PugDetail";
import pugImage from "./src/assets/charles-unsplash.jpg";

export default class App extends Component {
  state = {
    pugs: [],
    selectedPug: null
  };

  pugAddedHandler = pugName => {
    this.setState(prevState => {
      return {
        pugs: prevState.pugs.concat({
          key: Math.random(),
          name: pugName,
          image: pugImage
        })
      };
    });
  };

  pugDeletedHandler = () => {
    this.setState(prevState => {
      return {
        pugs: prevState.pugs.filter(pug => {
          return pug.key !== prevState.selectedPug.key;
        }),
        selectedPug: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPug: null
    })
  }

  pugSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPug: prevState.pugs.find(pug => {
          return pug.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PugDetail 
          selectedPug={this.state.selectedPug}
          onItemDeleted={this.pugDeletedHandler}
          onModalClosed={this.modalClosedHandler}/>
        <PugInput onPugAdded={this.pugAddedHandler} />
        <PugList
          pugs={this.state.pugs}
          onItemSelected={this.pugSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
