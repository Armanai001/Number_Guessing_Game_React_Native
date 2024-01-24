import {StyleSheet, Text, View} from "react-native";

export default function GuessListItem({chance, guess}: { guess: number, chance: number }) {
    return <View style={styles.container}>
        <Text style={styles.chance}>
            # {chance}
        </Text>
        <Text style={styles.guess}>
            Opponent's Guess: {guess}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        backgroundColor: '#750c0c',
    },
    chance: {
        color: '#f3ca3f',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    guess: {
        color: '#f3ca3f',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
})