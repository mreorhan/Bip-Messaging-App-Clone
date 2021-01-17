import React from 'react';
import {Text, View} from 'react-native';
import {Information} from '../../components/base';
import ContactList from '../../components/ContactList';
import gStyles from '../../styles/gStyles';
const contactList = [
  {
    id: 1,
    message: 'naber',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
  {
    id: 2,
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
  {
    id: 3,
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Ali Orhan',
  },
  {
    id: 4,
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Seyma Şubası',
  },
  {
    id: 5,
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Zeyno Şubası',
  },
];
export class ContactUserSearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      contact: contactList,
    };
  }

  componentDidMount() {}
  componentDidUpdate(prevProps) {
    debugger;
    const {params} = this.props.route;
    if (params && prevProps.route.params) {
      if (params.headerInputText != prevProps.route.params.headerInputText) {
        this.setState({searchTerm: params.headerInputText});
        const filteredContact = contactList.filter((item) =>
          item.name
            .toLocaleLowerCase()
            .includes(params.headerInputText.toLocaleLowerCase()),
        );
        this.setState({contact: filteredContact});
      }
    }
    debugger;
  }
  render() {
    const {props, state} = this;
    const {contact, searchTerm} = state;
    return (
      <View style={[gStyles.flexCenter]}>
        {contact.length > 0 ? (
          <ContactList list={contact} />
        ) : (
          <Information
            text={"No results found for '" + searchTerm.toString() + "'"}
          />
        )}
      </View>
    );
  }
}
