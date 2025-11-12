import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecipesContext } from "../../../App";
import Card from "../../components/Card";
import Input from "../../components/Input";
import styles from "./styles";

const Search = () => {
    const { recipes } = useContext(RecipesContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (keyword?.length > 2) {
            const filteredItems = recipes?.filter(rec => rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase()))
            setFilteredRecipes(filteredItems);
        } else {
            setFilteredRecipes([]);
        }
    }, [keyword])

    return (
        <SafeAreaView style={styles.container}>
            <Input autoFocus placeholder='Search Recipe' showSearchIcon={'../../../assets/search.png'} onChangeText={setKeyword} value={keyword} />

            <FlatList
                data={filteredRecipes}
                numColumns={2}
                style={{ flexGrow: 1 }}
                keyExtractor={item => String(item?.id)}
                renderItem={({ item, index }) => (
                    <Card
                        title={item?.name}
                        servings={item?.num_servings}
                        image={item?.thumbnail_url}
                        rating={item?.user_ratings?.score}
                        author={item?.credits?.length
                            ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url }
                            : null}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default React.memo(Search);