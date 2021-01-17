import {View, Text, Image} from 'react-native';
import React from 'react';
import definitions from '../../styles/definitions';
import gStyles from '../../styles/gStyles';
import {useTheme} from '@react-navigation/native';

export default ({user, photoSize}) => {
  const theme = useTheme();
  return (
    <View style={[gStyles.flex, gStyles.row]}>
      <View>
        <Image
          source={{
            uri: user.photo,
          }}
          style={{
            height: photoSize,
            width: photoSize,
            borderRadius: definitions.button.radius,
          }}
        />
      </View>
      <View style={gStyles.profileInfo}>
        <Text style={{color: theme.colors.text}}>{user.name}</Text>
        {user.message && (
          <Text style={{color: theme.colors.text}}>{user.message}</Text>
        )}
      </View>
      {user.messageDate && (
        <View style={gStyles.messageSentTime}>
          <Text style={[gStyles.messageTimeText, {color: theme.colors.text}]}>
            {user.messageDate}
          </Text>
        </View>
      )}
    </View>
  );
};
