import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { TabHeading, Tab, Tabs, Container, Icon, Badge } from 'native-base';

export default class SideBarMenu extends Component{
    render(){
        return(
            <Container>
                <TouchableOpacity onPress={() => alert('Under Construction')}>
                    <View style={styles.middle}>
                        <View style={styles.middleIcon}>
                            <Icon name='ios-home-outline' style={styles.icons}/>
                        </View>
                        <View style={styles.middleText}>
                            <Text style={styles.textMenu}>Home</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Under Construction')}>
                    <View style={styles.middle}>
                        <View style={styles.middleIcon}>
                            <Icon name='ios-clipboard-outline' style={styles.icons}/>
                        </View>
                        <View style={styles.middleText}>
                            <Text style={styles.textMenu}>Inquiries</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Under Construction')}>
                    <View style={styles.middle}>
                        <View style={styles.middleIcon}>
                            <Icon name='ios-information-circle-outline' style={styles.icons}/>
                        </View>
                        <View style={styles.middleText}>
                            <Text style={styles.textMenu}>Announcement</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Under Construction')}>
                    <View style={styles.middle}>
                        <View style={styles.middleIcon}>
                            <Icon name='ios-notifications-outline' style={styles.icons}/>
                        </View>
                        <View style={styles.middleText}>
                            <Text style={styles.textMenu}>Updates</Text>
                        </View>
                        <View style={styles.middleText}>
                            <Badge danger style={styles.badge}><Text style={styles.textBadge}>26</Text></Badge>
                        </View>
                    </View>
                </TouchableOpacity>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    badge:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 15,
        marginLeft: 5
    },
    textBadge:{
        fontSize: 12,
        color: '#fff'
    },
    middle:{
        flexDirection: 'row',
        backgroundColor: '#1b1b1b',
        height: 60
    },
    middleText:{
        justifyContent: 'center'
    },
    middleIcon:{
        justifyContent: 'center',
        backgroundColor: '#1b1b1b',
        width: 60
    },
    icons:{
        fontSize: 25,
        color: '#e9b038',
        marginLeft: 30,
    },
    textMenu:{
        color: '#fff',
        // marginLeft: 10
    }
});
