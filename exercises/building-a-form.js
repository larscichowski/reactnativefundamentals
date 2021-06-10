import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 10,
    padding: 10,
    borderTopRightRadius: 5,
  },
  button: {
    backgroundColor: "#1589FF",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    height: 35,
    textAlignVertical: "center",
  },
});

export default () => {
  const [text, setText] = useState("");
  return (
    <View>
      <View>
        <Text style={styles.text}>What is your name?</Text>
      </View>
      <TextInput
        placeholder="John Doe"
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        setText=""
        onPress={() => alert(`Hello, ${text}`)}
      >
        <Text style={styles.buttonText}>SAY HELLO</Text>
      </TouchableOpacity>
    </View>
  );
};
