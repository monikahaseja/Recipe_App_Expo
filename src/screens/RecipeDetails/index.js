import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title";
import styles from "./styles";

const RecipeDetails = ({ route }) => {
    const { item } = route?.params || {};
    console.log('item :>> ', JSON.stringify(item, null, 2));
    const instructions = item?.instructions || [];
    const nutrition = item?.nutrition;
    console.log('item?.instructions :>> ', JSON.stringify(item?.instructions, null, 2));
    console.log('nutriton :>> ', JSON.stringify(item?.nutrition, null, 2));
    delete nutrition?.updated_at;
    const nutritionKeys = Object.keys(nutrition || {});

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
                <Title style={{marginBottom: 32}} text={item?.name} />

                {nutritionKeys?.map(key => (
                    <View key={key} style={styles.row}>
                        <Text style={styles.key}>{key}</Text>
                        <Text style={styles.value}>{nutrition[key]}</Text>
                    </View>
                ))}

                <Title style={{ marginTop: 32, marginBottom: 16 }} text="Instructions" />

                {instructions?.map((instruction, index) => (
                    <View key={instruction?.id} style={styles.instructionRow}>
                        <Text style={styles.index}>{index + 1}</Text>
                        <Text style={styles.instructionText}>{instruction?.display_text}</Text>
                    </View>
                ))}

                {!instructions?.length ? (
                    <Text style={styles.value}>No instructions found.</Text>
                ) : null}

            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(RecipeDetails);