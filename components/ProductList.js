import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Product from './Product'
import { connect } from 'react-redux';

function ProductList({products}) {
  return (
    <View style={styles.list}>
      <FlatList
        data={
          products.map(product => ({
          key: String(product.id),
          id: product.id,
          name: product.name,
          label: product.label,
          price: product.price
          }))
        }
        renderItem={({item}) =>
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            label={item.label}
            price={item.price}
          />
        }
      />
  </View>
  );
}

const styles = StyleSheet.create({
  list: {

  },
});

const mapState = (state) => ({
  products: state.products
});


export default connect(mapState)(ProductList)