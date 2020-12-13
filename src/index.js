// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../src/screens/HomeScreen";

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} 
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    )
}
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{ 
                    activeTintColor: '#0F62AC'
                }}
            >
                <Tab.Screen name='Home' component={HomeStackScreen}
                    options={{ 
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;