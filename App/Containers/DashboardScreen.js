import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Drawer, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import DashboardTabs from './DashboardTabs';
import SideBar from './SideBar';
import InquiriesScreen from './InquiriesScreen';
import StackNavigator from 'react-navigation';

export default class DashboardScreen extends Component {
  
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
        onClose={() => this.closeDrawer()} >
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
              <Title style={styles.headerTitle}>DASHBOARD</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='ios-search' style={styles.icons}/>
              </Button>
              <Button transparent>  
                <Icon name='ios-add-circle' style={styles.icons}/>
              </Button>
            </Right>
          </Header>

          <View style={styles.infoBox}>
            <Text style={styles.titleText}>Hi Alexander</Text>
            <Text>You're a TR Officer</Text>
            <Text>Below are your today inquiries</Text>
          </View>
          <View style={styles.tabContent}>
            <DashboardTabs />
          </View>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle:{
    color: '#ffff',
    fontSize: 13
  },
  headerColor:{
    backgroundColor: '#1b1b1b'
  },
  infoBox:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#f8f8f8'
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