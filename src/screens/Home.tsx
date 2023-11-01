import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HomeProps {
  navigation: any; //
  route: any; // 
}

declare const global: {
  nameLogin: string; //
};

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
  const handleProductsDelete = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert(
        'Cadastro de Produtos:',
        'Todos os produtos foram excluídos com sucesso!'
      );
    } catch (error) {
      const castedError = error as Error;
      Alert.alert(
        'Erro na exclusão de produtos:',
        castedError.message
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Text>Olá {global.nameLogin}, seja bem-vindo!</Text>
      <TouchableOpacity style={styles.saveButton} onPress={handleProductsDelete}>
        <Text>Deletar Todos os Produtos</Text>
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
  saveButton: {
    backgroundColor: '#E37D00',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default Home;
