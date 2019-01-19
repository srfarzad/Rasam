/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image,ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';


class Product extends Component {


    constructor(props) {
        super(props)
    }


    render() {

        {
            console.log(this.props.item)
        }
        {
            console.log(this.props.item.title)
        }

        return (


            <ScrollView>

                <View style={styles.container}>

                    <View style={{flex: 1, flexDirection: 'row', margin: 12}}>


                        <Image source={{uri: "http://androidsupport.ir/market/images/" + this.props.item.icon}}
                               style={styles.image}></Image>


                        <View style={{flex: 1,flexDirection: 'column', margin: 12}}>


                            <View style={{flexDirection: 'column', margin: 12}}>

                                <Text style={styles.welcome}>{this.props.item.title}</Text>

                                <Text style={[styles.welcome, styles.margin_5]}> قیمت {this.props.item.price}</Text>
                            </View>




                            <StarRating
                                reversed={true}
                                maxStars={5}
                                rating={this.props.item.rate}
                                fullStarColor={'yellow'}
                            />

                        </View>




                    </View>

                    <View style={{flex: 1, flexDirection: 'column', margin: 12}}>



                        <Text style={[styles.instructions,styles.border]}>
                            {this.props.item.shortDescription}


                        </Text>


                        <Button title="ادامه مطلب"></Button>






                    </View>


                </View>

            </ScrollView>


        );
    }
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    image: {
        width: 144,
        height: 144,
        justifyContent: 'flex-start',
        margin: 5,
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        fontFamily: "irsans",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontFamily: "irsans",
        padding : 5,

    },
    margin_5: {
        marginRight: 15,
    }
    , rate: {
       backgroundColor:'red',
    } ,
    border : {
        borderStyle : 'solid',
        borderWidth : 1,
        borderColor:'#ccc',
    }

});
