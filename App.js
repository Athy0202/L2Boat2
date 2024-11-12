/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Boat from './components/Boats';

const Boats = () => {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>Get a boat for sale</Text>

                    <Boat
                        title="SEA RAY 500 SUNDANCER"
                        icon_name="ship"
                        poster={require('./img/sea_ray.jpg')}
                        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    />

                    <Boat
                        title="FOUR WINNS HORIZON 180"
                        icon_name="ship"
                        poster={require('./img/four_winns.jpg')}
                        description="A sporty look and refined details truly set the Horizon 180 above all others."
                    />

                    <Boat
                        title="FLIPPER 640 ST"
                        icon_name="ship"
                        poster={require('./img/flipper.jpg')}
                        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    />

                    <Boat
                        title="PRINCESS V48"
                        icon_name="ship"
                        poster={require('./img/princess.jpg')}
                        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior."
                    />

                    <Boat
                        title="BAYLINER 175 BOWRIDER"
                        icon_name="ship"
                        poster={require('./img/bayliner.jpg')}
                        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    />

                    <Boat
                        title="FAIRLINE TARGA 47"
                        icon_name="ship"
                        poster={require('./img/fairline.jpg')}
                        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    />
            </ScrollView>
        );
};

const styles = StyleSheet.create({
        container: {
                paddingVertical: 20,
                backgroundColor: '#f0f8ff',
        },
        title: {
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 15,
                color: '#333',
        },
});

export default Boats;
