import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Home = () => {
    return (
        <SafeAreaView style={styles.background}>
            <Text>HOME</Text>
        </SafeAreaView>
    )
}

export default React.memo(Home);