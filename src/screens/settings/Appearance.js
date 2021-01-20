import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {BorderlessButton, ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../../../App';
import {List, User, Box, Press} from '../../components/base';
import {Colors} from '../../styles/colors';
import definitions from '../../styles/definitions';
import gStyles from '../../styles/gStyles';
import moreStyles from '../../styles/moreStyles';

export default () => {
  const theme = useTheme();
  return (
    <ThemeContext.Consumer>
      {({setNativeTheme, setDarkTheme, setLavenderTheme}) => (
        <ScrollView
          style={[
            gStyles.flex,
            {backgroundColor: theme.colors.backgroundLight},
          ]}>
          <Text>App Theme</Text>
          <View
            style={[
              gStyles.bgWhite,
              {
                marginTop: definitions.layout.gutters.xs,
              },
            ]}>
            <Press onPress={setNativeTheme}>
              <Text>light</Text>
            </Press>
            <Press onPress={setDarkTheme}>
              <Text>dark</Text>
            </Press>
            <Press onPress={setLavenderTheme}>
              <Text>lavender</Text>
            </Press>
          </View>
        </ScrollView>
      )}
    </ThemeContext.Consumer>
  );
};
