import React from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Hello, World!</Text>
    </View>
  );
};

export default App;
