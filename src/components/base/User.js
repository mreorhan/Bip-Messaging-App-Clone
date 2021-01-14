import {View, Text, Image} from 'react-native';
import React from 'react';
import definitions from '../../styles/definitions';
import gStyles from '../../styles/gStyles';

export default ({user, photoSize}) => {
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
        <Text>{user.name}</Text>
        {user.message && <Text>{user.message}</Text>}
      </View>
      {user.messageDate && (
        <View style={gStyles.messageSentTime}>
          <Text style={gStyles.messageTimeText}>{user.messageDate}</Text>
        </View>
      )}
    </View>
  );
};
