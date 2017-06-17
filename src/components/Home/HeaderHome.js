import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback,
    Alert
} from 'react-native';

export default class HeaderHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            odau: true,
            angi: false
        }
    }
    clickOdau() {
        this.setState({
            odau: true,
            angi: false
        })
    }

    clickAngi() {
        this.setState({
            odau: false,
            angi: true
        })
    }

    doiTinhThanh() {
        
    }
    render() {
        const { header, icon, iconF, OdauActive, Odau, Angi, AngiActive } = style;
        return (
            <View style={header}>
                <TouchableOpacity style={iconF}>
                    <Image
                        style={icon}
                        source={require('../../img/iconF.png')}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableWithoutFeedback
                        onPress={() => { this.clickOdau() }}
                    >
                        <View style={this.state.odau ? OdauActive : Odau}>
                            <Text>Ở đâu</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => { this.clickAngi() }}
                    >
                        <View style={this.state.angi ? AngiActive : Angi}>
                            <Text>Ăn gì</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <TouchableWithoutFeedback
                    onPress={() => { this.doiTinhThanh() }}
                >
                    <View style={[iconF, { paddingRight: 10 }]}>
                        <Text style={{ color: 'white', fontSize: 17 }}>+</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View >
        );
    }
}

var style = StyleSheet.create({
    header: {
        height: 40,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 26,
        height: 26
    },
    iconF: {
        margin: 5,
        justifyContent: 'center'
    },
    OdauActive: {
        width: 60,
        marginVertical: 7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    },
    Odau: {
        width: 60,
        marginVertical: 7,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderColor: 'white',
        borderWidth: 2
    },
    Angi: {
        width: 60,
        marginVertical: 7,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderColor: 'white',
        borderWidth: 2
    },
    AngiActive: {
        width: 60,
        marginVertical: 7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    }

})