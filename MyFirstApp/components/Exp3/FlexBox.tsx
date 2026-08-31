import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Flexbox Example</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>

        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>

        <View style={styles.box3}>
          <Text>Box 3</Text>
        </View>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // Flexbox properties
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',

    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  boxContainer: {
    width: '100%',
    flex: 1,

    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around',

    gap: 10,
  },

  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#B0E0E6',

    justifyContent: 'center',
    alignItems: 'center',

    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
  },

  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#87CEEB',

    justifyContent: 'center',
    alignItems: 'center',

    flexGrow: 2,
    flexShrink: 1,
    flexBasis: 100,
  },

  box3: {
    width: 100,
    height: 100,
    backgroundColor: '#00A6D6',

    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
  },

  
});

export default FlexboxExample;