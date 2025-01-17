import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";

const EditScreen = ({route, navigation}) => {
    const {state, editMemo} = useContext(Context);
    const id = route.params.id;

    const memo = state.find(memo => memo.id == route.params.id)
    return (
        <View style = {styles.container}>
            <Text>[ID : {id}]</Text>
            <MemoForm initValues = {{title: memo.title, content: memo.content}}
            onSubmit={(title, content) => {
                editMemo(id, title, content)
                //navigation.navigate('Index');
                navigation.pop();
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10,
        backgroundColor : '#fff',
    },
    title: {
        fontSize : 24,
        fontWeight : 'bold',
        marginTop : 10,
        paddingLeft : 15,
    },
    content: {
        fontSize : 18,
        paddingLeft : 20,
    },
})

export default EditScreen;