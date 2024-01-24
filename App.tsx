import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from "./src/screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
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
                        <StartGameScreen/>
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
        marginTop: '20%',
        height: '70%'
    }
});
