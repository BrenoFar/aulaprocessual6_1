import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

interface LoginProps {
  navigation: any; // Replace 'any' with the correct navigation type if available
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [state, setState] = React.useState({
    userEmail: '',
    userPassword: '',
  });

  async function handleLogin() {
    // Validation logic
    if (!state.userEmail || !state.userPassword) {
      Alert.alert('Login Error', 'Please fill in all fields');
      return;
    }

    // Check if the user exists in SecureStore
    const userData = await SecureStore.getItemAsync('userTestData');

    if (userData) {
      const testUser = JSON.parse(userData);

      if (state.userEmail === testUser.userEmail && state.userPassword === testUser.userPassword) {
        // Login successful
        Alert.alert('Login Successful', 'You are now logged in as the test user');
        // You can navigate to the main app screen or perform other actions here
      } else {
        Alert.alert('Login Error', 'Invalid email or password');
      }
    } else {
      Alert.alert('Login Error', 'User not found. Please register first.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <TextInput
        style={styles.input}
        value={state.userEmail}
        onChangeText={(value) => setState({ ...state, userEmail: value })}
        placeholder={'Email'}
      />
      <TextInput
        style={styles.input}
        value={state.userPassword}
        onChangeText={(value) => setState({ ...state, userPassword: value })}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC300',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#730000',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#E37D00',
    padding: 5,
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#730000',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#730000',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Login;
