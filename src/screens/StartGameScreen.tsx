import {Alert, StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";
import Card from "../components/Card";
import Title from "../components/Title";

export default function StartGameScreen({startGame}: { startGame: (num: number) => void }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const resetInput = () => {
        setEnteredNumber('');
    }

    const confirmInput = () => {
        const parsedNumber = parseInt(enteredNumber);
        if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
            setEnteredNumber('');
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'cancel', onPress: resetInput}]
            )
        } else {
            startGame(parsedNumber);
        }
    }

    return <View style={styles.container}>
        <Title>
            Start a New Game
        </Title>
        <Card title="Enter a number" style={styles.cardStyles}>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputField}
                           keyboardType='number-pad'
                           maxLength={2}
                           autoCapitalize='none'
                           autoCorrect={false}
                           value={enteredNumber}
                           onChangeText={setEnteredNumber}
                />
            </View>


            <View style={styles.buttonContainer}>
                <View style={styles.buttonText}>
                    <PrimaryButton onPress={resetInput}>
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.buttonText}>
                    <PrimaryButton onPress={confirmInput}>
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </View>

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
    cardStyles: {
        height: '50%',
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        flex: 3
    },
    inputField: {
        borderBottomWidth: 2,
        height: '70%',
        width: 74,
        fontSize: 40,
        fontWeight: 'bold',
        borderBottomColor: "#f3ca3f",
        color: '#f3ca3f',
        textAlign: 'center'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 2
    },
    buttonText: {
        width: '50%',
        padding: 2,
        height: 45
    },
})
