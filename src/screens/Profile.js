import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class Profile extends Component {
  onLogOut = () => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Login',
          options: {
            topBar: {
              title: {
                text: 'Register',
                alignment: 'center',
              },
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <ScrollView orientation="vertical">
        <View>
          <Image
            style={style.styleImage}
            source={require('../../icons/tn.jpg')}
          />
          <Image
            style={{marginTop: -100, marginLeft: 80, borderRadius: 150}}
            source={require('../../icons/profile.png')}
          />
          <View style={{margin: 10}}>
            <Text style={style.styleText}>Họ và tên: Nguyễn Hữu Tuấn</Text>
            <Text style={style.styleText}>
              Địa chỉ: Hòa Phước, Hòa Vang, Đà Nắng
            </Text>
            <Text style={style.styleText}>Giới tính: Nam</Text>
            <Text style={style.styleText}>Tuổi: 21</Text>
            <Text style={style.styleText}>Số điện thoại: 0779763016</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableWithoutFeedback onPress={this.onLogOut}>
              <Text style={style.button}>Log Out</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  styleImage: {
    width: '100%',
    height: 220,
  },

  styleText: {
    fontSize: 20,
    padding: 5,
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    width: 140,
    padding: 12,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'blue',
    color: '#a09292',
  },
});

export default Profile;
