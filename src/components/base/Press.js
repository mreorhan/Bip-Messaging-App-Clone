import React from 'react';
import {Colors} from '../../styles/colors';
import {View, TouchableNativeFeedback} from 'react-native';
import {useEffect} from 'react';

export default (props) => {
  let ripple = {
    color: Colors.green,
    val: false,
    radius: 0,
  };
  useEffect(() => {});
  if (props.circle) {
    ripple = {
      color: null,
      val: false,
      radius: 28,
    };
  }
  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      useForeground={false}
      background={TouchableNativeFeedback.Ripple(
        ripple.color,
        ripple.val,
        props.circle && ripple.radius,
      )}
      hitSlop={{top: 5, right: 5, bottom: 5, left: 5}}>
      <View {...props}>{props.children}</View>
    </TouchableNativeFeedback>
  );
};
