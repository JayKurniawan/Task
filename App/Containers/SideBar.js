import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Left, Right, Button, Body, Container, Header, Content, Icon, Title } from 'native-base';
import SideBarMenu from './SideBarMenu';

export default class SideBar extends Component {
    render(){
        return(
            <Container style={{backgroundColor:'#1b1b1b'}}>
                <Header
                    style={styles.header}
                    iosBarStyle='light-content'
                >
                </Header>
                <View>
                    <View style={styles.top}>
                        <Icon name='ios-aperture' style={styles.logo}/>
                        <Text style={styles.text}>MY TASK</Text>
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.middleText}>
                            <Text style={styles.text}>Alexander</Text>
                            <Text style={styles.textGrey}>Tenant Relation Officer</Text>
                        </View>
                        <View style={styles.middleIcon}>
                            <TouchableOpacity>
                                <Icon name='ios-settings-outline' style={styles.icons} onPress={() => alert('Under Construction')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.menuItems}>
                            <SideBarMenu/>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.textFooter}>Powered by React Native</Text>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    top:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        backgroundColor: '#1b1b1b'
    },
    middle:{
        flexDirection: 'row',
        backgroundColor: '#212121'
    },
    middleText:{
        flex: 1,
        justifyContent: 'center',
        height: 80,
        backgroundColor: '#212121',
        marginLeft: 30
    },
    middleIcon:{
        justifyContent: 'center',
        backgroundColor: '#212121',
        marginRight: 30
    },
    menuItems:{
        height: 350
    },
    header:{
        height: 0,
        borderBottomColor: '#1b1b1b',
        backgroundColor: '#1b1b1b',
    },
    logo:{
        fontSize: 70,
        color: '#e9b038'
    },
    text:{
        color: '#e9b038'
    },
    textGrey:{
        fontSize: 10,
        color: '#8a8686',
        fontWeight: 'bold'
    },
    icons:{
        fontSize: 30,
        color: '#e9b038'
    },
    footer:{
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#000',
        height: 62
    },
    textFooter:{
        color: '#fff',
        marginTop: 25,
        fontSize: 10
    }
})