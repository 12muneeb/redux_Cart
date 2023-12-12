import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {appImages} from '../../../assets';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const Product = [
  {
    id: 0,
    name: 'samsung',
    price: '$3000',
    image: appImages.mobile1,
  },
  {
    id: 1,
    name: 'apple iphone',
    price: '$2000',
    image: appImages.mobile2,
  },
  {
    id: 2,
    name: 'nokia',
    price: '$4000',
    image: appImages.mobile3,
  },
  {
    id: 3,
    name: 'moto',
    price: '$7000',
    image: appImages.mobile4,
  },
  {
    id: 4,
    name: 'realMe',
    price: '$4500',
    image: appImages.mobile4,
  },
  {
    id: 5,
    name: 'netflix',
    price: '$6000',
    image: appImages.mobile1,
  },
];

const Login = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={Product}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 50}}
        renderItem={({item}) => {
          return <Footer item={item} />;
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
