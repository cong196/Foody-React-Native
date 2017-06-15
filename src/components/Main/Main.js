import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';


export default class Main extends Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Main components</Text>
                <TouchableOpacity
                    onPress={() => {navigate('Mh_DoiTinh')} }
                >
                    <Text>go Doi Tinh Thanh </Text>
                </TouchableOpacity>
            </View>
        );
    }
}