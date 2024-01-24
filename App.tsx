import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from "./src/screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useEffect, useState} from "react";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState(<></>);


    const startNewGame = () => {
        setCurrentScreen(<StartGameScreen startGame={startGame}/>)
    }

    const startGame = (num: number) => {
        setCurrentScreen(<GameScreen num={num} showResult={showResults}/>)
    }

    const showResults = (totalGuesses: number) => {
        setCurrentScreen(<GameOverScreen startNewGame={startNewGame} totalGuesses={totalGuesses}/>)
    }

    useEffect(() => {
        startNewGame()
    }, [])


    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
            <ImageBackground
                source={require('./assets/images/BackGround.jpg')}
                resizeMode="cover"
                style={styles.container}
                imageStyle={styles.backImage}
            >
                <SafeAreaView>
                    <View style={styles.box}>
                        {currentScreen && currentScreen}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backImage: {
        flex: 1,
        opacity: 0.25
    },
    box: {
        marginTop: '15%',
        height: '70%'
    }
});
