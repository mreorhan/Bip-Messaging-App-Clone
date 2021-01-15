import React from 'react';
import {Text, View} from 'react-native';
import {BorderlessButton, ScrollView} from 'react-native-gesture-handler';
import {List, User} from '../../components/base';
import {Colors} from '../../styles/colors';
import definitions from '../../styles/definitions';
import gStyles from '../../styles/gStyles';
import moreStyles from '../../styles/moreStyles';

const user = {
  id: 1,
  photo:
    'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
  name: 'Emre Orhan',
};

export default class extends React.Component {
  // settings;

  constructor(props) {
    super(props);

    this.state = {
      otherSettings: [
        {
          title: 'BiB Web',
          icon: 'md-desktop-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Invite Friends',
          icon: 'person-add-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Settings',
          icon: 'md-settings-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
      ],
      settings: [
        {
          title: 'Discover',
          icon: 'navigate-circle-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Games',
          icon: 'md-game-controller-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Contact List',
          icon: 'md-person-circle-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Dial Pad',
          icon: 'ios-keypad-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Camera',
          icon: 'camera-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Starred Messages',
          icon: 'star-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
        {
          title: 'Emergency',
          icon: 'ios-alert-circle-outline',
          onPress: () => props.navigation.navigate('Other'),
        },
      ],
    };
  }

  render() {
    const {settings, otherSettings} = this.state;
    return (
      <ScrollView style={[gStyles.flex, gStyles.bgLightGrey]}>
        <View style={moreStyles.profileBox}>
          <User user={user} photoSize={70} />
        </View>
        <View style={gStyles.bgWhite}>
          <View style={[gStyles.alignRight, {padding: 10}]}>
            <BorderlessButton
              borderless={false}
              onPress={() => alert('ok')}
              style={gStyles.overlayButton}>
              <Text
                style={{
                  color: Colors.green,
                  fontSize: 13.5,
                  fontFamily: 'moreo_regular',
                  fontWeight: 'normal',
                  letterSpacing: 0.2,
                }}>
                Customize
              </Text>
            </BorderlessButton>
          </View>
          <List list={settings} />
        </View>
        <View
          style={[
            gStyles.bgWhite,
            {
              marginTop: definitions.layout.gutters.xs,
            },
          ]}>
          <List list={otherSettings} />
        </View>
      </ScrollView>
    );
  }
}
