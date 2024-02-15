import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {USA} from '../data/USA';

const LvlUsa = ({navigation}) => {
  const [startMassiv, setStartMassiv] = useState(USA);
  const [sights, setSights] = useState(startMassiv);
  //console.log('sights', sights.length);
  const [sightsImg, setSightsImg] = useState(startMassiv);
  //console.log('sightsImg', sightsImg.length)
  const [shuffledSightsImg, setShuffledSightsImg] = useState([]);
  //console.log('length==>', shuffledSightsImg.length)
  const [timer, setTimer] = useState(30);
  const [isRuning, setIsRuning] = useState(true);
  //console.log(timer)
  const [btnbifireStartGameIsVisible, setBtnbifireStartGameIsVisible] =
    useState(true);
  const [lvl8isAnlock, setLvl8isAnlock] = useState(false);
  console.log('lvl8isAnlock==>', lvl8isAnlock);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [lvl8isAnlock]);

  const setData = async () => {
    try {
      const data = {
        lvl8isAnlock,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('LvlUsa', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlUsa');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl8isAnlock(parsedData.lvl8isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  useEffect(() => {
    if (sights.length === 0) {
      setLvl8isAnlock(true);
    }
  }, [sights]);

  ///Timer
  //эфект обратного отщета времени
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRuning) {
        setTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    if (timer === 0) {
      clearInterval(timerInterval);
      Alert.alert(
        'GAME OVER!!!',
        'Go back and try again',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('SelectLvl');
            },
          },
        ],
        {cancelable: false},
      );
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, isRuning]);

  //формат времени
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  //oстановка таймера
  const handleChangeTimerRunState = () => {
    setIsRuning(!isRuning);
  };
  //////////////////////////////////////////

  const [actButnTitle, setActButnTitle] = useState(-1);
  const [actBtnImg, setActBtnImg] = useState(-1);
  //console.log('==>', actButnTitle, actBtnImg)
  const [btnIsVisible, setBtnIsVisible] = useState(false);
  const [quizIsComplited, setQuizIsComplited] = useState(false);
  console.log('quizIsComplited==>', quizIsComplited);

  const goTooAppAfterQuizComplited = () => {
    setBtnIsVisible(false);
    navigation.navigate('LvlIndia');
  };

  useEffect(() => {
    setBtnIsVisible(false);
    if (shuffledSightsImg.length === 0) {
      setBtnIsVisible(true);
      setIsRuning(false);
    }
  }, [shuffledSightsImg]);

  // Функція для перемішування масиву
  const shuffleArray = array => {
    const newArray = [...array]; // Створюємо копію масиву
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Генеруємо випадкове число
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Переставляємо елементи масиву
    }
    return newArray; // Повертаємо перемішаний масив
  };

  // Функція для перемішування масиву Img перед рендерингом
  useEffect(() => {
    setShuffledSightsImg(shuffleArray(sights));
  }, [sights]);

  // Функція для зміни кольору в кнопці з імедж
  const changeColorInImg = id => {
    if (id === actBtnImg && id === actButnTitle) {
      return 'green';
    }
    return '#f5c65d';
  };

  {
    /** */
  }
  // Функція для видалення об'єкта за його id
  const removeSightById = id => {
    const updatedSights = sights.filter(item => item.id !== id);
    //setStartMassiv(updatedSights)
    setSights(updatedSights);
    setShuffledSightsImg(updatedSights);
    setActButnTitle(-1);
    setActBtnImg(-1);
  };

  // Викликати цю функцію всередині useEffect, щоб видалити елемент з масиву після зміни стану
  useEffect(() => {
    if (actButnTitle !== -1 && actButnTitle === actBtnImg) {
      removeSightById(actButnTitle);
    }
  }, [actButnTitle, actBtnImg]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrSelect.jpg')}
        style={{flex: 1}}>
        <SafeAreaView
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/**Timer */}
          <View style={{flexDirection: 'row'}}>
            {isRuning ? (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  color: '#000205',
                  borderWidth: 1,
                  borderColor: '#f5c65d',
                  borderRadius: 20,
                  color: '#f5c65d',
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleChangeTimerRunState}>
                <Text style={{color: '#f5c65d', fontSize: 25}}>Stop</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                disabled={
                  btnIsVisible || btnbifireStartGameIsVisible ? true : false
                }
                style={{
                  marginRight: 10,
                  color: '#000205',
                  borderWidth: 1,
                  borderColor: '#f5c65d',
                  borderRadius: 20,
                  color: '#f5c65d',
                  paddingLeft: 12,
                  paddingRight: 12,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleChangeTimerRunState}>
                <Text style={{color: '#f5c65d', fontSize: 25}}>Play</Text>
              </TouchableOpacity>
            )}

            <Text
              style={{
                fontSize: 40,
                color: '#000205',
                borderWidth: 1,
                borderColor: '#f5c65d',
                borderRadius: 20,
                color: '#f5c65d',
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                height: 60,
              }}>
              {formatTime(timer)}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              position: 'relative',
              marginTop: 5,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {/* Блок кнопок з назвами */}
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  color: '#f5c65d',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Categories{' '}
              </Text>

              <ScrollView>
                {/* Блок кнопок з назвами */}
                {sights.map((item, index) => (
                  <TouchableOpacity
                    disabled={!isRuning ? true : false}
                    onPress={() => {
                      setActButnTitle(item.id);
                    }}
                    style={{
                      marginBottom: 10,
                      width: 150,
                      height: 135,
                      borderWidth: 1,
                      borderRadius: 3,
                      backgroundColor:
                        actButnTitle === item.id ? 'green' : '#f5c65d',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 5,
                      borderColor: actButnTitle === item.id ? 'green' : 'gold',
                    }}
                    key={item.id}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      {item.hotel}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Полоска */}
            <View style={{borderWidth: 1, borderColor: '#f5c65d'}}></View>

            {/* Блок зображень */}
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Text
                style={{
                  marginBottom: 10,
                  color: '#f5c65d',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Photos{' '}
              </Text>

              <ScrollView>
                {/* Блок зображень */}
                {shuffledSightsImg.map(item => (
                  <TouchableOpacity
                    disabled={!isRuning ? true : false}
                    onPress={() => {
                      setActBtnImg(item.id);
                    }} // Обробник події натискання на зображення
                    style={{
                      marginBottom: 10,
                      borderWidth: 8,
                      borderRadius: 3,
                      borderColor: changeColorInImg(item.id),
                    }}
                    key={item.id}>
                    <Image
                      style={{width: 150, height: 119, borderRadius: 3}}
                      source={item.photo}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Кнопка перехода на Next Lvl */}
            {btnIsVisible && (
              <TouchableOpacity
                onPress={() => {
                  goTooAppAfterQuizComplited();
                }}
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  width: 270,
                  height: 120,
                  borderWidth: 2,
                  borderColor: '#f5c65d',
                  borderRadius: 3,
                }}>
                <Text
                  style={{color: '#f5c65d', fontWeight: 'bold', fontSize: 18}}>
                  Congratulations!!!
                </Text>
                <Text
                  style={{color: '#f5c65d', fontWeight: 'bold', fontSize: 18}}>
                  {' '}
                  Go to next Lvl{' '}
                  <Entypo name="arrow-bold-right" style={{fontSize: 20}} />
                </Text>
              </TouchableOpacity>
            )}

            {/* Кнопка start game */}
            {btnbifireStartGameIsVisible && (
              <TouchableOpacity
                onPress={() => {
                  setBtnbifireStartGameIsVisible(false);
                }}
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  width: 270,
                  height: 120,
                  borderWidth: 2,
                  borderColor: '#f5c65d',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: '#f5c65d',
                    fontWeight: 'bold',
                    fontSize: 25,
                    marginBottom: 10,
                  }}>
                  Lvl 7 - USA
                </Text>
                <Text
                  style={{color: '#f5c65d', fontWeight: 'bold', fontSize: 18}}>
                  Press this button
                </Text>
                <Text
                  style={{color: '#f5c65d', fontWeight: 'bold', fontSize: 18}}>
                  then press 'PLAY'
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/**Go Back BTN */}
          <TouchableOpacity
            disabled={
              btnIsVisible || btnbifireStartGameIsVisible ? true : false
            }
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              position: 'absolute',
              bottom: 15,
              right: 15,
              borderWidth: 1,
              borderRadius: 20,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#f5c65d',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
            <Text style={{color: '#f5c65d', fontWeight: '600'}}>Go</Text>
            <Text style={{color: '#f5c65d', fontWeight: '600'}}>home</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LvlUsa;
