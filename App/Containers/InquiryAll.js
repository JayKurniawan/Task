import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import { Badge, Container, Card, CardItem, Body, Content } from 'native-base';

export default class InquiryAll extends Component{
    render(){
        return(
            <Container style={styles.mainBackground}>
                <Content>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.textCode}>12-YY-34XX-55Y</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.textBadge}>URGENT</Text>
                            </Badge>
                        </CardItem>
                        <CardItem>
                        <Body style={styles.cardBody}>
                            <Text style={styles.textBold}>Engineering - Air Conditioning</Text>
                        </Body>
                        </CardItem>
                        <CardItem footer style={styles.cardItem}>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    mainBackground: {
        backgroundColor: '#f1f1f1'
    },
    textCode:{
        fontSize: 10
    },
    textBold:{
        fontWeight: 'bold'
    },
    textBadge:{
        fontSize: 10,
        color: '#fff'
    },
    badge:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 15,
        marginLeft: 5
    },
    card:{
        borderRadius: 10,
        borderColor: '#f1f1f1',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    cardItem:{
        borderRadius: 10,
        borderColor: '#f1f1f1',
    },
    cardBody:{
        marginTop: -20,
        borderBottomColor: '#000',
        borderBottomWidth: 0.25
    }
});
