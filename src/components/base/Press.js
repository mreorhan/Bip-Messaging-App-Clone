import React from 'react';
import Ripple from 'react-native-material-ripple';
import definitions from '../../styles/definitions';

export default (props) => {
  return (
    <Ripple
      rippleContainerBorderRadius={props.circle ? definitions.button.radius : 0}
      {...props}>
      {props.children}
    </Ripple>
  );
};
