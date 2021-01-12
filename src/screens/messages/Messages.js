import * as React from 'react';
import {View, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ChatList from '../../components/ChatList';

import {Colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ServicesScreen} from './Services';
import gStyles from '../../styles/gStyles';
import definitions from '../../styles/definitions';

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
const FirstRoute = () => <ChatList style={[styles.scene]} chats={chats} />;

const SecondRoute = () => <ServicesScreen />;

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
    <View style={gStyles.container}>
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          bottom: definitions.layout.gutters.sm,
          right: definitions.layout.gutters.sm,
        }}>
        <Ripple
          onPress={() => alert('ok')}
          rippleContainerBorderRadius={definitions.button.radius}
          style={[
            gStyles.floatButton,
            {
              backgroundColor: Colors.red,
              marginBottom: definitions.layout.gutters.xs,
            },
          ]}>
          <Icon name="md-rocket-outline" size={30} color={Colors.light} />
        </Ripple>
        <Ripple
          onPress={() => alert('ok')}
          rippleContainerBorderRadius={definitions.button.radius}
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
        </Ripple>
      </View>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={Colors.green}
            inactiveColor={Colors.grey}
            indicatorStyle={{
              backgroundColor: Colors.green,
              shadowOpacity: null,
            }}
            style={gStyles.tabBar}
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
