import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

export default class MainViewTabAnGi extends Component {

    doitinh() {
        const { doitinh } = this.props;
        doitinh();
    }


    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>
                <Text> Main View Tab Ăn Gì</Text>
                <TouchableOpacity
                    onPress={() => { this.doitinh() }}
                >
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>

            </View>
        );
    }
}