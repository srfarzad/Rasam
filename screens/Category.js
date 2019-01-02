/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, Button, Image} from 'react-native';
import {I18nManager} from 'react-native';



class Category extends Component {


    getAllCategory(){
        fetch('http://androidsupport.ir/market/getCategories.php')
            .then((response) => response.json())
            .then((responseJson)=> {
                this.setState({categories:responseJson})
            }) .catch((error) => {
            console.log(error)
        })

    }

    constructor(props){
        super(props);
        this.state={
            categories : null,
        }
    }

    componentDidMount(){
        this.getAllCategory();
    }

    render() {
        console.log(this.state.categories)

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>دسته بندی ها</Text>
                <View style={styles.flat}>
                    <FlatList
                        style={{flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', height : 600,}}
                        //horizontal={true}
                        keyExtractor={(item,index)=>index.toString()}
                        data={this.state.categories}

                        renderItem ={({item})=><View style={styles.card}>

                            <Image source={{uri:"http://androidsupport.ir/market/images/"+item.icon}} style={{width: 96 , height : 96}} ></Image>
                            <Text style={styles.text}>{item.title}</Text>

                        </View>}
                        numColumns={2}

                    />


                </View>



            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {

    },
    flat: {

        alignItems: 'center',
    },
    welcome: {
        fontFamily: "irsans" ,
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    text: {
        fontFamily: "irsans" ,
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
