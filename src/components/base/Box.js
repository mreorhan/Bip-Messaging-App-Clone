import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default (props) => {
  const theme = useTheme();
  return (
    <View
      {...props}
      style={{...props.style, backgroundColor: theme.colors.background}}>
      {props.children}
    </View>
  );
};
