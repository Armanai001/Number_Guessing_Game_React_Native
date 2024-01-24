import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import GuessListItem from "../components/GuessListItem";
import {useEffect, useState} from "react";


export default function GameScreen({showResult, num}: { showResult: any, num: number }) {

    // Generating random numbers
    let minimum = 1;
    let maximum = 100;

    const generateRandomNumber = (minimum: number, maximum: number, exclude: number): number => {
        const randomNumber = Math.floor(Math.random() * (maximum - minimum)) + minimum;

        if (randomNumber === exclude) {
            return generateRandomNumber(minimum, maximum, exclude);
        } else {
            return randomNumber;
        }
    }

    // Game controls
    const initialGuess = generateRandomNumber(1, 100, num);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessArray, setGuessArray] = useState([initialGuess])


    useEffect(() => {
        maximum = 100
        minimum = 1
    }, [])

    useEffect(() => {
        if (currentGuess === num) {
            showResult(guessArray.length);
        }
    }, [currentGuess, num, showResult])


    function handleGuess(direction: string) {
        if ((direction === 'lower' && currentGuess < num) ||
            (direction === 'higher' && currentGuess > num)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'},
            ]);
            return;
        }

        if (direction === 'lower') {
            maximum = currentGuess;
        } else {
            minimum = currentGuess + 1;
        }

        const newGuess = generateRandomNumber(minimum, maximum, currentGuess);
        setCurrentGuess(newGuess);
        setGuessArray((prevGuessArray) => [...prevGuessArray, newGuess]);
    }

    return <View>
        <Title>
            Opponent's Guess
        </Title>
        <View style={styles.opponentGuess}>
            <Text style={{fontSize: 50}}>
                {currentGuess}
            </Text>
        </View>
        <Card title='Higher or Lower ?' style={styles.cardStyles}>
            <View style={styles.buttonContainer}>

                <View style={styles.buttons}>
                    <PrimaryButton onPress={() => {
                        handleGuess('higher')
                    }}>
                        +
                    </PrimaryButton>
                </View>
                <View style={styles.buttons}>
                    <PrimaryButton onPress={() => {
                        handleGuess('lower')
                    }}>
                        -
                    </PrimaryButton>
                </View>
            </View>
        </Card>

        <View style={styles.listContainer}>
            {
                <FlatList data={guessArray}
                          renderItem={
                              (item) => <GuessListItem guess={item.item}
                                                       chance={guessArray.length - item.index}/>
                          }
                          keyExtractor={(item) => item.toString()}/>
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    opponentGuess: {
        backgroundColor: '#f3ca3f',
        width: '50%',
        height: 100,
        marginBottom: 20,
        display: 'flex',
        justifyContent: "center",
        alignSelf: 'center',
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',

    },
    cardStyles: {
        padding: 5,
        height: 150,
        width: '75%',
        display: 'flex',
        justifyContent: "space-between",
        alignSelf: 'center',

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    buttons: {
        width: '50%',
        height: 60,
        padding: 5,
    },
    listContainer: {
        height: 350,
        marginTop: 15

    }
})