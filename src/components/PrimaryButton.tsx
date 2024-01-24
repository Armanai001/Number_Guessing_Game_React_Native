import {Pressable, StyleSheet, Text, View} from "react-native";

export default function PrimaryButton({children, onPress}: { children: any, onPress: any }) {
    return <Pressable
        onPress={onPress}
        android_ripple={{color: '#640233'}}
        style={({pressed}) => pressed && styles.buttonPressed}
    >
        <View style={styles.container}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>

    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#751c2c",
        width: '100%',
        height: "100%",
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    buttonPressed: {
        opacity: 0.85,
        backgroundColor: '#5b0e1d',
        borderRadius: 10
    }
})