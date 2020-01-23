import React from 'react';
import {SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

import {Text} from '_atoms';

const login = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('App')}>This is Login Page.</Text>
    </SafeAreaView>
  );
};

login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default login;
