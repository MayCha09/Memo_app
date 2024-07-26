import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const MemoForm = ({ onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);


    return (
        <View style = {styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Content</Text>
            
            <TextInput
                style={styles.input}
                multiline
                numberOfLines={4}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onSubmit(title, content, );
                }}
            >
                <Text style={styles.buttonText}>Submit Memo</Text>
            </TouchableOpacity>
        </View>
    );
};

MemoForm.defaultProps = {
    initValues: { title: "", content: "" , },
};

const styles = StyleSheet.create({
    
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 10,
        alignSelf : "center",
    },
    input: {
        fontSize: 18,
        borderWidth: 1.5,
        borderColor: "#B4B4B3",
        borderRadius: 15,
        padding: 6,
        paddingLeft: 15,
        margin: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#4A55A2",
        opacity: 10,
        borderRadius: 10,
        padding: 10,
        margin: 70,
        marginTop: 30,
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
});

export default MemoForm;