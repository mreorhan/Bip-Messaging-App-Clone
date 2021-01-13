import React from 'react';
import gStyles from '../../styles/gStyles';
import {Text, View} from 'react-native';

export default ({text}) => {
  return (
    <View style={gStyles.flexCenter}>
      <Text style={gStyles.informationText}>{text}</Text>
    </View>
  );
};
