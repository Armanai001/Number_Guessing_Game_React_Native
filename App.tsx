import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from "./src/screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
    return (
        <LinearGradient colors={['#360101', '#e0b00f']} style={styles.container}>
            <ImageBackground
                source={require('./assets/images/BackGround.jpg')}
                resizeMode="cover"
                style={styles.backImage}
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
        opacity: 0.9
    },
    box:{
        marginTop:'50%'
    }
});
