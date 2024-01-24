import {StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import GuessListItem from "../components/GuessListItem";


export default function GameScreen({showResult, num}: {
    showResult: any,
    num: number
}) {
    const handleHigher = () => {
        showResult(5);
    }

    const handleLower = () => {

    }
    return <View>
        <Title>
            Opponent's Guess
        </Title>
        <View style={styles.opponentGuess}>
            <Text style={{fontSize: 50}}>
                {num}
            </Text>
        </View>
        <Card title='Higher or Lower ?' style={styles.cardStyles}>
            <View style={styles.buttonContainer}>

                <View style={styles.buttons}>
                    <PrimaryButton onPress={handleHigher}>
                        +
                    </PrimaryButton>
                </View>
                <View style={styles.buttons}>
                    <PrimaryButton onPress={handleLower}>
                        -
                    </PrimaryButton>
                </View>
            </View>
        </Card>

        <View style={styles.listContainer}>
            <GuessListItem guess={3} chance={4}/>
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
        borderColor: '#0da467',
        borderStyle: 'solid',
        borderWidth: 2,


    }
})