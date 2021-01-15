import * as React from 'react';
import {View, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import {TabView, SceneMap, TabBar, TabBarItem} from 'react-native-tab-view';
import ChatList from '../../components/ChatList';

import {Colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ServicesScreen} from './Services';
import gStyles from '../../styles/gStyles';
import definitions from '../../styles/definitions';
import {Press} from '../../components/base';

const chats = [
  {
    id: 1,
    message: 'naber',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
  {
    id: 2,
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Ali Parlak',
  },
];
const FirstRoute = () => <ChatList style={[styles.scene]} chats={chats} />;

const SecondRoute = () => <ServicesScreen />;

const MessagesScreen = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Chats'},
    {key: 'second', title: 'Services'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <View style={[gStyles.container, gStyles.bgWhite]}>
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          bottom: definitions.layout.gutters.sm,
          right: definitions.layout.gutters.sm,
        }}>
        <Press
          circle
          style={[
            gStyles.floatButton,
            {
              backgroundColor: Colors.red,
              marginBottom: definitions.layout.gutters.xs,
            },
          ]}>
          <Icon name="md-rocket-outline" size={30} color={Colors.light} />
        </Press>
        {index == 0 ? (
          <Press
            circle
            style={[
              gStyles.floatButton,
              {
                backgroundColor: Colors.green,
                borderRadius: 100,
              },
            ]}>
            <Icon
              name="chatbox-ellipses-outline"
              size={30}
              color={Colors.light}
            />
          </Press>
        ) : (
          <Press
            circle
            style={[
              gStyles.floatButton,
              {
                backgroundColor: Colors.green,
                borderRadius: 100,
              },
            ]}>
            <Icon
              name="navigate-circle-outline"
              size={30}
              color={Colors.light}
            />
          </Press>
        )}
      </View>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={Colors.green}
            inactiveColor={Colors.green}
            indicatorStyle={{
              backgroundColor: Colors.green,
              shadowOpacity: null,
            }}
            style={gStyles.tabBar}
            labelStyle={{
              fontSize: 13,
              fontWeight: 'bold',
              letterSpacing: 1,
              paddingTop: 2,
            }}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={definitions.layout.screenWidth}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
