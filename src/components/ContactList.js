import React from 'react';
import {View, Text, Image} from 'react-native';
import gStyles from '../styles/gStyles';
import ChatList from './ChatList';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.groupAndUpdateContact();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list.length != this.props.list.length) {
      this.groupAndUpdateContact();
    }
  }

  groupAndUpdateContact() {
    const list = this.groupContact(this.props.list);
    this.setState({
      list,
    });
  }

  groupContact(contact) {
    return contact
      .sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      })
      .reduce((curr, acc) => {
        curr[acc.name.substr(0, 1)] = [
          ...(curr[acc.name.substr(0, 1)] || []),
          acc,
        ];
        return curr;
      }, {});
  }

  render() {
    const {list} = this.state;
    const mappedList =
      list &&
      Object.keys(list).map((item, key) => {
        return (
          <View style={[gStyles.flex, gStyles.column]} key={key}>
            <Text style={gStyles.contactIndex}>{item}</Text>
            <View>
              <ChatList chats={list[item]} />
            </View>
          </View>
        );
      });
    return (
      <View style={[gStyles.container, gStyles.fixTop]}>{mappedList}</View>
    );
  }
}
