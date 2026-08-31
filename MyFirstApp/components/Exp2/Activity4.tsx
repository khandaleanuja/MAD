import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Activity4() {
  const [largeText, setLargeText] = useState(false);
  const [redText, setRedText] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);

  return (
    <View
      style={[
        styles.container,
        darkBackground && styles.darkBackground,
      ]}
    >

  
      <Text
        style={[
          styles.text,
          largeText && styles.largeText,
          redText && styles.redText,
        ]}
      >
        Welcome to React Native
      </Text>

      {/* Change Text Size */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setLargeText(!largeText)}
      >
        <Text style={styles.buttonText}>
          Change Text Size
        </Text>
      </TouchableOpacity>

      {/* Change Text Color */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setRedText(!redText)}
      >
        <Text style={styles.buttonText}>
          Change Text Color
        </Text>
      </TouchableOpacity>

      {/* Change Page Background */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setDarkBackground(!darkBackground)}
      >
        <Text style={styles.buttonText}>
          Change Background
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  darkBackground: {
    backgroundColor: '#222222',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
  },

  largeText: {
    fontSize: 40,
  },

  redText: {
    color: 'red',
  },

  button: {
    width: 200,
    padding: 15,
    backgroundColor: '#1A237E',
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default Activity4;