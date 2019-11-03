import { Text, View, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

function Product({id, name, label, price, addToBasket}) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImg}
        source={require('../img/card-img.jpg')}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <Button color='#4adcae' title='Add to basket' onPress={() => {
        alert(name + " was added to the basket")
        addToBasket(id)}}/>
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
  price: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  }
});

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
  addToBasket: (id) => dispatch({type: 'addToBasket', id: id}),
});

export default connect(mapState, mapDispatch)(Product)