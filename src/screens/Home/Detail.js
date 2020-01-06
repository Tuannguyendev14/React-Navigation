import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import data from '../../utils/Data';
import {Navigation} from 'react-native-navigation';

export default class Detail extends Component {
  renderItem = ({item}) => {
    return (
      <>
        <Image source={{uri: item.imageUrl}} style={style.styleSmallImages} />
      </>
    );
  };
  navigationButtonPressed = ({buttonId}) => {
    console.log('close');

    const {componentId} = this.props;
    if (buttonId === 'close') {
      Navigation.dismissModal(componentId);
    }
  };

  render() {
    const {imageUrl, subtitle} = this.props.data;
    return (
      <ScrollView orientation="vertical">
        <View>
          <Image source={{uri: imageUrl}} style={style.styleImage} />

          <Text style={style.styleText}>IMAGE</Text>

          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
            horizontal={true}
          />

          <View style={{margin: 5}}>
            <Text style={style.styleText}>DESCRIPTION</Text>
            <Text style={style.styleDescription}>{subtitle.en}</Text>
          </View>

          <View style={{margin: 5}}>
            <Text style={style.styleText}>SOCIAL</Text>

            <View style={style.styleView}>
              <Image
                style={style.styleIcon}
                source={require('../../../icons/icon1.jpg')}
              />
              <Text style={style.styleSocialText}>enouvo.com</Text>
            </View>

            <View style={style.styleView}>
              <Image
                style={style.styleIcon}
                source={require('../../../icons/facebook1.png')}
              />
              <Text style={style.styleSocialText}>facebook.com/enouvo/</Text>
            </View>

            <View style={style.styleView}>
              <Image
                style={style.styleIcon}
                source={require('../../../icons/instagram.png')}
              />
              <Text style={style.styleSocialText}>
                instagram.com/enouvo.it.solutions/
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  styleImage: {
    width: '100%',
    height: 200,
  },
  styleIcon: {
    width: 50,
    height: 50,
    margin: 5,
  },
  styleSocialText: {
    fontSize: 15,
    color: 'black',
    padding: 10,
    alignContent: 'center',
    textAlignVertical: 'center',
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
    margin: 10,
  },
  styleSmallImages: {
    height: 100,
    width: 100,
    marginLeft: 22,
    borderRadius: 20,
  },

  container: {
    flex: 1,
    marginTop: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
