import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Alert, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Context } from "../context/BlogContext";

const IndexScreen = ({navigation}) => {
    const {state, addMemo, delMemo}= useContext(Context);
    const ConfirmDelete = (id) => {
        return Alert.alert(
            "Delete",
            "Confirm Delete",
        [
            {
                text: "Cancel",
                onPress: () => console.log( "Cancel to delete "),
                style : "Cancel",
            },
            {
                text: "Confirm",
                onPress: () => delMemo(id),
            },
        ],
    { cancleable : false}
);
    }
    return(
        <View style ={styles.container}>
            <FlatList
                data = {state}
                keyExtractor={(memo)=>memo.title}
                renderItem={({ item }) => {
                    return( 
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                            <View style = {styles.list} >
                            <AntDesign name="checkcircle" size={24} color="#FFC436" />
                                <Text style={{fontSize : 18,}}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress = { () => ConfirmDelete(item.id)} >
                                    <Ionicons name="trash-bin" size={24} color= "black" />
                                </TouchableOpacity>
                                
                            </View>
                        </TouchableOpacity>
                )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        padding : 15,
    },
    list: {
        paddingVertical : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : 2,
        borderBottomColor : '#4A55A2',

    },
})

export default IndexScreen;