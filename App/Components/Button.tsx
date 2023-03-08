import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({text, onbuttonpress}: any) {
  return (
    <View>
      <TouchableOpacity onPress={onbuttonpress} style={styles.button}>
        <Text style={styles.buttonTextStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#252525',
    borderRadius: 5,
    padding: 15,
    marginVertical: 14,
    marginHorizontal: 10,
    marginBottom: 25,
  },
  buttonTextStyle: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    color: 'white',
    textAlign: 'center',
  },
});
