import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
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

const Stack = createNativeStackNavigator();

const App = () => {
  //LogBox.ignoreLogs(['RCTBridge required dispatch_sync']);

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
