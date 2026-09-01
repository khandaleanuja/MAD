import React, {useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';


import CustomButton from '../Exp6/CustomButton';
import CustomHeader from '../Exp6/CustomHeader';
import CustomCard from '../Exp6/CustomCard';
import CustomInput from '../Exp6/CustomInput';


const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const saveProfile = () => {
    Alert.alert('Success', 'Profile Saved');
  };

  return (
    <View style={styles.container}>
      
      {/* Hard-coded title */}
      <CustomHeader title="My Profile" />


    <View style={styles.cardContainer}>
      <CustomCard>
        <Text style={styles.cardTitle}>Profile</Text>
        <CustomInput
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />

        <CustomInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          placeholder="Enter Phone"
          value={phone}
          onChangeText={setPhone}
        />

        <CustomButton
          title="Save"
          onPress={saveProfile}
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

export default ProfileScreen;