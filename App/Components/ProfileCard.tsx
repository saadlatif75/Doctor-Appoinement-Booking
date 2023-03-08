import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProfileCard() {
  return (
    <View style={styles.subContainer}>
      <Image source={require('../Assests/doc_Image.png')} />
      <View style={styles.subContainerContent}>
        <Text style={styles.basicText}>Mr. XYZ</Text>
        <Text style={styles.basicText}>Professionals</Text>
        <Text style={styles.basicText}>BCOD, GHTY, ABCF</Text>
        <Text style={styles.basicText}>Lahore</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: '#252525',
    padding: 20,
    flexDirection: 'row',
  },
  subContainerContent: {
    justifyContent: 'center',
  },
  basicText: {
    marginHorizontal: 10,
    lineHeight: 19,
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
});
