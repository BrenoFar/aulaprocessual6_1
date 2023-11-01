import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

interface LoginProps {
  navigation: any; // 
}

declare var global: { nameLogin: string };

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const registeredState = {
    email: 'exemplo@email.com', // 
    password: 'suasenha', // 
    name: 'Seu Nome', // 
  };

  function handleLogin() {
    if (email === registeredState.email && password === registeredState.password) {
      setPassword('');
      global.nameLogin = registeredState.name; // Global variable
      navigation.replace('BottomStack');
    } else {
      Alert.alert(
        'Erro ao tentar efetuar o login:',
        'Informe o e-mail e a senha corretos'
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Entrar" onPress={handleLogin} />
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
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
});

export default Login;
