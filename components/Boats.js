// Boats.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

const Boat = ({ title, icon_name, poster, description }) => {
    return (
        <View style={styles.card}>
            <Icon name={icon_name} size={24} color="#4682b4" style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <Image source={poster} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },
});

export default Boat;
