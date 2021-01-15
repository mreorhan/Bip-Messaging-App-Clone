import * as React from 'react';
import {View, Text, Image, TextInput, useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MessagesScreen from './src/screens/messages/Messages';
import {ServicesScreen} from './src/screens/messages/Services';
import {Colors} from './src/styles/colors';
import Ripple from 'react-native-material-ripple';
import {ContactUserSearchScreen} from './src/screens/contact/ContactUserSearchScreen';
import definitions from './src/styles/definitions';
import gStyles from './src/styles/gStyles';
import {ChatScreen} from './src/screens/messages/Chat';
import {Press} from './src/components/base';
import MoreScreen from './src/screens/more/More';
import CallScreen from './src/screens/calls/RecentCalls';
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const BibLogo = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri: 'https://i.ibb.co/zPTK7nT/white-logo.png',
        }}
        style={{
          width: 48,
          height: 36,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.green,
  },
  headerTitleStyle: {
    fontWeight: 'normal',
    fontFamily: 'museo',
    fontSize: 19,
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
};

const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator mode="card" screenOptions={screenOptions}>
      <AppStack.Screen
        name="Home"
        component={MessagesScreen}
        options={({route, navigation}) => ({
          title: 'Messages',
          headerLeft: () => <BibLogo />,
          headerRight: () => (
            <Press
              circle
              style={{padding: 10}}
              onPress={() => navigation.navigate('ContactUserSearchScreen')}>
              <Icon name={'search'} size={24} color={Colors.light} />
            </Press>
          ),
        })}
      />
      <AppStack.Screen name="Calls" component={HomeScreen} />
      <AppStack.Screen name="Services" component={ServicesScreen} />
      <AppStack.Screen
        name="ContactUserSearchScreen"
        options={{
          title: 'Search',
          header: (props) => (
            <View
              style={[
                gStyles.row,
                {
                  backgroundColor: Colors.light,
                  borderBottomColor: Colors.lightGrey,
                  borderBottomWidth: 1,
                },
              ]}>
              <HeaderBackButton
                {...props}
                onPress={() => props.navigation.goBack()}
              />
              <TextInput
                placeholder="Search..."
                autoFocus
                onChangeText={(value) =>
                  props.navigation.setParams({headerInputText: value})
                }
                value={props.navigation.headerInputText}
              />
            </View>
          ),
        }}
        component={ContactUserSearchScreen}
      />
    </AppStack.Navigator>
  );
};

const ChatStack = createStackNavigator();
const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator mode="card" screenOptions={screenOptions}>
      <ChatStack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route, navigation}) => ({
          title: '',
          headerLeft: (props) => (
            <View style={gStyles.row}>
              <HeaderBackButton
                {...props}
                onPress={() => navigation.goBack()}
              />
              <View style={[gStyles.row, gStyles.alignHorizontalCenter]}>
                <Image
                  source={{
                    uri: route?.params?.photo,
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 99,
                  }}
                />
                <View
                  style={[
                    gStyles.column,
                    {marginLeft: definitions.layout.gutters.xs},
                  ]}>
                  <Text style={gStyles.userNameTextHeader}>
                    {route?.params?.name}
                  </Text>
                  <Text style={gStyles.userLastSeenTextHeader}>
                    {route?.params?.messageDate}
                  </Text>
                </View>
              </View>
            </View>
          ),
          headerRight: (props) => (
            <View style={gStyles.row}>
              <Press
                circle
                style={gStyles.actionIcon}
                onPress={() => navigation.navigate('ContactUserSearchScreen')}>
                <Icon name={'videocam'} size={22} color={Colors.light} />
              </Press>
              <Press
                circle
                style={gStyles.actionIcon}
                onPress={() => navigation.navigate('ContactUserSearchScreen')}>
                <Icon name={'call'} size={22} color={Colors.light} />
              </Press>
              <Press
                circle
                style={gStyles.actionIcon}
                onPress={() => navigation.navigate('ContactUserSearchScreen')}>
                <Icon name={'menu'} size={22} color={Colors.light} />
              </Press>
            </View>
          ),
        })}
      />
    </ChatStack.Navigator>
  );
};

const CallStack = createStackNavigator();
const CallStackScreen = () => {
  return (
    <CallStack.Navigator mode="card" screenOptions={screenOptions}>
      <CallStack.Screen
        component={CallScreen}
        name="Calls"
        options={({route, navigation}) => ({
          title: 'Calls',
          headerLeft: () => <BibLogo />,
          headerRight: () => (
            <Press
              circle
              style={{padding: 10}}
              onPress={() => navigation.navigate('ContactUserSearchScreen')}>
              <Icon name={'search'} size={24} color={Colors.light} />
            </Press>
          ),
        })}
      />
    </CallStack.Navigator>
  );
};

const MoreStack = createStackNavigator();
const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator mode="card" screenOptions={screenOptions}>
      <MoreStack.Screen
        component={MoreScreen}
        name="More"
        options={{
          headerLeft: () => <BibLogo />,
          title: 'More',
        }}
      />
    </MoreStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Root = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize = 24;

          if (route.name === 'Messages') {
            iconName = 'chatbox-ellipses-outline';
          } else if (route.name === 'Calls') {
            iconName = 'call-outline';
          } else if (route.name === 'More') {
            iconSize = 36;
            iconName = 'menu-outline';
          }
          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.green,
        inactiveTintColor: Colors.grey,
        labelStyle: {
          paddingTop: 4,
          fontFamily: 'moreo_bold',
          fontWeight: 'normal',
        },
        keyboardHidesTabBar: true,
        style: {height: 60},
        tabStyle: {paddingTop: 8, paddingBottom: 6},
      }}>
      <Tab.Screen name="Messages" component={AppStackScreen} />
      <Tab.Screen name="Calls" component={CallStackScreen} />
      <Tab.Screen name="More" component={MoreStackScreen} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();
const main = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Messages" component={Root} />
        <RootStack.Screen name="ChatStack" component={ChatStackScreen} />
        <RootStack.Screen name="More" component={MoreStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default main;
