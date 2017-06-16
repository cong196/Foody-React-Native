import React, { Component } from 'react';
import {
    View, Text, Button, Image, StyleSheet,TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MainHome from './Home/MainHome';
import DoiTinhThanh from './Home/DoiTinhThanh';
import BoSuuTap from './BoSuuTap/BoSuuTap';
import TaiKhoan from './TaiKhoan/TaiKhoan';
import TimKiem from './TimKiem/TimKiem';


export const HomeStack = StackNavigator({
    Mh_Chinh: {
        screen: MainHome,
        navigationOptions: {
            header: null,
            title: 'Home'
        }
    }
});

export const BSTStack = StackNavigator({
    MainBST: {
        screen: BoSuuTap,
        navigationOptions: {
            header: null
        }
    }
});

export const TimKiemStack = StackNavigator({
    Main_TimKiem: {
        screen: TimKiem,
        navigationOptions: {
            header: null,
        }
    }
});

export const TaiKhoanStack = StackNavigator({
    Main_TaiKhoan: {
        screen: TaiKhoan,
        navigationOptions: {
            title: 'Tài khoản',
            header: null
        }
    }
})

export const Tabbar = TabNavigator(
    {
        TabHome: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../img/home.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },
        TabBST: {
            screen: BSTStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../img/collection.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },
        TabTimKiem: {
            screen: TimKiemStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../img/search.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },
        TabTaiKhoan: {
            screen: TaiKhoanStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../img/profile.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: 'rgba(0,0,0,0)',
            },
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: 'white'
            }
        }
    }
);

export const MainStack = StackNavigator({
    Main: {
        screen: Tabbar
    },
    DoiTinh: {
        screen: DoiTinhThanh,
        navigationOptions: {
            title: 'Đổi tỉnh/thành phố',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'red',
                height: 40
            },
            headerTitleStyle: {
                fontSize: 14
            },
            headerRight: (
                <TouchableOpacity style={{ paddingRight: 10 }}>
                    <Text style={{ fontSize: 13, color: 'white' }}>Xong</Text>
                </TouchableOpacity>
            )
        }
    }
})


const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
