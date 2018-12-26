/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button , FlatList , Image , ScrollView } from 'react-native';
import Pushe from 'react-native-pushe'
import {I18nManager} from 'react-native';
import ImageSlider from 'react-native-image-slider';



class Home extends Component {


    getBestData() {


        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({application: responseJson})
            })
            .catch((error) => {
                console.log(error)
            })

    }

        getNewData() {


            fetch('http://androidsupport.ir/market/getNewApplications.php')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({newApplication : responseJson})
                } )
                .catch((error)=>{
                    console.log(error)
                })




        }


    constructor(props){
        Pushe.initialize(true);
        super(props);

        this.state = {

            application : null,
            newApplication : null,

        }


    }

    componentDidMount(){
        this.getBestData();
        this.getNewData();
    }


    render() {

        console.log(this.state.application)

        return (
            <View style={styles.container}>

                <ScrollView>


                <View style={{height:300}}>

                    <ImageSlider  loopBothSides
                                  autoPlayWithInterval={3000} images={[
                        'http://placeimg.com/640/480/any',
                        'http://placeimg.com/640/480/any',
                        'http://placeimg.com/640/480/any'
                    ]}/>

                </View>



                <Text style={styles.welcome}>برترین محصولات</Text>

                <FlatList
                    style={{ flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' , height : 144 }}
                horizontal={true}
                keyExtractor={(item,index)=>index.toString()}
                data={this.state.application}

                renderItem ={({item})=><View style={styles.card}>

                    <Image source={{uri:"http://androidsupport.ir/market/images/"+item.icon}} style={{width: 96 , height : 96}} ></Image>
                    <Text style={styles.text}>{item.title}</Text>

                </View>}
                />



                <Text style={styles.welcome}>جدیدترین محصولات</Text>

                <FlatList
                    style={{ flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' ,  height : 144 }}
                    horizontal={true}
                    keyExtractor={(item,index)=>index.toString()}
                    data={this.state.newApplication}

                    renderItem ={({item})=><View style={styles.card}>

                        <Image source={{uri:"http://androidsupport.ir/market/images/"+item.icon}} style={{width: 96 , height : 96}} ></Image>
                        <Text style={styles.text}>{item.title}</Text>

                    </View>}
                />



                </ScrollView>

            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {


    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginTop : 5,

    },

    card : {
        width: 144,
        height : 144,
        backgroundColor:'#ffffff',
        marginRight:15,
        marginTop : 15,
        alignItems: 'center',
    },

});
