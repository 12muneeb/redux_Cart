// import React, {useEffect, useState} from 'react';
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {add_to_cart} from '../../../Redux/Action';
// import {colors} from '../../../utils/theme';

// const Login = (props) => {
//   const [CartIt, setCartIt] = useState(0);
//   const [isAdded, setIsAdded] = useState(false);

//   const dispatch = useDispatch();
//   const GetData = useSelector(state => state.reducer);
//   const CartItems = useSelector(state => state.reducer);
//   const Addtohandle = item => {
//     dispatch(add_to_cart(item));
//   };
//   useEffect(() => {
//     setCartIt(GetData.length);
//   }, [GetData]);
//     useEffect(() => {
//       if (CartItems && CartItems.length) {
//         CartItems.forEach((element) => {
//          if(element.name === iten.name){
//   setIsAdded(true)
//          }
//         });
//       }
//     }, [CartItems]);
//   return (
//     <View style={{flex: 1}}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {Product.map(item => (
//           <View key={item.id}>
//             <View style={styles.subcontainer}>
//               <Image source={{uri: item.image}} style={styles.img} />
//               <View style={styles.content}>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.price}>Price:-{item.price}</Text>
//                 <Text style={styles.price}>{item.color}</Text>
//               </View>
//               {isAdded ? (
//                 <TouchableOpacity
//                   title="Remove to Cart"
//                   onPress={() => Addtohandle(item)}
//                   style={styles.buttoncontainer}>
//                   <Text style={styles.buttoncontent}>ADD TO CART</Text>
//                 </TouchableOpacity>
//               ) : (
//                 <TouchableOpacity
//                   title="Add to Cart"
//                   onPress={() => Addtohandle(item)}
//                   style={styles.buttoncontainer}>
//                   <Text style={styles.buttoncontent}>ADD TO CART</Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//       <View style={styles.qtycontainer}>
//         <Text style={styles.qty}>TOTAL QTY :- </Text>
//         <Text style={[styles.qty, {fontSize: 25}]}>{CartIt}</Text>
//       </View>
//     </View>
//   );
// };

// export default Login;


import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../../../components/Footer';
import {appImages} from '../../../assets';
import Header from '../../../components/Header';

const Product = [
  {
    id: 0,
    name: 'Samsung',
    price: '$3000',
    image: appImages.mobile1,
  },
  {
    id: 1,
    name: 'Apple Iphone',
    price: '$2000',
    image: appImages.mobile2,
  },
  {
    id: 2,
    name: 'Nokia',
    price: '$4000',
    image: appImages.mobile3,
  },
  {
    id: 3,
    name: 'Moto',
    price: '$7000',
    image: appImages.mobile4,
  },
];

const Login = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={Product}
        numColumns={2}
        renderItem={({item}) => {
          return <Footer item={item} />
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
