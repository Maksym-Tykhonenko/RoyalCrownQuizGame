import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectLvlScreen = ({navigation}) => {
  const [lvl2isAnlock, setLvl2isAnlock] = useState(false);
  const [lvl3isAnlock, setLvl3isAnlock] = useState(false);
  const [lvl4isAnlock, setLvl4isAnlock] = useState(false);
  const [lvl5isAnlock, setLvl5isAnlock] = useState(false);
  const [lvl6isAnlock, setLvl6isAnlock] = useState(false);
  const [lvl7isAnlock, setLvl7isAnlock] = useState(false);
  const [lvl8isAnlock, setLvl8isAnlock] = useState(false);
  const [lvl9isAnlock, setLvl9isAnlock] = useState(false);
  const [lvl10isAnlock, setLvl10isAnlock] = useState(false);

  console.log('lvl2isAnlock in SelectLvlScreen==>', lvl2isAnlock);
  console.log('lvl3isAnlock in SelectLvlScreen==>', lvl3isAnlock);
  console.log('lvl4isAnlock in SelectLvlScreen==>', lvl4isAnlock);
  console.log('lvl5isAnlock in SelectLvlScreen==>', lvl5isAnlock);
  console.log('lvl6isAnlock in SelectLvlScreen==>', lvl6isAnlock);
  console.log('lvl7isAnlock in SelectLvlScreen==>', lvl7isAnlock);
  console.log('lvl8isAnlock in SelectLvlScreen==>', lvl8isAnlock);
  console.log('lvl9isAnlock in SelectLvlScreen==>', lvl9isAnlock);
  console.log('lvl10isAnlock in SelectLvlScreen==>', lvl10isAnlock);

  // 2lvl
  useEffect(() => {
    getDataAbout2Lvl();
  }, []);
  const getDataAbout2Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlGermany');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl2isAnlock(parsedData.lvl2isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 3lvl
  useEffect(() => {
    getDataAbout3Lvl();
  }, []);
  const getDataAbout3Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlFrance');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl3isAnlock(parsedData.lvl3isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 4lvl
  useEffect(() => {
    getDataAbout4Lvl();
  }, []);
  const getDataAbout4Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlAustria');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl4isAnlock(parsedData.lvl4isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 5lvl
  useEffect(() => {
    getDataAbout5Lvl();
  }, []);
  const getDataAbout5Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlAustralia');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl5isAnlock(parsedData.lvl5isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 6lvl
  useEffect(() => {
    getDataAbout6Lvl();
  }, []);
  const getDataAbout6Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlCanada');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl6isAnlock(parsedData.lvl6isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 7lvl
  useEffect(() => {
    getDataAbout7Lvl();
  }, []);
  const getDataAbout7Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlItaly');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl7isAnlock(parsedData.lvl7isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 8lvl
  useEffect(() => {
    getDataAbout8Lvl();
  }, []);
  const getDataAbout8Lvl = async () => {
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

  // 9lvl
  useEffect(() => {
    getDataAbout9Lvl();
  }, []);
  const getDataAbout9Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlIndia');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl9isAnlock(parsedData.lvl9isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  // 10lvl
  useEffect(() => {
    getDataAbout10Lvl();
  }, []);
  const getDataAbout10Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('LvlSpain');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl10isAnlock(parsedData.lvl10isAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrQuiz.jpeg')}
        style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LvlGermany');
                }}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  borderColor: '#f5c65d',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/german.jpeg')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{color: '#f5c65d', fontSize: 22, fontWeight: '600'}}>
                  Lvl 1 - Germany
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl2isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlFrance');
                }}
                style={{
                  borderColor: !lvl2isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/france.webp')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl2isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 2 - France
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl3isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlAustria');
                }}
                style={{
                  borderColor: !lvl3isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/austria.webp')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl3isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 3 - Austria
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl4isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlAustralia');
                }}
                style={{
                  borderColor: !lvl4isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/australia.jpeg')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl4isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 4 - Australia
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl5isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlCanada');
                }}
                style={{
                  borderColor: !lvl5isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/canada.webp')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl5isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 5 - Canada
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl6isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlItaly');
                }}
                style={{
                  borderColor: !lvl6isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/italy.jpeg')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl6isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 6 - Italy
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl7isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlUsa');
                }}
                style={{
                  borderColor: !lvl7isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/USA.webp')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl7isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 7 - USA
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl8isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlIndia');
                }}
                style={{
                  borderColor: !lvl8isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/india.jpeg')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl8isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 8 - India
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl9isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlSpain');
                }}
                style={{
                  borderColor: !lvl9isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                <Image
                  source={require('../assets/prapor/spain.jpeg')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl9isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 9 - Spain
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!lvl10isAnlock ? true : false}
                onPress={() => {
                  navigation.navigate('LvlMaxica');
                }}
                style={{
                  borderColor: !lvl10isAnlock ? 'grey' : '#f5c65d',
                  flex: 1,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                }}>
                <Image
                  source={require('../assets/prapor/maxica.jpeg')}
                  style={{
                    width: 300,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: !lvl10isAnlock ? 'grey' : '#f5c65d',
                    fontSize: 22,
                    fontWeight: '600',
                  }}>
                  Lvl 10 - Mexica
                </Text>
              </TouchableOpacity>
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

export default SelectLvlScreen;
