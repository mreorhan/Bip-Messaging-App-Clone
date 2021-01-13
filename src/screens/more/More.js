import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import gStyles from '../../styles/gStyles';

export class MoreScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={[gStyles.flex, gStyles.bgLightGrey]}>
        <View>
          <Text>s</Text>
        </View>
      </ScrollView>
    );
  }
}
