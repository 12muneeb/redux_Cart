import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/theme';
import {appIcons, appImages} from '../assets';

const Header = () => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.subcontainer}>
        <Image
          source={appImages.history}
          resizeMode="contain"
          style={styles.history}
        />
        <Text style={styles.qty}>0</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        width: '100%',
        height: 50,
      },
      subcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        right: 25,
        paddingVertical: 10
      },
      history:{width: 30, height: 30},
      qty:{color: colors.white, fontSize: 25}

});
