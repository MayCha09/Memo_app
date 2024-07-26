import React, {useContext} from "react";
import { View, Text, StyleSheet,  } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);

    const memo = state.find(memo => memo.id == route.params.id)
    return (
        <View style = {styles.container}>
            <Text>[ID : {route.params.id}]</Text>
            <Text style = {styles.title}>{memo.title}</Text>
            <Text style = {styles.content}>{memo.content}</Text>
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
        fontSize : 26,
        fontWeight : 'bold',
        marginTop : 10,
        alignSelf : 'center',
        paddingLeft : 20,
    },
    content: {
        fontSize : 18,
        marginTop : 10,
        paddingLeft : 20,
    },
})

export default ShowScreen;