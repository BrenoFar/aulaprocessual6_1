import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProductListProps {
  navigation: any; // Adjust the type of navigation as needed
}

export default function ProductList({ navigation }: ProductListProps) {
  return (
    <View style={styles.container}>
      <Text>Tela Lista de Produtos</Text>
      <Text>Olá, você está na lista de produtos!</Text>
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
});
