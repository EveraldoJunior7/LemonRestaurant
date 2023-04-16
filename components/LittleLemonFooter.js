import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={{ flex: 0.05, backgroundColor: '#F4CE14', paddingVertical: 10, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, color: 'black' }}>
            Todos os direitos reservados a Little Lemon, 2022
            </Text>
        </View>
    );
}