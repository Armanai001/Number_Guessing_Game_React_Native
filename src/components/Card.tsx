import {StyleSheet, Text, View} from "react-native";

export default function Card({title, children, style}: { title: string, children: any, style: any }) {
    return <View style={[styles.container, style]}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        <View style={styles.childrenContainer}>
            {children}
        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        borderColor: '#3b0303',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        margin: 2,
        height: '100%',
        backgroundColor: '#3b0404',
        shadowColor: 'black',
        shadowRadius: 9,
        shadowOffset: {width: 1, height: 9},
        display: 'flex'
    },
    textContainer: {
        padding: 5,
        marginBottom: 10
    },
    title: {
        color: '#f3ca3f',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',

    },
    childrenContainer: {
        flex: 1,
        margin: 5,
        marginTop: 10
    }
})
