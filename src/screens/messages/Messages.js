import * as React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ChatList from '../../components/ChatList';

import {colors} from '../../assets/definitions';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';

const chats = [
  {
    message: 'naber',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
  {
    message: 'naber2',
    messageDate: '12:45',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg',
    name: 'Emre Orhan',
  },
];
const FirstRoute = () => (
  <View style={{margin: 15}}>
    <ChatList style={[styles.scene]} chats={chats} />
  </View>
);

const SecondRoute = () => <View style={[styles.scene]} />;

const initialLayout = {
  width: Dimensions.get('window').width,
};

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
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.red,
            borderRadius: 100,
            shadowColor: '#3d3d3d4a',
            shadowOffset: 0,
            shadowOpacity: 1,
            elevation: 8,
            height: 55,
            width: 55,
            marginBottom: 10,
          }}>
          <Icon name="md-rocket-outline" size={30} color={colors.light} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.green,
            borderRadius: 100,
            shadowColor: '#3d3d3d4a',
            shadowOffset: 0,
            shadowOpacity: 1,
            elevation: 8,
            height: 55,
            width: 55,
          }}>
          <Icon
            name="chatbox-ellipses-outline"
            size={30}
            color={colors.light}
          />
        </TouchableOpacity>
      </View>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={colors.green}
            inactiveColor={colors.grey}
            indicatorStyle={{
              backgroundColor: colors.green,
              shadowOpacity: null,
            }}
            style={{
              backgroundColor: 'transparent',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              borderBottomColor: colors.grey,
              borderBottomWidth: 0.5,
            }}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
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
