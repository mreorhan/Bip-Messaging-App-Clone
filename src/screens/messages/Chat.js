import React from 'react';
import {Text, View, Animated, ScrollView, LogBox, Keyboard} from 'react-native';
import gStyles from '../../styles/gStyles';
import EmojiBoard from 'react-native-emoji-board';

import chatStyles from '../../styles/chatStyles';
import {TextInput} from 'react-native-gesture-handler';
import {Press} from '../../components/base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/colors';
import definitions from '../../styles/definitions';
import {isEmoji} from '../../helpers/functions';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import Logger from '../../services/loggerService';
import {useRef} from 'react';
import moment from 'moment';
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

//animation start
let animVal = new Animated.Value(0);

const interpolateIcon = animVal.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 1],
});
const interpolateBar = animVal.interpolate({
  inputRange: [0, 1],
  outputRange: [
    parseInt(definitions.layout.screenWidth - 130),
    parseInt(definitions.layout.screenWidth - 110),
  ],
});
const animatedTransition = Animated.spring(animVal, {
  toValue: 1,
  useNativeDriver: false,
  tension: 60,
});
const animatedTransitionStop = Animated.spring(animVal, {
  toValue: 0,
  useNativeDriver: false,
});
//animation end

export const ChatScreen = (props) => {
  const [message, _setMessage] = useState('');
  const setMessage = (data) => {
    if (data != '') setIsLoaded(true);
    else if (data === '') setIsLoaded(false);
    _setMessage(data);
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [showEmoticons, setShowEmoticons] = useState(false);
  const [messageHistory, setMessageHistory] = useState([
    {
      id: 1,
      content: 'naber?',
      sendDate: new Date(),
      messageType: 'text',
    },
    {
      id: 2,
      content: 'iidir senden?',
      sendDate: new Date(),
      messageType: 'text',
    },
  ]);

  useEffect(() => {
    if (isLoaded) startAnimate();
    else {
      stopAnimate();
    }
  }, [isLoaded]);

  const startAnimate = () => {
    animatedTransition.start();
  };

  const stopAnimate = () => {
    animatedTransition.stop();
    animatedTransitionStop.start();
  };

  const sendMessage = () => {
    setMessageHistory([
      ...messageHistory,
      {
        id: props.route.params.id,
        content: message,
        sendDate: new Date(),
        messageType: 'text',
      },
    ]);
    setIsLoaded(false);
    setMessage('');
  };

  const addEmojiToText = (val) => {
    debugger;
    const newMessage = message ? message.concat(val.code) : val.code;
    setMessage(newMessage);
  };

  const scrollToEnd = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const scrollViewRef = useRef();

  return (
    <View
      style={[
        gStyles.flexCenter,
        {backgroundColor: theme.colors.backgroundChat},
      ]}>
      <ScrollView
        contentContainerStyle={chatStyles.scrollViewChatContainer}
        style={chatStyles.scrollViewChat}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollToEnd()}>
        {messageHistory.map((message, index) => {
          return (
            <View
              key={index}
              style={[
                chatStyles.messageBox,
                message.id === route.params.id
                  ? chatStyles.messageBySender
                  : chatStyles.messageByReceiver,
              ]}>
              <Text style={gStyles.defFont}>{message.content}</Text>
              <Text style={[gStyles.defFont, chatStyles.timeText]}>
                {moment(message.sendDate).format('LT')}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={[
          chatStyles.bottomAreaContainer,
          showEmoticons ? chatStyles.bottomAreaEmoji : '',
          {backgroundColor: theme.colors.chatInputContainer},
        ]}>
        <View style={gStyles.row}>
          <Press
            circle
            style={gStyles.actionIcon}
            onPress={() => (
              setShowEmoticons(showEmoticons ? false : true), Keyboard.dismiss()
            )}>
            <Icon name={'happy'} size={22} color={Colors.green} />
          </Press>
          <View>
            <AnimatedInput
              blurOnSubmit={false}
              onSubmitEditing={() => sendMessage()}
              placeholder="Type message"
              placeholderTextColor={theme.colors.text}
              onChangeText={(message) => setMessage(message)}
              onFocus={() => setShowEmoticons(false)}
              onResponderStart={() => scrollToEnd()}
              value={message}
              style={[
                chatStyles.input,
                {
                  backgroundColor: theme.colors.input,
                  color: theme.colors.text,
                  width: interpolateBar,
                },
              ]}
            />
            <Press
              circle
              style={[gStyles.actionIcon, chatStyles.attach]}
              onPress={() => navigation.navigate('ContactUserSearchScreen')}>
              <Icon name={'attach'} size={22} color={Colors.green} />
            </Press>
          </View>
          {message.length <= 0 ? (
            <View style={gStyles.row}>
              <Press
                circle
                style={gStyles.actionIcon}
                onPress={() => navigation.navigate('ContactUserSearchScreen')}>
                <Icon name={'camera'} size={22} color={Colors.green} />
              </Press>
              <Press
                circle
                style={gStyles.actionIcon}
                onPress={() => navigation.navigate('ContactUserSearchScreen')}>
                <Icon name={'mic'} size={22} color={Colors.green} />
              </Press>
            </View>
          ) : (
            <Animated.View
              style={[
                chatStyles.sendButtonContainer,
                {
                  transform: [{scale: interpolateIcon}],
                },
              ]}>
              <Press
                circle
                style={[chatStyles.sendButton]}
                onPress={() => sendMessage()}>
                <Icon name={'send'} size={22} color={Colors.light} />
              </Press>
            </Animated.View>
          )}
        </View>
      </View>
      <EmojiBoard
        emojiSize={30}
        hideBackSpace={false}
        showBoard={showEmoticons}
        onClick={(val) => addEmojiToText(val)}
      />
    </View>
  );
};
