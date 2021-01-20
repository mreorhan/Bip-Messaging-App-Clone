import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {BorderlessButton, ScrollView} from 'react-native-gesture-handler';
import {List, User, Box} from '../../components/base';
import {Colors} from '../../styles/colors';
import definitions from '../../styles/definitions';
import gStyles from '../../styles/gStyles';
import moreStyles from '../../styles/moreStyles';

export default () => {
  const theme = useTheme();
  const navigation = useNavigation();
  settings = [
    {
      title: 'Chat Settings',
      icon: 'chatbubble-ellipses-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'Notifications',
      icon: 'notifications-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'Blocked Contacts',
      icon: 'md-close-circle-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'My Account',
      icon: 'md-person-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'Privacy',
      icon: 'md-shield-checkmark-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'Appearance',
      icon: 'md-pencil-outline',
      onPress: () => navigation.navigate('Appearance'),
    },
    {
      title: 'Emergency Settings',
      icon: 'ios-alert-circle-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'Payment Settings',
      icon: 'md-card-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'SMS',
      icon: 'ios-chatbubble-ellipses-outline',
      onPress: () => navigation.navigate('Other'),
    },
    {
      title: 'Help',
      icon: 'help-circle-outline',
      onPress: () => navigation.navigate('Other'),
    },
  ];

  return (
    <ScrollView
      style={[gStyles.flex, {backgroundColor: theme.colors.backgroundLight}]}>
      <View
        style={[
          gStyles.bgWhite,
          {
            marginTop: definitions.layout.gutters.xs,
          },
        ]}>
        <List list={settings} />
      </View>
    </ScrollView>
  );
};
