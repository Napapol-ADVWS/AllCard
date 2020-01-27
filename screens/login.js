import React,{Component} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import StyleSheet from '../src/components/componentsLogin/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
var thisPage = ""
export default class Login extends React.Component {
    Goto = () => {
        var page = thisPage
        const {changePage}=this.props;
        this.changePage= changePage;
        this.changePage(page);
    }
    render() {
        return (
            <View style={StyleSheet.container}>    
                <Image
                    source={require('../assets/image/logo.png')}
                    style={{ width: 180, height: 180 }}
                />
                <Text style={StyleSheet.textLogin1}>เข้าสู่ระบบสมาชิก</Text>
                <TouchableOpacity style={StyleSheet.buttonLoginNumber}  onPress={()=>this.Goto(thisPage="LoginNumber")}>
                    <Text style={StyleSheet.textbuttonNumber}>
                        เข้าสู่ระบบด้วยเบอร์โทรศัพท์
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheet.buttonLoginFacebook} onPress={()=>this.Goto(thisPage="LoginFacebook")}>
                    <Text style={StyleSheet.textbuttonFacebookAndGoogle}>
                        เข้าสู่ระบบด้วย  <Icon name="facebook" color="#FFFFFF" size={20} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheet.buttonLoginGoogle} onPress={()=>this.Goto(thisPage="LoginGoogle")}>
                    <Text style={StyleSheet.textbuttonFacebookAndGoogle}>
                        เข้าสู่ระบบด้วย  <Icon name="google-plus" color="#FFFFFF" size={20} />
                    </Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', marginTop: 100, flexDirection: 'row' }}>
                    <TouchableOpacity >
                        <Text style={StyleSheet.textLogin2}> นโยบายความเป็นส่วนตัว </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 10, color: '#FFFFFF' }}>|</Text>
                    <TouchableOpacity>
                        <Text style={StyleSheet.textLogin2}> เงื่อนไขการใช้ </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}




