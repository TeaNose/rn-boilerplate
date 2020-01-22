import React from 'react';
import { SafeAreaView } from 'react-native';

import {
    Text,
} from '_atoms';

const login = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('App')}>This is Login Page.</Text>
        </SafeAreaView>
    );
};

export default login;