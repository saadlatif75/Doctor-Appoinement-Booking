import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ProfileCard from '../../Components/ProfileCard';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import DateButton from '../../Components/DateButton';
import Button from '../../Components/Button';
export default function DateAndTimeScreen({navigation}: any) {
  const [SelectedDate, setSelectedDate] = useState();
  const [isselected, setisselected] = useState(true);
  const slot = [
    {
      id: 1,
      aviableSlot: '13 slots available',
    },
    {
      id: 2,
      aviableSlot: '3 slots available',
    },
    {
      id: 3,
      aviableSlot: '10 slots available',
    },
  ];
  // Get the current date and the next 6 days
  const today = new Date();
  const next6Days = [...Array(6)].map((_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i + 1);
    return date;
  });

  // Format the dates as "Today" or "Sat, 25 Jun"
  const formattedDates = [today, ...next6Days].map(date => {
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else {
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      });
    }
  });

  return (
    <ScrollView style={styles.container}>
      <ProfileCard />
      <View style={styles.body}>
        <View
          // showsHorizontalScrollIndicator={false}
          // horizontal
          style={styles.dateContainer}>
          <FlatList
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={formattedDates}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Text key={index} style={styles.dateText}>
                    {item}
                  </Text>
                </View>
              );
            }}
          />
          <FlatList
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={slot}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Text key={index} style={styles.dateTextslot}>
                    {item.aviableSlot}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={styles.morningText}>Morning </Text>
        <View style={styles.timeContainer}>
          <DateButton color={'white'} text="10:00 AM" />
          <DateButton color={'white'} text="10:15 AM" />
          <DateButton color={'white'} text="10:30 AM" />
          <DateButton color={'white'} text="10:45 AM" />
        </View>
        <Text style={styles.afternoonTExt}>Afternoon </Text>
        <View style={styles.timeContainer}>
          <DateButton color={'white'} text="10:00 AM" />
          <DateButton color={'white'} text="10:15 AM" />
          <DateButton color={'white'} text="10:30 AM" />

          <DateButton
            backgroundColor={isselected ? 'white' : null}
            color={isselected ? 'black' : 'white'}
            text="10:45 AM"
          />
          <View
            style={{
              height: 2,
              width: 56,
              backgroundColor: 'black',

              position: 'absolute',
              right: 20,
              bottom: 23,
            }}></View>
        </View>
        <Text style={styles.afternoonTExt}>Evening </Text>
        <View>
          <View style={styles.timeContainer}>
            <DateButton color={'white'} text="10:00 AM" />
            <DateButton color={'white'} text="10:15 AM" />
            <DateButton color={'white'} text="10:30 AM" />
            <DateButton color={'white'} text="10:45 AM" />
          </View>
          <View style={styles.timeContainer}>
            <DateButton color={'white'} text="10:00 AM" />
            <DateButton color={'white'} text="10:15 AM" />
            <DateButton color={'white'} text="10:30 AM" />
            <DateButton color={'white'} text="10:45 AM" />
          </View>
        </View>
        <Button
          onbuttonpress={() => navigation.navigate('RatingAndReviewScreen')}
          text="Book"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: 'black',
  },
  dateContainer: {
    backgroundColor: 'white',
    // height: 65,
  },
  dateText: {
    marginHorizontal: 15,
    marginVertical: 15,
    fontWeight: '700',
    color: 'black',
    fontSize: 14,
    lineHeight: 17,
  },
  dateTextslot: {
    fontWeight: '400',
    color: '##999999',
    fontSize: 5,
    lineHeight: 6,
    justifyContent: 'center',
    marginHorizontal: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 7,
  },
  morningText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  afternoonTExt: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
