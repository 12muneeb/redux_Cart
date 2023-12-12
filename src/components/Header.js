import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { appImages } from '../assets';
import { colors } from '../utils/theme';
const Header = () => {
  const navigation = useNavigation();
  const [CardItems, setCardItems] = useState(0);
  const CartData = useSelector(state => state.reducer);
  useEffect(() => {
    setCardItems(CartData.length);
  }, [CartData]);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('UserList')}>
          <Image
            source={appImages.history}
            resizeMode="contain"
            style={styles.history}
          />
        </TouchableOpacity>
        <Text style={styles.qty}>{CardItems}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: 50,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    right: 25,
    paddingVertical: 10,
  },
  history: {width: 30, height: 30},
  qty: {color: colors.white, fontSize: 25},
});
