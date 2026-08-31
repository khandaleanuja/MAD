import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Registration = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.success}>
        Successfully Registered
      </Text>

      <Text style={styles.message}>
        Your registration has been completed successfully.
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  success: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  message: {
    fontSize: 18,
    textAlign: 'center',
  },

});

export default Registration;