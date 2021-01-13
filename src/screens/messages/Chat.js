import React from 'react';
import {Text, View, Animated} from 'react-native';
import gStyles from '../../styles/gStyles';
import chatStyles from '../../styles/chatStyles';
import {TextInput} from 'react-native-gesture-handler';
import {Press} from '../../components/base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/colors';
import definitions from '../../styles/definitions';
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
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
    // this.props.navigation.setOptions({title: params.name});
    // this.props.navigation.setParams({user: params});
  }

  componentDidUpdate(prevProps, prevState) {
    const {message} = this.state;
    if (
      prevState.message !== message &&
      message.length > 0 &&
      !(prevState.message.length < message.length - 1)
    ) {
      this.animatedTransition.start();
    } else {
      this.animatedTransition.stop();
      this.animatedTransitionStop.start();
    }
  }

  sendMessage = () => {
    this.setState({message: ''});
  };

  render() {
    const {navigation} = this.props;
    const {message} = this.state;
    return (
      <View style={[gStyles.flexCenter, gStyles.bgLightGrey]}>
        <Text>{JSON.stringify(this.props.route.params)}</Text>
        <View style={chatStyles.bottomAreaContainer}>
          <View style={gStyles.row}>
            <Press
              circle
              style={gStyles.actionIcon}
              onPress={() => navigation.navigate('ContactUserSearchScreen')}>
              <Icon name={'happy'} size={22} color={Colors.green} />
            </Press>
            <View>
              <AnimatedInput
                blurOnSubmit={false}
                onSubmitEditing={() => this.sendMessage()}
                placeholder="Type message"
                onChangeText={(message) => this.setState({message})}
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
      </View>
    );
  }
}
