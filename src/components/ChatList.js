import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Logger from '../services/loggerService';
import definitions from '../styles/definitions';

const ChatList = ({chats}) => {
  const navigation = useNavigation();

  const mappedList =
    chats &&
    chats.map((chat, index) => (
      <Ripple
        key={index}
        rippleSequential={true}
        onPress={() => navigation.navigate('Chat', chat)}
        onLongPress={() => alert('ok')}
        style={{
          paddingHorizontal: definitions.layout.gutters.xs,
          paddingVertical: definitions.layout.gutters.xxs,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View>
            <Image
              source={{
                uri: chat.photo,
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 99,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 15,
              alignItems: 'flex-start',
              alignSelf: 'center',
            }}>
            <Text>{chat.name}</Text>
            <Text>{chat.message}</Text>
          </View>
          <View
            style={{
              paddingRight: 5,
              paddingTop: 10,
              alignSelf: 'flex-start',
            }}>
            <Text style={{fontSize: 11, color: 'gray'}}>
              {chat.messageDate}
            </Text>
          </View>
        </View>
      </Ripple>
    ));
  return (
    <View style={{marginVertical: definitions.layout.gutters.xs}}>
      {mappedList}
    </View>
  );
};

export default ChatList;
