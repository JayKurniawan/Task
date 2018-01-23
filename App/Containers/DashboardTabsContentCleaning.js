import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, AppRegistry } from 'react-native';
import { Container, Button, Icon, Title } from 'native-base';
import InquiriesScreen from './InquiriesScreen';

export default class DashboardTabsContentCleaning extends Component{
    render(){
        // const { navigate } = this.props.navigation
        return(
            <Container>
                <View style={styles.tabContent}>
                    <Text style={styles.title}>Cleaning Service</Text>
                    <Text style={styles.subtitle}>Inquiries Need Action</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button bordered dark style={styles.buttonTop}>
                        <View style={styles.buttonText}>
                            <Text style={styles.numbers}>11</Text>
                            <Text>New</Text>
                        </View>
                        <View style={styles.buttonIcon}>
                            <Icon name='ios-arrow-round-forward' style={styles.icons}/>
                        </View>
                    </Button>
                    <Button bordered dark style={styles.button}>
                        <View style={styles.buttonText}>
                            <Text style={styles.numbers}>15</Text>
                            <Text>Received</Text>
                        </View>
                        <View style={styles.buttonIcon}>
                            <Icon name='ios-arrow-round-forward' style={styles.icons}/>
                        </View>
                    </Button>
                    <Button bordered dark style={styles.button}>
                        <View style={styles.buttonText}>
                            <Text style={styles.numbers}>26</Text>
                            <Text>In Progress</Text>
                        </View>
                        <View style={styles.buttonIcon}>
                            <Icon name='ios-arrow-round-forward-outline' style={styles.icons}/>
                        </View>
                    </Button>

                    <Button style={styles.buttonView} onPress={this.props.navigation.navigate('Inquiries')} >
                        <View>
                            <Text style={styles.text}>VIEW ALL</Text>
                        </View>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    numbers:{
        marginRight: 10,
        marginLeft: 10,
        color: '#bf1420',
        fontWeight: 'bold'
    },
    buttonsContainer:{
        // backgroundColor: '#7f8c8d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTop:{
        alignSelf: 'center',
        marginTop: 20,
        width: 250,
        justifyContent: 'center'
    },
    button:{
        alignSelf: 'center',
        marginTop: 10,
        width: 250,
        justifyContent: 'center'
    },
    buttonView:{
        alignSelf: 'center',
        marginTop: 20,
        width: 250,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    buttonIcon:{
        // backgroundColor: '#000'
    },
    tabContent:{
        backgroundColor:'#fff'
    },
    buttonText:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 100
    },
    text:{
        color: '#fff',
        fontWeight: 'bold'
    },
    title:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle:{
        color: '#7f8c8d',
        marginLeft: 20,
        fontSize: 15,
    },
    icons:{
        color: '#bf1420',
        marginLeft: 90
    }
})