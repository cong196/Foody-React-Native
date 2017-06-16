import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';


export default class HeaderHome extends Component {
    render() {
        const { header } = style;
        return (
            <View style = {header}>
                
            </View>
        );
    }
}

var style = StyleSheet.create({
    header: {
        height: 40,
        backgroundColor: 'red'
    }
})