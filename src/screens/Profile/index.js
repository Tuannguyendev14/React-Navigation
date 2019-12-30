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
import icon from '../../../icons/tn.jpg';
import iconProfile from '../../../icons/profile.png';

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
          <Image style={style.styleImage} source={icon} />

          <View style={style.styleViewProfile}>
            <Image style={style.styleImageProfile} source={iconProfile} />
          </View>
          <View style={{marginTop: 30, marginHorizontal: 5}}>
            <Text style={style.styleText}>Họ và tên: Nguyễn Hữu Tuấn</Text>
            <Text style={style.styleText}>
              Địa chỉ: Hòa Phước, Hòa Vang, Đà Nắng
            </Text>
            <Text style={style.styleText}>Giới tính: Nam</Text>
            <Text style={style.styleText}>Tuổi: 21</Text>
            <Text style={style.styleText}>Số điện thoại: 0779763016</Text>
          </View>

          <View style={style.styleViewButtonLogOut}>
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
  styleViewProfile: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: -80,
  },
  styleImageProfile: {
    borderRadius: 150,
  },
  styleViewButtonLogOut: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
});

export default Profile;
