import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "blue",
        width: 100,
        height: 40,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => alert("Thank you for pressing my button!")}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Button!</Text>
    </TouchableOpacity>
  );
};
