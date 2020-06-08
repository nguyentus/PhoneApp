import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';


export default class MH_Lien_he extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            ContactContent:"aaa",
            Noti:"Vui lòng nhập nội dung liên hệ !"
            
        }
    }
    getContent=(cont)=>{
        if(cont == ""){
            this.setState({ 
                Noti:`Vui lòng nhập nội dung liên hệ !  `
            })
        }
        else {
            this.setState({ 
                
                Noti:`Học viên 1: ${"\n"}Họ tên: Nguyễn Thanh Tú ${"\n"}Email: 1751010177tu@ou.edu.vn ${"\n"}Lớp: React Native cơ bản${"\n"}Học viên 2: ${"\n"}Họ tên: Nguyễn Hoàng Huy ${"\n"}Email: 1751010046huy@ou.edu.vn ${"\n"}Lớp: React Native cơ bản
                    ${"\n"}Nội dung liên hệ: ${cont}`
            })
        }
    }

    postNoti() {
        alert(this.state.Noti);
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:"#FFFFFF", alignItems:'center', marginTop: 60}}>
                <Text style={{fontWeight:"bold", fontSize:22 ,color:"#000000"}}>
                    Liên Hệ
                </Text>
                <View style={style.content}>
                    <TextInput  
                            style={style.input}
                            onChangeText={this.getContent}
                            placeholder="Nhập thông tin liên hệ..."/>
                    <TouchableOpacity onPress={this.postNoti.bind(this)} >
                        <View style={style.button}>
                            <Text style={{color:"#FFFFFF"}}>Gửi</Text>
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
      backgroundColor:'#e11',
      justifyContent:'center'
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
      },
    input:{
      paddingHorizontal:10,
      marginTop:50,
      borderRadius:5,
      backgroundColor:'#f0f2f5',
      width:300,
      height:200,
      color:"#000000"
    },
    text:{
      color:'blue',
      fontSize:16
    },
    button:{    
      height:46,
      width: 300,
      borderRadius:5,
      margin:30,
      backgroundColor:'#000',
      justifyContent:'center',
      alignItems:'center'
    }   
  })