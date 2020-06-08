import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import React from 'react';
import Intro from '../components/introScreen';
import Iphone from '../components/iphoneStackNavigation';
import Android from '../components/androidStackNavigation';
import Contact from '../components/contactScreen';

const routeConfigs = {
    Intro_Screen:{
        screen:Intro,
        navigationOptions:{
            tabBarOptions: { 
                showIcon: true,
                tabStyle: {
                    marginTop: 15,
                },
                labelStyle: {
                    fontSize: 10,
                    marginTop: 22,
                },
                activeTintColor: '#000',
                inactiveTintColor: '#aeb0af',
            },
            tabBarLabel: "GIỚI THIỆU",
            tabBarIcon:(
                <Image 
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/tconcept-e8cbc.appspot.com/o/iconfinder_164_Add_Contact_User_Twitter_5148767.png?alt=media&token=65537010-8e0a-4bea-aec1-00b14232afd3'}} 
                    style={{width:40, height:40, marginTop:10}}/>),
        },
    },
    Iphone_Screen:{
        screen:Iphone,     
        navigationOptions:{
            tabBarOptions: { 
                showIcon: true,
                tabStyle: {
                    marginTop: 15,
                },
                labelStyle: {
                    fontSize: 10,
                    marginTop: 22,
                },
                activeTintColor: '#000',
                inactiveTintColor: '#aeb0af',
            },
            tabBarLabel: "IPHONE",
            tabBarIcon:(
                <Image 
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/tconcept-e8cbc.appspot.com/o/iconfinder_icon-social-apple-outline_211891.png?alt=media&token=20b14ff9-9778-4018-b786-5234a0f27b4f'}} 
                    style={{width:40, height:40, marginTop:10}}/>),
        },
    },
    Android_Screen:{
        screen:Android,      
        navigationOptions:{
            tabBarOptions: { 
                showIcon: true,
                tabStyle: {
                    marginTop: 15,
                },
                labelStyle: {
                    fontSize: 10,
                    marginTop: 22,
                },
                activeTintColor: '#000',
                inactiveTintColor: '#aeb0af',
            },
            tabBarLabel: "ANDROID",
            tabBarIcon:(
                <Image 
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/tconcept-e8cbc.appspot.com/o/iconfinder_icon-social-android-outline_211599.png?alt=media&token=24724520-0896-4185-8ab4-059c5a0f8de1'}} 
                    style={{width:40, height:40, marginTop:10}}/>),
        },
    },
    Contact_Screen:{
        screen:Contact,
        navigationOptions:{
            tabBarOptions: { 
                showIcon: true,
                tabStyle: {
                    marginTop: 15,
                },
                labelStyle: {
                    fontSize: 10,
                    marginTop: 22,
                },
                activeTintColor: '#000',
                inactiveTintColor: '#aeb0af',
            },
            tabBarLabel: "LIÊN HỆ",
            tabBarIcon:(
                <Image 
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/tconcept-e8cbc.appspot.com/o/iconfinder_contact2_2318455.png?alt=media&token=b7eac04d-9002-4afb-b5d9-626c780d4d6e'}} 
                    style={{width:40, height:40, marginTop:10}}/>),
        },
    },
};

const tabNavigatorConfig = {
    initialRouteName:"Intro_Screen",
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
};
const Screen = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const App = createAppContainer(Screen);
export default App