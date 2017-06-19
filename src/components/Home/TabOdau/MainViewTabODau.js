import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

export default class MainViewTabODau extends Component {
    doitinh() {
        const { doitinh } = this.props;
        doitinh();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text> Main View Tab Ở đâu</Text>
                <TouchableOpacity
                    onPress = {()=>{this.doitinh()}}
                >
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>

            </View>
        );
    }
}