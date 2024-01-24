import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({startNewGame, totalGuesses}: { startNewGame: any, totalGuesses: number }) {

    const handleNewGame = () => {
        startNewGame();
    }

    return <View style={styles.container}>
        <Title>
            Game Over
        </Title>
        <View>
            <Image source={require('../../assets/images/Success.png')} style={styles.imageStyle}/>
        </View>
        <Text style={styles.message}>
            Total Rounds taken by phone is {totalGuesses}
        </Text>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNewGame}>
                Start New Game
            </PrimaryButton>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    imageStyle: {
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: 150,
        alignSelf: 'center',
    },
    message: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    },
    buttonContainer: {
        marginTop: 10,
        width: 200,
        height: 50,
        alignSelf: 'center',
    }
})