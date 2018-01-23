import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ScrollableTab, TabHeading, Tab, Tabs, Badge, Container, Button, Icon, Title } from 'native-base';
import DashboardTabsContentEngineering from './DashboardTabsContentEngineering';
import DashboardTabsContentCleaning from './DashboardTabsContentCleaning'

export default class DashboardTabs extends Component{
    render(){
        return(
            <Container>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading={ <TabHeading><Icon name='ios-construct-outline' style={styles.icons}/></TabHeading>}>
                        <DashboardTabsContentEngineering/>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-trash-outline' style={styles.icons}/></TabHeading>}>
                        <DashboardTabsContentCleaning/>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-home-outline' style={styles.icons}/></TabHeading>}>
                        
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-car-outline' style={styles.icons}/></TabHeading>}>
                        
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-person-outline' style={styles.icons}/></TabHeading>}>
                        
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-key-outline' style={styles.icons}/></TabHeading>}>
                        
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-cart-outline' style={styles.icons}/></TabHeading>}>
                       
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-cube-outline' style={styles.icons}/></TabHeading>}>
                        
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name='ios-contacts-outline' style={styles.icons}/></TabHeading>}>
                        
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    tabsContainer:{
        flexDirection: 'row'
    },
    icons:{
        color: '#bf1420'
    }
})