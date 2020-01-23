import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import {getBookList} from '_actions';
import {Store} from '_reducers';

import {Text} from '_atoms';

const home = () => {
  const {book} = useContext(Store);
  const [stateBook, dispatchBook] = book;

  useEffect(() => {
    getBookList(dispatchBook);
  }, []);

  if (stateBook.loading) {
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Now loading ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={stateBook.data}
        renderItem={({item}) => (
          <View style={{padding: 20}}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.primary_isbn10}
      />
    </SafeAreaView>
  );
};

export default home;
