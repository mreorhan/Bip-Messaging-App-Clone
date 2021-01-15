import React from 'react';
import gStyles from '../../styles/gStyles';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import definitions from '../../styles/definitions';

const style = StyleSheet.create({
  informationText: {
    backgroundColor: Colors.lightGrey,
    color: Colors.grey,
    borderRadius: definitions.button.radius,
    paddingHorizontal: definitions.layout.gutters.sm,
    paddingVertical: definitions.layout.gutters.xs,
    fontFamily: 'moreo',
    letterSpacing: 0.3,
  },
});

export default ({text}) => {
  return (
    <View style={gStyles.flexCenter}>
      <Text style={style.informationText}>{text}</Text>
    </View>
  );
};
