import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>MEMO</Text>
            <Image
            source={require('../Image/checklist.png')}
                style={{ 
                    width: 250,
                    height: 250,
                    marginTop : 20,
                    alignSelf : 'center',}}
            />
            <TouchableOpacity
            
                style={styles.button}
                onPress={()=> navigation.navigate("Index")}
            >
                <Text style={styles.buttonText}>Get Started </Text>
            </TouchableOpacity>
            
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        justifyContent : 'center',
        backgroundColor : '#fff',
    },
    text : {
        color : '#000',
        fontSize : 50,
        paddingLeft : 20,
        alignSelf : 'center',
    },
    button: {
        backgroundColor: "#4A55A2",
        opacity: 10,
        borderRadius: 20,
        padding: 5,
        margin: 100,
        marginTop: 50,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 10,
        color: "#fff",
        alignSelf: "center",
    },
})

export default HomeScreen;