import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
// import IconBadge from 'react-native-icon-badge';
import styled from 'styled-components';
import { colorsthemeone, colors } from './utils/constants';
import EnterScreen from './screens/commmonscreens/EnterScreen';
import HomeScreen from './screens/commmonscreens/HomeScreen';
import FavoritesScreen from './screens/userscreens/FavoritesScreen';
import CartScreen from './screens/userscreens/CartScreen';
import CenterNotificationsScreen from './screens/userscreens/CenterNotificationsScreen';
import SettingsScreen from './screens/userscreens/SettingsScreen';

const tabIcon = 30;
const colorIconCenter = `${colors.WHITE}`;

const IconCentralContainer = styled.View`
    backgroundColor: ${colorIconCenter};
    borderRadius: 50;
`;

const TabNavigator = createBottomTabNavigator({
    Favorites: {
        screen: FavoritesScreen, 
        navigationOptions:() =>({
            title: `Favorites`,
            // header: null,
            // headerTitle: 'Favorites',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <EvilIcons name={focused ? 'heart' : 'heart'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Cart: {
        screen: CartScreen, 
        navigationOptions:() =>({
            title: 'Cart',
            // header: null,
            // headerTitle: 'Cart',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <EvilIcons name={focused ? 'cart' : 'cart'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Home: {
        screen: HomeScreen, 
        navigationOptions:() =>({
            title: '',
            header: null,
            headerTitle: null,
            tabBarLabel: null,
            tabBarIcon: ({ tintColor, focused }) => (
                <IconCentralContainer>
                    <MaterialCommunityIcons name={focused ? 'home-circle' : 'home-circle'} size={Platform.OS === 'ios' ? 60 : 60} style={{color: colors.BLACK, paddingBottom: 55}}/>
                </IconCentralContainer>
            )
        })
    },
    Notifications: {
        screen: EnterScreen, 
        navigationOptions:() =>({
            title: `Notifications`,
            // header: null,
            // headerTitle: 'Ayuda',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <EvilIcons name={focused ? 'bell' : 'bell'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Settings: {
        screen: SettingsScreen, 
        navigationOptions:() =>({
            title: `Settings`,
            // header: null,
            // headerTitle: 'Ayuda',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <EvilIcons name={focused ? 'gear' : 'gear'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    // animationEnabled: true,
    initialRouteName: 'Home',
    // backBehavior: 'none',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colorsthemeone.PRIMARY,
        inactiveTintColor: 'rgba(142, 142, 147, 1)',
        pressColor: colors.GRAYFBINPUTTEXT,
        indicatorStyle: { backgroundColor: colorsthemeone.PRIMARY },
        style:{
            backgroundColor: colorIconCenter,
            height: 55,
            paddingVertical: 5,
            borderTopWidth: 0.1,
            borderTopColor: colors.WHITE,
        }
    }
});

// export default class Navigation extends Component {
//   render() {
//     return (
//         <TabNavigator/>
//     )
//   }
// }

export default createAppContainer(TabNavigator)