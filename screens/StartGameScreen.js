import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding:16,
        marginHorizontal: 24,
        marginTop: 100,
        borderRadius:8,
        backgroundColor: '#72063c',
        elevation:4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius:6,
        shadowOpacity:0.25
    }
});


export default StartGameScreen;