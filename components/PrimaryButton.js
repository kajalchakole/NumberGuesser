import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
  function PressHandler() {
    console.log("Button Pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={PressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
