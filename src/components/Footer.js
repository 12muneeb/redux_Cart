import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../utils/theme';
import {add_to_cart} from '../Redux/Action';

const Footer = ({item}) => {
  const [CardIt, setCardIt] = useState(0);
  const dispatch = useDispatch();
  const GetData = useSelector(state => state.reduce);
  const Addtohandle = item => {
    console.log('dfsf',item)
    dispatch(add_to_cart(item));

  };
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <View style={{alignItems: 'center', marginTop: '5%'}}>
        <Text style={styles.price}>
          Price:-
          <Text style={[styles.price, {fontWeight: 'bold'}]}>{item.price}</Text>
        </Text>
        <TouchableOpacity style={styles.footer} activeOpacity={0.8} onPress={Addtohandle}>
          <Text style={styles.cartbtn}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 8,
  },
  image: {width: '100%', height: 150},
  name: {
    fontSize: 18,
    color: colors.leaf,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    backgroundColor: colors.starorange,
    paddingHorizontal: 25,
    marginTop: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  cartbtn: {fontSize: 12, color: colors.black, fontWeight: 'bold'},
  price: {color: colors.black, fontSize: 13},
});
