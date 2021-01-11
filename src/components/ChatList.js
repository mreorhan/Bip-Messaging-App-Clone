import React from 'react';
import {View, Text, Image} from 'react-native';

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
    };
  }
  componentDidMount() {
    this.setState({
      chat: this.props.chats,
    });
  }
  render() {
    const mappedList =
      this.state.chat &&
      this.state.chat.map((chat) => (
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
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
            style={{paddingRight: 5, paddingTop: 10, alignSelf: 'flex-start'}}>
            <Text style={{fontSize: 11, color: 'gray'}}>
              {chat.messageDate}
            </Text>
          </View>
        </View>
      ));
    return mappedList;
  }
}
