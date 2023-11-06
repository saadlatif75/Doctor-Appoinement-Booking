import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating-widget';
import {TextInput} from 'react-native-element-textinput';
import Button from '../../Components/Button';

export default function RatingAndReviewScreen({navigation}: any) {
  const star_image = require('../../Assests/star_icon.png');
  const [rating, setRating] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.communicationText}>Communication:dddddd</Text>
        <StarRating
          style={{alignSelf: 'center'}}
          starStyle={{marginHorizontal: 10}}
          starSize={38}
          rating={rating}
          onChange={setRating}
        />
        <Text style={styles.communicationText}>Communication:</Text>
        <StarRating
          style={{alignSelf: 'center'}}
          starStyle={{marginHorizontal: 10}}
          starSize={38}
          rating={rating}
          onChange={setRating}
        />
        <Text style={styles.communicationText}>Communication:</Text>
        <StarRating
          style={{alignSelf: 'center'}}
          starSize={38}
          starStyle={{marginHorizontal: 10}}
          rating={rating}
          onChange={setRating}
        />
        <Text style={styles.communicationText}>Feedback:</Text>
        <TextInput
          multiline={true}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <Button
          onbuttonpress={() => navigation.navigate('AboutScreen')}
          text="Submit"
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
  communicationText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  input: {
    height: 151,
    width: '93%',
    paddingHorizontal: 12,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    backgroundColor: 'white',
  },
  inputStyle: {
    textAlignVertical: 'top',
    marginTop: 15,
    marginHorizontal: 10,
  },
  labelStyle: {
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
});
