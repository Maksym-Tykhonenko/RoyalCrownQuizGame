import React, {useState, useRef, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const RulesScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrQuiz.jpeg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SafeAreaView>
            <ScrollView>
              <View style={{marginHorizontal: 15, marginTop: 20}}>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Starting the game:</Text>{' '}
                  When installing the app, the player has access to only the
                  first level, which corresponds to the country of Germany.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Start Level:</Text> The
                  player clicks on a button to start the level. After that, he
                  clicks the "Play" button next to the timer to start the game.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Passing the level:</Text>{' '}
                  The player sees two columns of buttons. On the left - buttons
                  with the names of locations from the country of this level,
                  and on the right - buttons with photos of these locations. The
                  player chooses a location name and then searches for a photo
                  that matches that location. If the choice is correct, the
                  buttons disappear.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Level End:</Text> The game
                  continues until the player finds all pairs of names and photos
                  or the time allotted for that level runs out.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>
                    Moving to the next level:
                  </Text>{' '}
                  After successful completion of the level, there is an
                  opportunity to go to the next level. There are a total of 10
                  levels available, corresponding to 10 different countries.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Time per level:</Text> The
                  player has a limited time to complete each level. If the time
                  runs out and all pairs of names and photos are not found, the
                  game ends.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Goal of the game:</Text>{' '}
                  Find all pairs of names and photos in each level and advance
                  to the next level before the time runs out.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Hints and help:</Text> The
                  game does not have hints or the ability to get additional
                  help. The player should rely only on his knowledge and
                  observation.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Remember the time:</Text>{' '}
                  The player must be careful and efficient in the use of time,
                  as each level has a limited time limit.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}>Enjoy the game:</Text> The
                  main goal of the game is to enjoy the time spent in the world
                  of virtual travel and cultural discovery, guessing pairs of
                  names and photos of interesting places from around the world.
                </Text>
                <Text
                  style={{color: '#f5c65d', marginBottom: 10, fontSize: 18}}>
                  <Text style={{fontWeight: 'bold'}}></Text>{' '}
                </Text>
              </View>
            </ScrollView>
          </SafeAreaView>

          {/**Go Back BTN */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              position: 'absolute',
              bottom: 15,
              right: 15,
              borderWidth: 3,
              borderRadius: 20,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#f5c65d',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
            <Text style={{color: '#f5c65d', fontWeight: '600'}}>Go</Text>
            <Text style={{color: '#f5c65d', fontWeight: '600'}}>back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RulesScreen;
