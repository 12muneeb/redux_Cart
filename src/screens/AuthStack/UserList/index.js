import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '../../../utils/theme';
const {width, height} = Dimensions.get('screen');
const UserList = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.black}}>UserAList</Text>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {marginTop: getStatusBarHeight()},
});
