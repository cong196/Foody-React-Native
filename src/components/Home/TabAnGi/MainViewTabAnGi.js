import React , {Component} from 'react';
import {
    View,Text,TouchableOpacity
} from 'react-native';

export default class MainViewTabAnGi extends Component {
    render(){
        return(
            <View style = {{backgroundColor:'green'}}>
                <Text> Main View Tab Ăn Gì</Text>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
            </View>
        );
    }
}