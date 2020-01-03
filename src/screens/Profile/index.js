import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  AsyncStorage,
} from 'react-native';
import icon from '../../../icons/tn.jpg';
import iconProfile from '../../../icons/profile.png';
import {onLogIn} from '../../navigation';
import {connect} from 'react-redux';
import {logOut} from '../../redux/userRedux/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
  }

  onLogOut = () => {
    this.props.onLogOutUser();
    onLogIn();
    this.removeEverything();
  };

  removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert('Log out successfully!');
    } catch (e) {
      alert('Logout failed');
    }
  };

  componentDidMount() {
    this.onCheck();
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      let username = parsed.username;
      console.log(username);

      if (parsed) {
        this.setState({
          username: username,
          email: parsed.email,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    console.log(this.state);
    const {data} = this.props.userData;
    return (
      <ScrollView orientation="vertical">
        <View>
          <Image style={style.styleImage} source={icon} />

          <View style={style.styleViewProfile}>
            <Image style={style.styleImageProfile} source={iconProfile} />
          </View>
          <View style={{marginTop: 30, marginHorizontal: 5}}>
            <Text style={style.styleText}>
              Họ và tên: {this.state.username}
            </Text>
            <Text style={style.styleText}>Email: {this.state.email}</Text>
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

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogOutUser: () => {
      dispatch(logOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
