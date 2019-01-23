/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Accordion,Badge,Card,CardItem} from 'native-base';
import LottieView from 'lottie-react-native';


const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class Profile extends Component {



    render() {
        return (

            <Container>
                <Header />
                <Content padder>

                 {/*   <LottieView
                        source={require('../animation/action.json')}
                        autoPlay
                        loop
                    />*/}



                    <Accordion
                        dataArray={dataArray}
                        icon="add"
                        expandedIcon="remove"
                        iconStyle={{ color: "green" }}
                        expandedIconStyle={{ color: "red" }}
                    />

                    <Badge>
                        <Text>2</Text>
                    </Badge>

                    <Button rounded light><Text> Light </Text></Button>
                    <Button primary><Text> Primary </Text></Button>
                    <Button success><Text> Success </Text></Button>
                    <Button info><Text> Info </Text></Button>
                    <Button warning><Text> Warning </Text></Button>
                    <Button danger><Text> Danger </Text></Button>
                    <Button dark><Text> Dark </Text></Button>


                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                //Your text here
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>


                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>

                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>



        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
