import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground, Text, View, Image, Animated} from 'react-native';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SelectLvlScreen from './screens/SelectLvlScreen';
import RulesScreen from './screens/Rulse';

import LvlGermany from './screens/LvlGermany';
import LvlFrance from './screens/LvlFrance';
import LvlAustria from './screens/LvlAustria';
import LvlAustralia from './screens/LvlAustralia';
import LvlCanada from './screens/LvlCanada';
import LvlItaly from './screens/LvlItaly';
import LvlUsa from './screens/LvlUsa';
import LvlIndia from './screens/LvlIndia';
import LvlSpain from './screens/LvlSpain';
import LvlMaxica from './screens/LvlMexica';
import ProductScreen from './screens/ProductScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  //LogBox.ignoreLogs(['RCTBridge required dispatch_sync']);
  const [route, setRoute] = useState();

  ////////////////////LOADER
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);

  const ChangeInView = props => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const appearingAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
    }, []);

    useEffect(() => {
      Animated.timing(appearingAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setLoaderIsLoaded(true);
      }, 8000);
    }, []);

    return (
      <View style={{position: 'relative', flex: 1}}>
        <Animated.Image
          source={require('./assets/bgrHomeP.jpg')}
          style={{
            ...props.style,
            opacity: fadeAnim,
            height: '100%',
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            transform: [
              {translateX: -100}, // Adjust these values based on your text size
              {translateY: -25},
            ],
            opacity: appearingAnim,
          }}>
          <Animated.View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 60,
              marginLeft: 40,
            }}>
            <Animated.Text
              style={{color: '#f5c65d', fontSize: 60, fontWeight: 'bold'}}>
              I`TS A
            </Animated.Text>
            <Animated.Text
              style={{color: '#f5c65d', fontSize: 60, fontWeight: 'bold'}}>
              GAME
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </View>
    );
  };
  /////////////////////////////////////

  useEffect(() => {
    const checkUrl = `https://reactnative.dev/docs/animated`;
    const targetData = new Date('2024-02-16T12:00:00'); //дата з якої поч працювати webView
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);

  const Route = ({isFatch}) => {
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{}}
          />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectLvl"
          component={SelectLvlScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rules"
          component={RulesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlGermany"
          component={LvlGermany}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlFrance"
          component={LvlFrance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlAustria"
          component={LvlAustria}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlAustralia"
          component={LvlAustralia}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlCanada"
          component={LvlCanada}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlItaly"
          component={LvlItaly}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlUsa"
          component={LvlUsa}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlIndia"
          component={LvlIndia}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlSpain"
          component={LvlSpain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlMaxica"
          component={LvlMaxica}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!loaderIsLoaded ? (
        <ChangeInView
          style={{
            width: '100%',
            //height: 50,
            backgroundColor: 'powderblue',
          }}></ChangeInView>
      ) : (
        <Route isFatch={route} />
      )}
    </NavigationContainer>
  );
};

export default App;
