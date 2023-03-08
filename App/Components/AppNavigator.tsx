import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from '../Screens/AboutScreen/index';
import DateAndTimeScreen from '../Screens/DateAndTimeScreen/index';
import RatingAndReviewScreen from '../Screens/RatingAndReviewScreen/index';

export default function AppNavigator({navigation}: any) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AboutScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#252525',
          },
        }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 12,
              lineHeight: 14,
            },
            title: 'Booking',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  style={styles.leftArrowIcon}
                  source={require('../Assests/arrow_left.png')}
                />
              </TouchableOpacity>
            ),
            headerTintColor: 'white',
            headerRight: () => (
              <View style={{flexDirection: 'row', alignContent: 'center'}}>
                <Image
                  style={styles.location_Icon}
                  source={require('../Assests/location_icon.png')}
                />
                <Text style={styles.location_Text}>Lahore</Text>
              </View>
            ),
          }}
          name="AboutScreen"
          component={AboutScreen}
        />
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 12,
              lineHeight: 14,
            },
            title: 'Booking',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AboutScreen')}>
                <Image
                  style={styles.leftArrowIcon}
                  source={require('../Assests/arrow_left.png')}
                />
              </TouchableOpacity>
            ),
            headerTintColor: 'white',
            headerRight: () => (
              <View style={{flexDirection: 'row', alignContent: 'center'}}>
                <Image
                  style={styles.location_Icon}
                  source={require('../Assests/location_icon.png')}
                />
                <Text style={styles.location_Text}>Lahore</Text>
              </View>
            ),
          }}
          name="DateAndTimeScreen"
          component={DateAndTimeScreen}
        />
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 12,
              lineHeight: 14,
            },
            title: 'Booking',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DateAndTimeScreen')}>
                <Image
                  style={styles.leftArrowIcon}
                  source={require('../Assests/arrow_left.png')}
                />
              </TouchableOpacity>
            ),
            headerTintColor: 'white',
            headerRight: () => (
              <View style={{flexDirection: 'row', alignContent: 'center'}}>
                <Image
                  style={styles.location_Icon}
                  source={require('../Assests/location_icon.png')}
                />
                <Text style={styles.location_Text}>Lahore</Text>
              </View>
            ),
          }}
          name="RatingAndReviewScreen"
          component={RatingAndReviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  leftArrowIcon: {
    width: 29,
    height: 16,
  },
  location_Icon: {
    width: 9,
    height: 13,
    marginRight: 10,
  },
  location_Text: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '700',
    lineHeight: 14,
    fontSize: 12,
  },
});
