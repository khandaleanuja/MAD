import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

const FruitList = () => {

  const fruits = [
    {id: '1', name: 'Apple'},
    {id: '2', name: 'Banana'},
    {id: '3', name: 'Mango'},
    {id: '4', name: 'Orange'},
    {id: '5', name: 'Grapes'},
    {id: '6', name: 'Watermelon'},
    {id: '7', name: 'Papaya'},
    {id: '8', name: 'Pineapple'},
    {id: '9', name: 'Strawberry'},
    {id: '10', name: 'Guava'},
  ];

  const renderFruit = ({item}: any) => {
    return (
      <View style={styles.fruitBox}>
        <Text style={styles.fruitText}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Fruit List
      </Text>

      <FlatList
        data={fruits}
        renderItem={renderFruit}
        keyExtractor={item => item.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  fruitBox: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },

  fruitText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default FruitList;