import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MessagesScreen from './src/screens/messages/Messages';
import {ServicesScreen} from './src/screens/messages/Services';
import {colors} from './src/assets/definitions';
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Root() {
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
        activeTintColor: colors.green,
        inactiveTintColor: colors.grey,
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
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.green,
          },
          animationEnabled: true,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Root}
          options={{
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
              <View style={{marginRight: 10}}>
                <Icon name={'search'} size={24} color={colors.light} />
              </View>
            ),
            headerTitleStyle: {
              fontWeight: 'normal',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Calls" component={HomeScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen
          name="More"
          options={{title: 'More'}}
          component={ServicesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
