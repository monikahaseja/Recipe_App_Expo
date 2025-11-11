import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import styles from "./styles";

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input placeholder='Search Recipe' showSearchIcon={'../../../assets/search.png'}/>
        </SafeAreaView>
    )
}

export default React.memo(Search);