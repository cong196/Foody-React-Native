import React, { Component } from 'react';
import {
    View, Text,Button
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import Main from './Main/Main';
import DoiTinhThanh from './Main/DoiTinhThanh';

export const MainStack = StackNavigator({
    Mh_Chinh: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    Mh_DoiTinh: {
        screen: DoiTinhThanh,
        navigationOptions: {
            title: 'Đổi tỉnh/thành phố',
            headerRight:<Button title="Xong" />,
        }
    }
});