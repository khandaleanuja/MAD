import React, {useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';

import CustomButton from '../Exp6/CustomButton';
import CustomHeader from '../Exp6/CustomHeader';
import CustomCard from '../Exp6/CustomCard';
import CustomInput from '../Exp6/CustomInput';

const SettingScreen = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');

  const saveSettings = () => {
    Alert.alert('Success', 'Settings Saved');
  };

  return (
    <View style={styles.container}>
      
      {/* Hard-coded title */}
      <CustomHeader title="My Settings" />


    <View style={styles.cardContainer}>
      <CustomCard>
        <Text style={styles.cardTitle}>Setting Information</Text>
        <CustomInput
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />

        <CustomInput
          placeholder="Enter Language"
          value={language}
          onChangeText={setLanguage}
        />

        <CustomButton
          title="Save"
          onPress={saveSettings}
        />
      </CustomCard>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

   cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },

  cardContainer: {
    padding: 20,
    marginTop: 20,
  },
});

export default SettingScreen;