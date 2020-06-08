import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';


export default class Chinh extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:"#fafafa", paddingTop:15, alignItems:'center', marginTop:60}}>
                <Text style={{fontWeight:"bold", fontSize:22 ,color:"#000000", marginBottom:60}}>
                    Giới Thiệu
                </Text>     
                <View style={style.container}> 
                    <Image style={{height:140,width:250, resizeMode:"stretch", borderRadius:10}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tconcept-e8cbc.appspot.com/o/tu.jpg?alt=media&token=1c100e53-81b9-467e-ad14-484dd93c7d1d'}}></Image>
                    <View style={style.text}>
                        <Text>Học viên 1</Text>
                        <Text>Họ tên: Nguyễn Thanh Tú</Text>
                        <Text>Email: 1751010177tu@ou.edu.vn</Text>
                        <Text>Lớp: React Native cơ bản</Text>
                    </View>
                </View> 
                <View style={style.container}>
                    <Image style={{height:140,width:250, resizeMode:"stretch", borderRadius:10}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tconcept-e8cbc.appspot.com/o/huy.jpg?alt=media&token=643b442f-08c7-489d-9883-11ab23420c28'}}></Image>
                    <View style={style.text}>
                        <Text>Học viên 2</Text>
                        <Text>Họ tên: Nguyễn Hoàng Huy</Text>
                        <Text>Email: 1751010046huy@ou.edu.vn</Text>
                        <Text>Lớp: React Native cơ bản</Text>
                    </View>
                </View>              
            </View>
        );
    }
}

const style= StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        marginTop:30,
        shadowColor:"#000000"
    },
    text:{
        marginTop:20,
        fontSize:16,
        alignItems:"center"
    },
    button:{    
        paddingHorizontal:10,
        margin:5,
        backgroundColor:'black',
        height:30,
        textAlign:"center",
        marginLeft:253,
        borderRadius:3
    }   
  })