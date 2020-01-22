import React, { useEffect } from 'react';
import { View } from 'react-native';

import {
    getBookList,
} from '_actions';

import {
    Text,
} from '_atoms';

const home = () => {
    useEffect(() => {
        getBookList();
    }, []);

    return (
        <View>
            <Text>This is Home Page.</Text>
        </View>
    );
};

export default home;