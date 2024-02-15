import React, {useState, useRef, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrHomeP.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectLvl');
              }}
              style={{
                borderWidth: 3,
                borderRadius: 20,
                paddingHorizontal: 20,
                marginHorizontal: 7,
                height: 70,
                width: 250,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 25,
                marginTop: -20,
                borderColor: '#f5c65d',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}>
              <Text style={{color: '#f5c65d', fontSize: 23, fontWeight: '600'}}>
                GAME
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Rules');
              }}
              style={{
                borderWidth: 3,
                borderRadius: 20,
                paddingHorizontal: 20,
                marginHorizontal: 7,
                height: 70,
                width: 250,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                borderColor: '#f5c65d',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}>
              <Text style={{color: '#f5c65d', fontSize: 23, fontWeight: '600'}}>
                RULSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
