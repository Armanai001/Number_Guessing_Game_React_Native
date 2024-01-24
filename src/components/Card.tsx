import {StyleSheet, Text, View} from "react-native";

export default function Card({title, children}: { title: string, children: any }) {
    return <View style={styles.container}>
        <Text>
            {title}
        </Text>
        <View>
            {children}
        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {}
})
