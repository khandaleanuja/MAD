import React from 'react';
import {View, StyleSheet} from 'react-native';

const CustomCard = ({children}: any) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
});

export default CustomCard;