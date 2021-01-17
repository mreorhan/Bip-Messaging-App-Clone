import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/colors';
import gStyles from '../../styles/gStyles';

const styles = StyleSheet.create({
  mainText: {
    fontSize: 23,
    color: Colors.green,
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'moreo',
    textAlign: 'center',
  },
  subText: {
    fontSize: 22,
    letterSpacing: 0.3,
    fontFamily: 'moreo',
    textAlign: 'center',
    lineHeight: 32,
  },
  navigateIcon: {
    paddingHorizontal: 10,
  },
});
export const ServicesScreen = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        gStyles.flexCenter,
        {
          width: '80%',
          marginTop: -50,
          alignSelf: 'center',
        },
      ]}>
      <Text style={styles.mainText}>Let's Get BiB'N!</Text>
      <View style={gStyles.row}>
        <Text style={[styles.subText, {color: theme.colors.text}]}>
          {'To discover new\n services, tap'}
          <View style={styles.navigateIcon}>
            <Icon
              name={'md-navigate-circle-outline'}
              size={28}
              color={Colors.green}
            />
          </View>
          icon and select a service.
        </Text>
      </View>
    </View>
  );
};
