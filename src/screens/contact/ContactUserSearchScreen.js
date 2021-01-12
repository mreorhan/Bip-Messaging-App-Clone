import React from 'react';
import {Text, View} from 'react-native';
import ContactList from '../../components/ContactList';
import gStyles from '../../styles/gStyles';
const contactList = [
  {
    message: 'naber',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
  {
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
  {
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Ali Orhan',
  },
  {
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Seyma Şubası',
  },
  {
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
    const {contact} = state;
    return (
      <View style={gStyles.flexCenter}>
        <ContactList list={contact} />
      </View>
    );
  }
}
