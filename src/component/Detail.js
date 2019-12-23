import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

export default class Detail extends Component {
  render() {
    const {imageUrl} = this.props.data;
    return (
      <View>
        <Image source={{uri: imageUrl}} style={style.styleImage} />

        <Text style={style.styleText}>IMAGE</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: imageUrl}} style={style.styleSmallImages} />
          <Image source={{uri: imageUrl}} style={style.styleSmallImages} />
          <Image source={{uri: imageUrl}} style={style.styleSmallImages} />
        </View>
        <View style={{margin: 5}}>
          <Text style={style.styleText}>DESCRIPTION</Text>
          <Text style={style.styleDescription}>
            {this.props.data.subtitle.en}
          </Text>
        </View>
        <View style={{margin: 5}}>
          <Text style={style.styleText}>SOCIAL</Text>
          <View style={style.styleView}>
            <Image
              style={style.styleIconAdd}
              source={require('../../icons/icon1.jpg')}
            />
            <Text style={style.styleSocialText}>enouvo.com</Text>
          </View>
          <View style={style.styleView}>
            <Image
              style={style.styleIconAdd}
              source={require('../../icons/facebook.png')}
            />
            <Text style={style.styleSocialText}>facebook.com/enouvo/</Text>
          </View>
          <View style={style.styleView}>
            <Image
              style={style.styleIconAdd}
              source={require('../../icons/facebook.png')}
            />
            <Text style={style.styleSocialText}>
              instagram.com/enouvo.it.solutions/
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleImage: {
    width: '100%',
    height: 200,
  },
  styleIconAdd: {
    width: 50,
    height: 40,
    margin: 5,
  },
  styleSocialText: {
    fontSize: 15,
    color: 'black',
    padding: 10,
    alignContent: 'center',
  },
  styleText: {
    fontSize: 20,
    margin: 10,
  },
  styleBigImage: {
    margin: 5,
  },
  styleView: {
    flexDirection: 'row',
  },
  styleDescription: {
    color: 'gray',
    fontSize: 15,
  },
  styleSmallImages: {
    height: 100,
    width: 100,
    marginLeft: 22,
  },
});
