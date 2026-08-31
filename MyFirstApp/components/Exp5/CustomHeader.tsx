import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

const CustomHeader = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    padding: 40,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomHeader;