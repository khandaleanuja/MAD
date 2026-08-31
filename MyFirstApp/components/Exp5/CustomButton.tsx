import React from 'react';
import { View, TouchableOpacity , Text, StyleSheet} from 'react-native';

type Props = {
    title : string;
    onPress : () => void;
}

const CustomButton = ({title, onPress} : Props) => {
    return(
        <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default CustomButton;