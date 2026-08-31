import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Activity'
>;

const Login = () => {

  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // Check empty fields
    if (email === '' || password === '') {

      Alert.alert(
        'Error',
        'Please enter email and password'
      );

      return;
    }

    // Validate login
    if (
      email === 'anuja@gmail.com' &&
      password === '123456'
    ) {

      Alert.alert(
        'Success',
        'Login Successful',
        [
          {
            text: 'OK',
            onPress: () => {

              navigation.navigate('Activity', {
                component: 'Registration',
                title: 'Registration',
              });

            },
          },
        ]
      );

    } else {

      Alert.alert(
        'Error',
        'Invalid email or password'
      );

    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Login Page
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <View style={styles.button}>

        <Button
          title="Login"
          onPress={handleLogin}
        />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    marginTop: 10,
  },

});

export default Login;