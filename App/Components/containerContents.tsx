import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContainerContents() {
  const data = [
    {
      id: 1,
      title: 'AIP',
      Provider: 'UOL',
      dateCompleted: '08 March, 2020',
    },
    {
      id: 2,
      title: 'DIC',
      Provider: 'Udemey',
      dateCompleted: '08 March, 2020',
    },
  ];
  return (
    <View>
      <View style={{marginHorizontal: 10, marginBottom: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={styles.headerText}>Title</Text>
          <Text style={styles.headerText}>Provider</Text>
          <Text style={styles.headerText}>Date Completed</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={styles.subHeading}>{item.title}</Text>
                <Text style={[styles.subHeading, {marginLeft: -10}]}>
                  {item.Provider}
                </Text>
                <Text style={[styles.subHeading, {marginHorizontal: 18}]}>
                  {item.dateCompleted}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  subHeading: {
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 7,
    textAlign: 'center',
    fontSize: 8,
    lineHeight: 10,
    fontWeight: '400',
  },
});
