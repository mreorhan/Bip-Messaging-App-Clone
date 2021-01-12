import * as React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Messages') {
            iconName = 'chatbox-ellipses-outline';
          } else if (route.name === 'Calls') {
            iconName = 'call-outline';
          } else if (route.name === 'More') {
            iconName = 'menu-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.green,
        inactiveTintColor: Colors.grey,
        labelStyle: {paddingTop: 4, fontWeight: 'bold'},
        keyboardHidesTabBar: true,
        style: {height: 60},
        tabStyle: {paddingTop: 8, paddingBottom: 6},
      }}>
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Calls" component={HomeScreen} />
      <Tab.Screen name="More" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.green,
          },
          animationEnabled: true,
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Root}
          options={({route, navigation}) => ({
            title: 'Messages',
            headerLeft: () => (
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
            ),
            headerRight: () => (
              <Ripple
                rippleContainerBorderRadius={definitions.button.radius}
                style={{padding: 10}}
                onPress={() => navigation.navigate('ContactUserSearchScreen')}>
                <Icon name={'search'} size={24} color={Colors.light} />
              </Ripple>
            ),
          })}
        />
        <Stack.Screen name="Calls" component={HomeScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen
          name="ContactUserSearchScreen"
          options={{
            title: 'Search',
            header: (props) => (
              <View style={gStyles.row}>
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
        <Stack.Screen
          name="More"
          options={{title: 'More'}}
          component={ServicesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
