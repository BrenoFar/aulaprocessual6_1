import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Separator from '../components/Separator';

interface RegisterProps {
  navigation: any; // Replace 'any' with the correct navigation type if available
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [state, setState] = React.useState({
    userName: 'Test User',          // Set the test user's name
    userPhone: '123-456-7890',      // Set the test user's phone
    userEmail: 'testuser@example.com', // Set the test user's email
    userPassword: 'password123',    // Set the test user's password
  });

  async function handleRegister() {
    // Simulate user registration and save test user data to SecureStore
    const testUserData = {
      userName: state.userName,
      userPhone: state.userPhone,
      userEmail: state.userEmail,
      userPassword: state.userPassword,
    };

    try {
      // Save test user data to SecureStore
      await SecureStore.setItemAsync('userTestData', JSON.stringify(testUserData));

      // Show a success message and navigate to the login screen
      Alert.alert('Registration Successful', 'You are now registered!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Registration Error', 'An error occurred during registration.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Register</Text>
      <TextInput
        style={styles.input}
        value={state.userName}
        onChangeText={(value) => setState({ ...state, userName: value })}
        placeholder={'Name'}
      />
      <TextInput
        style={styles.input}
        value={state.userPhone}
        onChangeText={(value) => setState({ ...state, userPhone: value })}
        placeholder={'Phone'}
      />
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
      <Separator marginVertical={30} />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  registerButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#E37D00',
    padding: 5,
    borderRadius: 5,
  },
  registerButtonText: {
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

export default Register;
