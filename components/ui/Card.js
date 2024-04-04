import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { View } from "react-native";

function Card({children}) {
    return <View style={styles.card}>
        {children}
    </View>
}

const styles = StyleSheet.create({

    card: {
        padding: 16,
        marginHorizontal: 24,
        marginTop: 36,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center',
    },
})

export default Card;