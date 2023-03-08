import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function DateButton({
  onpress,
  text,
  backgroundColor,
  color,
}: any) {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: 85,
          //   height: 30,
          borderColor: '#999999',
          borderRadius: 5,
          marginHorizontal: 6,
          backgroundColor: backgroundColor,
        }}
        onPress={onpress}>
        <Text
          style={{
            alignSelf: 'center',
            paddingVertical: 15,
            color: color,
            fontWeight: '400',
            lineHeight: 15,
            fontSize: 10,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
