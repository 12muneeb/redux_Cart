import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_to_cart } from '../Redux/Action';
import { family, size } from '../utils/sizes';
import { colors } from '../utils/theme';

const Footer = props => {
  const item = props.item;
  const GetData = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const Addtohandle = item => {
    dispatch(add_to_cart(item));
  };
  const Removetohandle = item => {
    console.log(item.name,'sdsdsd')
    dispatch(remove_to_cart(item.name));
  };
  useEffect(() => {
    let result = GetData.filter(element => {
      return element.name === item.name
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [GetData]);
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name.toUpperCase()}</Text>
      <View style={styles.pricecontainer}>
        <Text style={styles.price}>
          Price:-
          <Text style={[styles.price, {fontWeight: 'bold'}]}>{item.price}</Text>
        </Text>
        {isAdded ? (
          <TouchableOpacity
            style={styles.footer}
            activeOpacity={0.8}
            onPress={() => Removetohandle(item)}>
            <Text style={styles.cartbtn}>REMOVE TO CART</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.footer}
            activeOpacity={0.8}
            onPress={() => Addtohandle(item)}>
            <Text style={styles.cartbtn}>ADD TO CART</Text>
          </TouchableOpacity>
        )}
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
  image: {width: '100%', height: 150, borderRadius: 10},
  name: {
    fontSize: size.h5,
    color: colors.leaf,
    marginTop: 10,
    fontFamily: family.SP_Bold,
  },
  footer: {
    backgroundColor: colors.black,
    paddingHorizontal: 25,
    marginTop: 8,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cartbtn: {
    fontSize: size.medium,
    color: colors.white,
    fontFamily: family.SP_Bold,
  },
  price: {
    color: colors.black,
    fontFamily: family.SP_Bold,
    fontSize: size.large,
  },
  pricecontainer: {alignItems: 'center', marginTop: '5%'},
});
