import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Activity6() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Counter</Text>

      <Text style={styles.count}>
        {count}
      </Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  count: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  button: {
    width: 60,
    height: 60,
    backgroundColor: '#1A237E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});


export default Activity6;