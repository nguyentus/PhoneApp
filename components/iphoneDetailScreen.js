import React, {Component} from 'react';
import {View,Image, TouchableOpacity,Text, TextInput,StyleSheet, } from 'react-native';
export default class IphoneDetailScreen extends Component{  
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.Iphone.Ten,
            headerStyle: {
                backgroundColor: '#e5f6ff',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight:"normal",
                fontSize:16
            }
        };
    };

    constructor(props){
        super(props);
        let Iphone = this.props.navigation.state.params.Iphone;
        this.state={
            Ma_so:Iphone.Ma_so,
            Ten:Iphone.Ten,
            Hinh:'https://servicedatajs.herokuapp.com/' + Iphone.Ma_so + '.png',            
            Don_gia_Ban:Iphone.Don_gia_Ban
        }
    }

    onClickProduct(){
        alert("Mã số: " + this.state.Ma_so);
    }

    render(){            
        return(                 
            <View style={style.container}>
                <View style={{alignItems:"center",marginTop:20}}>
                    <Image style={style.image} source={{uri:this.state.Hinh}}></Image>  
                </View> 
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <TextInput onChangeText={(Ma_so)=>this.setState({Ma_so})} value={this.state.Ma_so} placeholder='Mã số'  style={style.input}/>
                    <TextInput onChangeText={(Ten)=>this.setState({Ten})} value={this.state.Ten} placeholder='Tên'  style={style.input}/>
                    <TextInput onChangeText={(Don_gia)=>this.setState({Don_gia})} value={this.state.Don_gia_Ban.toString()} placeholder='Đơn giá'  style={style.input} />                  
                    <TouchableOpacity onPress={this.onClickProduct.bind(this)} activeOpacity={0.5}>
                        <View style={style.button}>
                            <Text style={style.text}>Đặt Hàng</Text>
                        </View>     
                    </TouchableOpacity>   
                </View>          
            </View>          
        );        
    }
}

const style= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffffff',
      justifyContent:'center'
    },
    input:{
      padding:15,
      backgroundColor:'#f0f2f5',
      margin:5,
      borderRadius:5
    },
    button:{
      height:46,
      borderRadius:5,
      margin:30,
      backgroundColor:'#000',
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'#ffffff',
      fontSize:16,
    },
    image:{
        height:240,
        width:240,
        marginBottom:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        resizeMode:"stretch" 
    }
  })