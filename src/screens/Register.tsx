import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Separator from '../components/Separator';

interface RegisterProps {
  navigation: any; // Replace 'any' with the correct navigation type if available
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [state, setState] = React.useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    userPassword: '',
  });

  async function handleRegister() {
    // Your registration logic here
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
