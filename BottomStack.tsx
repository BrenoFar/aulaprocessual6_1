import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Novo Produto
import { MaterialIcons } from '@expo/vector-icons'; //Listar Produtos
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import ProductList from './src/screens/ProductList';

const Tab = createMaterialBottomTabNavigator();

interface BottomStackProps {
  navigation: any; // Adjust the type of navigation as needed
  route: any; // Adjust the type of route as needed
}

export default function BottomStack({ navigation, route }: BottomStackProps) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFFFFF"
      inactiveColor="#FFC300"
      barStyle={{ backgroundColor: '#E37D00' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarLabel: 'Listar',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
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
