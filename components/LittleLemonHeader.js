import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.1, backgroundColor: '#F4CE14', alignItems: "center", justifyContent: "flex-end" }}>
            <Text style={{ fontSize: 30, color: 'black' }}>
                Little Lemon
            </Text>
        </View>
    );
}