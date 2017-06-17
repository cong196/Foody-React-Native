import React , {Component} from 'react';
import {
    View,Text,TouchableOpacity
} from 'react-native';

export default class MainViewTabODau extends Component {
    render(){
        return(
            <View style = {{backgroundColor:'red'}}>
                <Text> Main View Tab Ở đâu</Text>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <Text> Main View Tab Ở đâu</Text>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <Text> Main View Tab Ở đâu</Text>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <Text> Main View Tab Ở đâu</Text>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
                <Text> Main View Tab Ở đâu</Text>
                <TouchableOpacity>
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>
            </View>
        );
    }
}