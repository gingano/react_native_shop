import { Text, View, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

function BasketItem({id, name, label, count, price, increase, decrease, deleteFromBasket}) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImg}
        source={require('../img/card-img.jpg')}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.label}>{label}</Text>
      <Button color='#4adcae' onPress={() => increase(id)} title="increase quantity"/>
      <Text style={styles.count}>Quantity: {count}</Text>
      <Button disabled={count === 1} color='#4adcae' onPress={() => decrease(id)} title="decrease quantity"/>
      <Text style={styles.price}>${price*count}</Text>
      <Button color='#c40600' title="Delete from basket" onPress={() => {
        alert(name + " has been removed from basket")
        deleteFromBasket(id)}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding: 10,

  },
  cardImg: {
    width: 100,
    height: 100
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10
  },
  count: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10
  },
  price: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  }
});

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
  increase: (id) => dispatch({type: 'increase', id: id}),
  decrease: (id) => dispatch({type: 'decrease', id: id}),
  deleteFromBasket: (id) => dispatch({type: 'deleteFromBasket', id: id}),
});

export default connect(mapState, mapDispatch)(BasketItem)