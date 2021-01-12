import React from 'react';
import {Text, View} from 'react-native';
import gStyles from '../../styles/gStyles';

export class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setOptions({title: this.props.route.params.name});
  }

  render() {
    return (
      <View style={gStyles.flexCenter}>
        <Text>{JSON.stringify(this.props.route.params)}</Text>
      </View>
    );
  }
}
