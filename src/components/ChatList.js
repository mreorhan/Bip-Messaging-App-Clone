import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Logger from '../services/loggerService';
import definitions from '../styles/definitions';
import gStyles from '../styles/gStyles';
import {Press, User} from './base';

const ChatList = ({chats}) => {
  const navigation = useNavigation();

  const mappedList =
    chats &&
    chats.map((chat, index) => (
      <Press
        key={index}
        rippleSequential={true}
        onPress={() =>
          navigation.navigate('ChatStack', {
            screen: 'Chat',
            params: chat,
          })
        }
        style={{
          paddingHorizontal: definitions.layout.gutters.xs,
          paddingVertical: definitions.layout.gutters.xxs,
        }}>
        <User user={chat} photoSize={50} />
      </Press>
    ));
  return (
    <View style={{marginVertical: definitions.layout.gutters.xs}}>
      {mappedList}
    </View>
  );
};

export default ChatList;
