import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Tabs, Tab, TabHeading, Drawer, Button, Icon, Title, Header, Left, Right, Body, Container } from 'native-base';
// import StackNavigator from 'react-navigation';
import SideBar from './SideBar';
import InquiryAll from './InquiryAll';

export default class InquiriesScreen extends Component{

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render(){
        return(
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} 
            >
                <Container>
                    <Header
                        style={styles.headerColor}
                        iosBarStyle='light-content'
                    >
                        <Left>
                            <Button transparent onPress={()=>this.openDrawer()}>
                                <Icon name='ios-menu' style={styles.icons}/>
                            </Button>
                            </Left>
                        <Body>
                            <Title style={styles.headerTitle}>INQUIRY LIST</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='ios-search' style={styles.icons}/>
                            </Button>
                        </Right>
                    </Header>

                    <Tabs tabBarUnderlineStyle={{ backgroundColor:'#e9b038' }}>
                        <Tab heading={ <TabHeading style={styles.tabsBg}><Text style={styles.tabsText}>ALL</Text></TabHeading>}>
                            <InquiryAll />
                        </Tab>
                        <Tab heading={ <TabHeading style={styles.tabsBg}><Text style={styles.tabsText}>NEW</Text></TabHeading>}>
                            {/* <Tab2 /> */}
                        </Tab>
                        <Tab heading={ <TabHeading style={styles.tabsBg}><Text style={styles.tabsText}>RECEIVED</Text></TabHeading>}>
                            {/* <Tab3 /> */}
                        </Tab>
                        <Tab heading={ <TabHeading style={styles.tabsBg}><Text style={styles.tabsText}>IN PROGRESS</Text></TabHeading>}>
                            {/* <Tab3 /> */}
                        </Tab>
                        <Tab heading={ <TabHeading style={styles.tabsBg}><Text style={styles.tabsText}>COMPLETED</Text></TabHeading>}>
                            {/* <Tab3 /> */}
                        </Tab>
                    </Tabs>
                </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    tabsBg:{
        backgroundColor: '#1b1b1b'
    },
    tabsText:{
      fontSize: 10,
      color: '#fff'
    },
    headerColor:{
      backgroundColor: '#1b1b1b',
      borderBottomColor: '#1b1b1b'
    },
    headerTitle:{
      color: '#fff',
      fontSize: 13
    },
    titleText:{
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10
    },
    menuContainer:{
      height: 100,
      backgroundColor: '#1b1b1b'
    },
    icons:{
      fontSize: 25,
      color: '#e9b038'
    },
    tabContent:{
      flexDirection: 'row'
    }
  });