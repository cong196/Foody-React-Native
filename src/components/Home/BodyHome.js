import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Alert
} from 'react-native';

import MainViewTabODau from './TabOdau/MainViewTabODau';
import MainViewTabAnGi from './TabAnGi/MainViewTabAnGi';

import { IndicatorViewPager } from 'rn-viewpager';
import global from '../global';
const { height } = Dimensions.get('window');
export default class BodyHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        global.setPage = this.setPage.bind(this);
    }

    setPage(index) {
        if (this.state.index !== index)
            this.viewPager.setPage(index);
    }

    changeIndex() {
        let { index } = this.state;
        if (index === 0) {
            this.setState({ index: 1 })
        } else {
            this.setState({ index: 0 })
        }
    }
    pageChange() {
        this.changeIndex();
        if (this.state.index === 1) {
            Alert.alert(
                'Ở đâu !!',
            )
        } else {
            Alert.alert(
                'Ăn gì !!',
            )
        }
        global.setButtonOdauAngi(this.state.index);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager
                    style={{ height: height - 40 }}
                    ref={(viewPager) => { this.viewPager = viewPager; }}
                    initialPage={0}
                    onPageSelected={() => { this.pageChange() }}
                >
                    <View style={{ backgroundColor: 'cadetblue' }}>
                        <MainViewTabODau doitinh={this.props.doitinh} />
                    </View>
                    <View style={{ backgroundColor: 'cornflowerblue' }}>
                        <MainViewTabAnGi doitinh={this.props.doitinh} />
                    </View>

                </IndicatorViewPager>
            </View>
        );
    }
}

var styles = StyleSheet.create({

})
