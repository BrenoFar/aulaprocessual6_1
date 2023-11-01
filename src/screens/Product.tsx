import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Separator from '../components/Separator';

interface ProductProps {
  navigation: any; // Replace 'any' with the correct navigation type if available
}

const Product: React.FC<ProductProps> = ({ navigation }) => {
  const [state, setState] = React.useState({
    productName: '',
    productPrice: '',
    productQty: '',
  });

  const handleChangeText = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  async function handleSave() {
    if (!state.productName || !state.productPrice || !state.productQty) {
      Alert.alert(
        'Erro ao tentar cadastrar produto:',
        'Preencha todos os campos corretamente!'
      );
    } else {
      const listItem = {
        id: new Date().getTime(),
        name: state.productName,
        price: parseFloat(state.productPrice),
        qty: parseInt(state.productQty),
      };

      let savedProducts: any[] = [];
      const response = await AsyncStorage.getItem('products');

      if (response) {
        savedProducts = JSON.parse(response);
      }

      savedProducts.push(listItem);

      Alert.alert('Dados do Produto:', 'Produto salvo com sucesso!');

      await AsyncStorage.setItem('products', JSON.stringify(savedProducts));
      setState({ productName: '', productPrice: '', productQty: '' });

      Alert.alert('Dados do Produto:', 'Produto salvo com sucesso!');
      navigation.navigate('ProductList');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dados do Produto</Text>
      <TextInput
        style={styles.input}
        value={state.productName}
        onChangeText={(value) => handleChangeText('productName', value)}
        placeholder={'Nome'}
        clearButtonMode="always" // Botão para limpar no iOS
      />
      <TextInput
        style={styles.input}
        value={state.productPrice}
        placeholder={'Preço'}
        onChangeText={(value) => handleChangeText('productPrice', value)}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <TextInput
        style={styles.input}
        value={state.productQty}
        placeholder={'Qtde estoque'}
        onChangeText={(value) => handleChangeText('productQty', value)}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <Separator marginVertical={30} />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
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
  saveButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#E37D00',
    padding: 5,
    borderRadius: 5,
  },
  saveButtonText: {
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

export default Product;
