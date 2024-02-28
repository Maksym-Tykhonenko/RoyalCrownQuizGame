import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground, Text, View, Image, Animated} from 'react-native';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogLevel, OneSignal} from 'react-native-onesignal';

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

//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {
  //LogBox.ignoreLogs(['RCTBridge required dispatch_sync']);
  const [route, setRoute] = useState();

  ///////////// Отримання IDFA
  const [idfa, setIdfa] = useState(null);
  console.log('idfa==>', idfa);
  //OneSignal id  e7992b4b-26a0-4f39-8c3f-31355930fe17

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [idfa]);

  const setData = async () => {
    try {
      const data = {
        idfa,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('Дані дістаються в AsyncStorage');
        console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
      } else {
        await fetchIdfa();
        await someFunction();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
      } else {
        setIdfa(true);
      }
    } catch (err) {
      console.log('err', err);
      setIdfa(null);
      fetchIdfa(); //???
    }
  };

  ///////////// OneSignal.Notifications
  // 1cf7b7d3-2749-4473-a641-c148b86bc768

  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const someFunction = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      console.log('err в someFunction==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('1cf7b7d3-2749-4473-a641-c148b86bc768');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  //OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });
  //Add Data Tags
  OneSignal.User.addTag('key', 'value');

  //////////// useEffect що виріш який шлях включати
  useEffect(() => {
    const checkUrl = `https://impressive-crown-delight.space/6MzSqGTp`;
    const targetData = new Date('2024-02-29T12:00:00'); //дата з якої поч працювати prod
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

  //////////// LOADER
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
              IT`S A
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

  ///////////// Route
  const Route = ({isFatch}) => {
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{idfa: idfa}}
            name="ProductScreen"
            component={ProductScreen}
            options={{
              presentation: 'card',
              headerShown: false,
            }}
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
