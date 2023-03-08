import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Card} from '../../Components/card';
import ContainerContents from '../../Components/containerContents';
import UserReviewCard from '../../Components/userReviewCard';
import ProfileCard from '../../Components/ProfileCard';
import Button from '../../Components/Button';
export default function AboutScreen({navigation}: any) {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard />
      <View style={styles.body}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.ratingContainer}>
            <TouchableOpacity>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../Assests/star_icon.png')}
              />
              <Text style={styles.ratingText}>Rating</Text>
              <Text style={styles.ratingTextvalue}>5.0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.courseContainer}>
            <TouchableOpacity>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../Assests/star_icon.png')}
              />
              <Text style={styles.courseText}>Course</Text>
              <Text style={styles.courseTextvalue}>500 Rs</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.experienceContainer}>
            <TouchableOpacity>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../Assests/star_icon.png')}
              />
              <Text style={styles.experienceText}>Experience</Text>
              <Text style={styles.experienceTextvalue}>2 years</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Card lefttext="About" />
        <Text style={styles.dummyText}>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum is simply dummy text of the printing and
          type setting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of
          the printing and type setting industry. see more
        </Text>
        <Card lefttext="Specializations" />
        <ContainerContents />
        <Card lefttext="Special Instruction" />
        <Text style={styles.dummyText}>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum is simply dummy text of the printing and
          type setting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of
          the printing and type setting industry. see more
        </Text>
        <Card lefttext="User’s Reviews" righttext="Share Your Review" />
        <UserReviewCard />
        <TouchableOpacity>
          <Text style={styles.seeMoreReviewText}>See More Reviews</Text>
        </TouchableOpacity>
        <Button
          text="Book"
          onPress={() => navigation.navigate('DateAndTimeScreen')}
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
  ratingContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
    color: 'white',
    marginVertical: 7,
    textAlign: 'center',
  },
  ratingTextvalue: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
    color: 'white',
    textAlign: 'center',
  },
  courseContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    position: 'absolute',
    right: '43%',
  },
  courseText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
    color: 'white',
    marginVertical: 7,
    textAlign: 'center',
  },
  courseTextvalue: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
    color: 'white',
    textAlign: 'center',
  },
  experienceContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    position: 'absolute',
    right: 0,
  },
  experienceText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
    color: 'white',
    marginVertical: 7,
    textAlign: 'center',
  },
  experienceTextvalue: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
    color: 'white',
    textAlign: 'center',
  },
  aboutContainer: {
    backgroundColor: 'white',
    height: 20,
    marginHorizontal: 10,
    paddingVertical: 30,
  },
  dummyText: {
    marginVertical: 10,
    marginHorizontal: 13,
    textAlign: 'justify',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 15,
    color: 'white',
  },
  seeMoreReviewText: {
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 13,
    color: 'white',
    marginHorizontal: 10,
  },
});
