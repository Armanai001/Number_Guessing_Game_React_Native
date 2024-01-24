import {StyleSheet, Text, View} from "react-native";

export default function Title({children}: { children: any }) {
    return <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
            {children}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: 40,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white',
        borderRadius:12,
        padding:3,

    },
    titleText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding:5
    }

})