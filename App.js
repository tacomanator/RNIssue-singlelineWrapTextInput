import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const removeBreaks = text => text.replace(/(\r\n|\n|\r)/gm, "");

const onSubmitEditing = function(e) {
  console.log("onSubmitEditing");
  e.preventDefault();
  return false;
};

const onKeyPress = function(e) {
  console.log("onKeyPress");
  e.preventDefault();
  if (e.nativeEvent.key == "Enter") {
    console.log("Detected enter");
    e.preventDefault();
    return false;
  }
};

export default function App() {
  const [text, setText] = React.useState();

  const onChange = e => {
    console.log("onChange");
    e.preventDefault();
    setText(removeBreaks(e.nativeEvent.text));
    return false;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress} // can detect Enter but not prevent it
        multiline={true} // otherwise text will not wrap as desired
        defaultValue={text} // no way to remove newlines with this alone
        returnKeyType="none" // doesn't seem to help this issue
        blurOnSubmit={false} // otherwise keyboard will dismiss
        onSubmitEditing={onSubmitEditing} // no effect either
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 60
  },
  input: {
    fontSize: 26,
    flex: 1
  }
});
