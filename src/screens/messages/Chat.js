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
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const messageHistory = [
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
];

export class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showEmoticons: false,
      messageHistory: messageHistory,
    };
  }
  //animation start
  animVal = new Animated.Value(0);

  interpolateIcon = this.animVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  interpolateBar = this.animVal.interpolate({
    inputRange: [0, 1],
    outputRange: [
      parseInt(definitions.layout.screenWidth - 130),
      parseInt(definitions.layout.screenWidth - 110),
    ],
  });
  animatedTransition = Animated.spring(this.animVal, {
    toValue: 1,
    useNativeDriver: false,
  });
  animatedTransitionStop = Animated.spring(this.animVal, {
    toValue: 0,
    useNativeDriver: false,
  });
  //animation end

  componentDidMount() {
    const {params} = this.props.route;
    // LogBox.ignoreAllLogs(true);

    // this.props.navigation.setOptions({title: params.name});
    // this.props.navigation.setParams({user: params});
  }

  componentDidUpdate(prevProps, prevState) {
    const {message} = this.state;
    let difference = isEmoji(message) ? 2 : 1;
    if (
      prevState.message !== message &&
      message.length > 0 &&
      !(prevState.message.length < message.length - difference)
    ) {
      this.animatedTransition.start();
    } else {
      this.animatedTransition.stop();
      this.animatedTransitionStop.start();
    }
  }

  sendMessage = () => {
    const {messageHistory, message} = this.state;
    messageHistory.push({
      id: this.props.route.params.id,
      content: message,
      sendDate: new Date(),
      messageType: 'text',
    });
    this.setState({messageHistory, message: ''});
  };

  addEmojiToText = (val) => {
    debugger;
    const {message} = this.state;
    debugger;
    const newMessage = message ? message.concat(val.code) : val.code;
    this.setState({message: newMessage});
  };

  render() {
    const {navigation, route} = this.props;
    const {message, showEmoticons, messageHistory} = this.state;
    return (
      <View style={[gStyles.flexCenter, gStyles.bgLightBlue]}>
        <ScrollView style={chatStyles.scrollViewChat}>
          {messageHistory.map((message, index) => {
            if (message.id === route.params.id) {
              return (
                <View
                  key={index}
                  style={[chatStyles.messageBox, chatStyles.messageBySender]}>
                  <Text>{message.content}</Text>
                </View>
              );
            } else {
              return (
                <View
                  key={index}
                  style={[chatStyles.messageBox, chatStyles.messageByReceiver]}>
                  <Text>{message.content}</Text>
                </View>
              );
            }
          })}
        </ScrollView>
        <View
          style={[
            chatStyles.bottomAreaContainer,
            showEmoticons ? chatStyles.bottomAreaEmoji : '',
          ]}>
          <View style={gStyles.row}>
            <Press
              circle
              style={gStyles.actionIcon}
              onPress={() => (
                this.setState({showEmoticons: showEmoticons ? false : true}),
                Keyboard.dismiss()
              )}>
              <Icon name={'happy'} size={22} color={Colors.green} />
            </Press>
            <View>
              <AnimatedInput
                blurOnSubmit={false}
                onSubmitEditing={() => this.sendMessage()}
                placeholder="Type message"
                onChangeText={(message) => this.setState({message})}
                onFocus={() => this.setState({showEmoticons: false})}
                value={message}
                style={[chatStyles.input, {width: this.interpolateBar}]}
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
                  onPress={() =>
                    navigation.navigate('ContactUserSearchScreen')
                  }>
                  <Icon name={'camera'} size={22} color={Colors.green} />
                </Press>
                <Press
                  circle
                  style={gStyles.actionIcon}
                  onPress={() =>
                    navigation.navigate('ContactUserSearchScreen')
                  }>
                  <Icon name={'mic'} size={22} color={Colors.green} />
                </Press>
              </View>
            ) : (
              <Animated.View
                style={[
                  chatStyles.sendButtonContainer,
                  {
                    transform: [{scale: this.interpolateIcon}],
                  },
                ]}>
                <Press
                  circle
                  style={[chatStyles.sendButton]}
                  onPress={() => this.sendMessage()}>
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
          onClick={(val) => this.addEmojiToText(val)}
        />
      </View>
    );
  }
}
