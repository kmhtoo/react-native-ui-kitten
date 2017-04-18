import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';

import {RkButton, RkText, RkTheme} from 'react-native-ui-kitten';

import {UtilStyles} from '../style/styles';
import {Icon} from '../components/icon';

export class ButtonScreen extends Component {
  static navigationOptions = {
    title: 'Buttons',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: RkTheme.current.colors.back.base
      }
    })
  };

  _onPress() {
    Alert.alert('onPress');
  }

  _onLongPress() {
    Alert.alert('onLongPress');
  }

  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={true}
        style={UtilStyles.container}>
        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Basic button</RkText>
          <View style={UtilStyles.rowContainer}>
            <RkText>Just create button element with text inside.</RkText>
          </View>
          <View style={[UtilStyles.rowContainer, {alignItems: 'center'}]}>
            <RkButton>Button</RkButton>
            <View style={[UtilStyles.tab]}>
              <RkText rkType='danger'>{"<RkButton>"}</RkText>
              <RkText>Button</RkText>
              <RkText rkType='danger'>{"</RkButton>"}</RkText>
            </View>
          </View>
        </View>

        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Colored buttons</RkText>
          <View style={UtilStyles.columnContainer}>
            <RkText>Easy to customize styles of control using rkType.
              Styles will be applied according to current theme.</RkText>
            <RkText>Here are buttons with predefined rkTypes:</RkText>
          </View>
          <View style={[UtilStyles.columnContainer]}>
            <RkButton rkType='primary' style={UtilStyles.spaceBottom}>Primary</RkButton>
            <RkButton rkType='success' style={UtilStyles.spaceVertical}>Success</RkButton>
            <RkButton rkType='info' style={UtilStyles.spaceVertical}>Info</RkButton>
            <RkButton rkType='warning' style={UtilStyles.spaceVertical}>Warning</RkButton>
            <RkButton rkType='danger' style={UtilStyles.spaceTop}>Danger</RkButton>
          </View>
        </View>
        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Button types</RkText>
          <View style={UtilStyles.rowContainer}>
            <RkText>There are predefined rkTypes in all controls.
              They define appearance of component.
            </RkText>
          </View>
          <View style={UtilStyles.rowContainer}>
            <View style={UtilStyles.exampleView}>
              <RkButton rkType='basic' style={UtilStyles.spaceBottom}>Basic</RkButton>
              <RkButton rkType='rounded' style={UtilStyles.spaceVertical}>Rounded</RkButton>
              <RkButton rkType='outline' style={UtilStyles.spaceTop}>Outline</RkButton>
            </View>
          </View>
        </View>
        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Button sizes</RkText>
          <View style={UtilStyles.rowContainer}>
            <RkText>rkType props also allow you to define the mass of button.</RkText>
          </View>
          <View style={UtilStyles.columnContainer}>
            <RkButton rkType='small outline' style={UtilStyles.spaceBottom}>Small</RkButton>
            <RkButton rkType='medium outline' style={UtilStyles.spaceVertical}>Medium</RkButton>
            <RkButton rkType='large outline' style={UtilStyles.spaceVertical}>Large</RkButton>
            <RkButton rkType='xlarge outline' style={UtilStyles.spaceTop}>Extra Large</RkButton>
          </View>
        </View>

        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>With icons</RkText>
          <View style={UtilStyles.rowContainer}>
            <RkText>But can contain not only text but icons.</RkText>
          </View>
          <View style={UtilStyles.columnContainer}>
            <RkButton style={[{width: 110}, UtilStyles.spaceBottom]}
                      containerStyle={{justifyContent: 'flex-start', paddingLeft: 0}}
                      rkType='rounded danger'>
              <Icon style={{marginRight: 9, fontSize: 29}} name={'times-circle'}/>
              <RkText>Delete</RkText>
            </RkButton>

            <RkButton style={[{width: 100}, UtilStyles.spaceVertical]}
                      containerStyle={{justifyContent: 'flex-start', paddingLeft: 0}}
                      rkType='rounded success'>
              <Icon style={{marginRight: 9, fontSize: 29}} name={'times-circle'}/>
              <RkText>Add</RkText>
            </RkButton>

            <RkButton style={UtilStyles.spaceVertical}
                      containerStyle={{justifyContent: 'flex-start', paddingLeft: 0}}>
              <Icon style={{marginRight: 16, fontSize: 21}} name={'facebook'}/>
              <RkText>Facebook</RkText>
            </RkButton>

            <RkButton style={ UtilStyles.spaceVertical}
                      containerStyle={{justifyContent: 'flex-start', paddingLeft: 0}}
                      rkType='info'>
              <Icon style={{marginRight: 12, fontSize: 22}} name={'twitter'}/>
              <RkText>Twitter</RkText>
            </RkButton>

            <RkButton style={[{backgroundColor: '#292f34',}, UtilStyles.spaceTop]}
                      containerStyle={{justifyContent: 'flex-start', paddingLeft: 0}}>
              <Icon style={{marginRight: 12, fontSize: 25}} name={'github'}/>
              <RkText>Github</RkText>
            </RkButton>
          </View>
        </View>
        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Icons only</RkText>
          <View style={UtilStyles.rowContainer}>
            <RkText>Or just add only icon inside rkButton element
            </RkText>
          </View>
          <View style={UtilStyles.rowContainer}>
            <RkButton style={[styles.iconButton, {marginLeft: 0}]}>
              <Icon style={{fontSize: 24,}} name={'share-alt'}/>
            </RkButton>
            <RkButton style={styles.iconButton}>
              <Icon style={{fontSize: 24}} name={'envelope'}/>
            </RkButton>
            <RkButton rkType='success' style={styles.iconButton}>
              <Icon style={{fontSize: 26, fontFamily: 'FontAwesome'}} name={'plus'}/>
            </RkButton>
            <RkButton rkType='success circle' style={styles.circleIconButton}>
              <Icon style={{fontSize: 26}} name={'plus'}/>
            </RkButton>
          </View>
          <View style={UtilStyles.rowContainer}>
            <RkButton rkType='outline' style={[styles.iconButton, {marginLeft: 0}]}>
              <Icon style={{fontSize: 24}} name={'share-alt'}/>
            </RkButton>
            <RkButton rkType='outline' style={styles.iconButton}>
              <Icon style={{fontSize: 24}} name={'envelope'}/>
            </RkButton>
            <RkButton rkType='outline-success ' style={styles.iconButton}>
              <Icon style={{fontSize: 26}} name={'plus'}/>
            </RkButton>
            <RkButton rkType='outline-success circle' style={[styles.circleIconButton]}>
              <Icon style={{fontSize: 26}} name={'plus'}/>
            </RkButton>
          </View>
        </View>
        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Events</RkText>
          <View style={UtilStyles.rowContainer}>
            <RkButton onPress={this._onPress} onLongPress={this._onLongPress} rkType='warning'>Push me!</RkButton>
            <View style={{paddingLeft: 24}}>
              <RkText >Supported event props</RkText>
              <View style={{paddingTop: 8}}>
                <RkText style={styles.textSpace} rkType='danger'>onPress</RkText>
                <RkText style={styles.textSpace} rkType='danger'>onLongPress</RkText>
                <RkText style={styles.textSpace} rkType='danger'>onPressIn</RkText>
                <RkText style={styles.textSpace} rkType='danger'>onPressOut</RkText>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  iconButton: {
    width: 50,
    marginHorizontal: 8,
    paddingHorizontal: 0
  },
  circleIconButton: {
    width: 44,
    paddingHorizontal: 0,
    marginHorizontal: 9
  },
  textSpace: {
    marginVertical: 3
  }
});