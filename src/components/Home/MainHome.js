import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,StyleSheet
} from 'react-native';
import HeaderHome from './HeaderHome'

export default class MainHome extends Component {
    render() {

        const { navigate } = this.props.navigation;
         
        return (
            <View>
                <HeaderHome />
                <TouchableOpacity
                    onPress={() => {navigate('DoiTinh')} }
                >
                    <Text>go Doi Tinh Thanh </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
