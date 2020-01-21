import React from 'react';
import { View } from 'react-native';

import {
    Text,
} from '_atoms';

const login = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('App')}>This is Login Page.</Text>
        </View>
    );
};

export default login;