import React,{Component} from 'react';
import {View, Text,Image, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import {format_number} from './shared';
import api from '../components/apiServices'

class FlatListItem extends Component{ 
    onClickProducts(){
        this.props.navigation.navigate("Android_Detail_Screen",{"Android":this.props.item})
    }
    render(){
        return(
            <View style={{flex:1, flexDirection:"column"}}>
                <TouchableOpacity onPress={this.onClickProducts.bind(this)} activeOpacity={0.5}>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Image style={{height:130,width:120, margin:5, resizeMode:"stretch"}} source={{uri:'https://servicedatajs.herokuapp.com/' + this.props.item.Ma_so + '.png'}}></Image>
                        <View style={{flex:1, flexDirection:"column", height:30, marginTop:10}}>
                            <Text style={styles.itemText}>{this.props.item.Ten}</Text>
                            <Text style={styles.itemText}>Đơn giá: {format_number(this.props.item.Don_gia_Ban)} VND</Text>
                        </View>                
                    </View>
                    <View style={{height:1, backgroundColor:"#e6e5e5"}}></View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class IphoneScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Điện thoại Android",
            headerStyle: {
                backgroundColor: '#e5f6ff',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight:"bold",
                fontSize:18
            }
        };
    };

    state = {
        list: []
    };

    componentDidMount = async () => {
        try {
            const data = await api.get('https://servicedatajs.herokuapp.com/Danh_sach_Dien_thoai');
            var listAndroid = [];

            for (let item of data){
                if (item.Nhom_Dien_thoai.Ma_so == "ANDROID"){
                    listAndroid.push(item);
                }
            }
            this.setState({list: listAndroid});
        } catch (err) {
            console.log(err);
        }
    };

    render(){        
        return (
            <View style={{marginTop:2, flex:1}}>
                <FlatList 
                    data={this.state.list} 
                    keyExtractor={(item) => item.Ma_so} 
                    renderItem={({item, index})=>{
                        return(
                            <FlatListItem item={item} index={index} navigation={this.props.navigation}></FlatListItem>
                        );
                    }}>
                </FlatList>        
            </View>
        );
    }
}

const styles= StyleSheet.create({
    itemText:{
        color:"#000000",
        padding:5,
        fontSize:14
    }
})


