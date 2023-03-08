import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Card = ({lefttext, righttext}: any) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 34,
        width: '95%',
        alignSelf: 'center',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
            lineHeight: 12,
            fontWeight: '700',
            fontSize: 10,
            color: 'black',
          }}>
          {lefttext}
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
            lineHeight: 12,
            fontWeight: '700',
            fontSize: 10,
            color: 'black',
            textAlign: 'right',
          }}>
          {righttext}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
