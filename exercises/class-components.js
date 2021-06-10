import React, { useState } from "react";
import { Text, Button, View } from "react-native";

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>Press Count: {this.state.count}</Text>
        <Button
          title="Press Me"
          onPress={() =>
            this.setState((state) => {
              return {
                count: state.count + 1,
              };
            })
          }
        />
      </View>
    );
  }
}

export default Screen;
