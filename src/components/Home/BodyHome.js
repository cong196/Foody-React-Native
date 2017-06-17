import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, Dimensions
} from 'react-native';

import MainViewTabODau from './TabOdau/MainViewTabODau';
import MainViewTabAnGi from './TabAnGi/MainViewTabAnGi';

import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

const { height } = Dimensions.get('window');
export default class BodyHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager
                    style={{ height: height - 40 }}
                    ref={(viewPager) => { this.viewPager = viewPager; }}
                    initialPage={0}
                >
                    <View style={{ backgroundColor: 'cadetblue' }}>
                        <MainViewTabODau />
                    </View>
                    <View style={{ backgroundColor: 'cornflowerblue' }}>
                        <MainViewTabAnGi />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                this.viewPager.setPage(1);
                            }}
                        >
                            <Text>Chaneg</Text>
                        </TouchableOpacity>
                    </View>
                </IndicatorViewPager>

               
            </View>
        );
    }
}

var styles = StyleSheet.create({

})

/*
<Swiper
                    removeClippedSubviews={false}
                    style={styles.wrapper}
                    showsButtons={false}
                    loop={false}
                    dot={<View style={{ backgroundColor: 'rgba(0,0,0,0)' }} />}
                    activeDot={<View style={{ backgroundColor: 'rgba(0,0,0,0)' }} />}
                >
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>

                */