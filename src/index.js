import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign';

import HomeScreen from "../src/screens/HomeScreen";
import PostScreen from "../src/screens/PostScreen";
import ProfileScreen from "../src/screens/ProfileScreen";

const HomeStack = createStackNavigator();
const PostStack = createStackNavigator();
const ProfileStack = createStackNavigator();
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
function PostStackScreen() {
    return (
        <PostStack.Navigator>
            <PostStack.Screen name='Post' component={PostScreen}/>
        </PostStack.Navigator>
    )
}
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='Profile' component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    )
}
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{ 
                    activeTintColor: '#0F62AC',
                    showLabel: false,
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
                <Tab.Screen name='Post' component={PostStackScreen}
                    options={{ 
                        tabBarLabel: 'Post',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="rocket1" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen name='Profile' component={ProfileStackScreen}
                    options={{ 
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;