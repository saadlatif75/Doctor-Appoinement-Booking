import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

export default function UserReviewCard() {
  const data = [
    {
      id: 1,
      image: require('../Assests/profile_image.png'),
      text: 'xyz',
      date: '17 May, 2021',
      description:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 1,
      image: require('../Assests/profile_image.png'),
      text: 'xyz',
      date: '17 May, 2021',
      description:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  marginHorizontal: 10,
                }}>
                <Image style={{marginRight: 10}} source={item.image} />
                <Text style={{fontSize: 12, fontWeight: '700', color: 'white'}}>
                  {item.text}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: 'white',
                    position: 'absolute',
                    right: 10,
                  }}>
                  {item.date}
                </Text>
              </View>
              <Text style={styles.descriptionText}>{item.description}</Text>
              <View
                style={{
                  height: 3,
                  backgroundColor: 'white',
                  marginVertical: 15,
                  width: '95%',
                  alignSelf: 'center',
                }}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    fontWeight: '400',
    lineHeight: 14,
    fontSize: 10,
    color: 'white',
    marginHorizontal: 10,
  },
});
