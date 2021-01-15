import * as React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {Colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import gStyles from '../../styles/gStyles';
import definitions from '../../styles/definitions';
import {Press} from '../../components/base';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  userText: {
    textAlign: 'center',
    fontSize: 32,
    color: Colors.light,
    fontFamily: 'moneo',
  },
  timer: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.light,
    fontFamily: 'moneo',
  },
  topContainer: {
    marginTop: 30,
  },
  actionButtons: {
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  actionButtonRed: {
    backgroundColor: Colors.red,
  },
  actionButtonSilver: {
    backgroundColor: '#53575a',
  },
  actionButtonClose: {
    marginBottom: 10,
    backgroundColor: Colors.red,
    height: 80,
    width: 80,
  },
});

const CallUserScreen = (props) => {
  const [second, setSecond] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (second > 60) {
        setSecond(0);
        setMinute(minute + 1);
      } else {
        setSecond(second + 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <ImageBackground
      resizeMode="stretch"
      source={{uri: 'https://i.ibb.co/rH7TTdj/Artboard-1.png'}}
      style={[gStyles.container, styles.background]}>
      <View style={[gStyles.alignHorizontalCenter, styles.topContainer]}>
        <Text style={styles.userText}>Emre</Text>
        <Text style={styles.timer}>
          {minute}:{second <= 9 ? `0${second}` : second}
        </Text>
      </View>
      <View
        style={[
          {
            zIndex: 1,
            position: 'absolute',
            bottom: definitions.layout.gutters.md,
            width: '100%',
          },
        ]}>
        <View style={[gStyles.alignHorizontalCenter]}>
          <Press
            onPress={() => navigation.goBack()}
            circle
            style={[gStyles.floatButton, styles.actionButtonClose]}>
            <Icon name="call" size={30} color={Colors.light} />
          </Press>
        </View>
        <View
          style={[
            gStyles.alignHorizontalCenter,
            gStyles.row,
            styles.actionButtons,
          ]}>
          <Press
            circle
            style={[gStyles.floatButton, styles.actionButtonSilver]}>
            <Icon name="volume-high" size={30} color={Colors.light} />
          </Press>
          <Press circle style={[gStyles.floatButton, styles.actionButtonRed]}>
            <Icon name="videocam" size={30} color={Colors.light} />
          </Press>
          <Press
            circle
            style={[gStyles.floatButton, styles.actionButtonSilver]}>
            <Icon name="mic-off" size={30} color={Colors.light} />
          </Press>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CallUserScreen;
