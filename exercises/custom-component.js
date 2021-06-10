// Creating a Custom Component
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { back } from "react-native/Libraries/Animated/src/Easing";

const Button = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ff637c",
        alignSelf: "center",
        marginVertical: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        ...buttonStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <>
      <Button text="Say hello" onPress={() => alert("hello!")} />
      <Button
        text="Say goodbye"
        onPress={() => alert("Goodbye")}
        buttonStyle={{
          backgroundColor: "#4dc2c2",
        }}
      />
    </>
  );
};
