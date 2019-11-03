import { FlatList, View, Button } from 'react-native'
import BasketItem from './BasketItem'
import React from 'react'
import { connect } from 'react-redux';

function Basket({basketItems}) {
  return (
    <View>
      <FlatList
        data={
          basketItems.map(item => ({
            key: String(item.id),
            id: item.id,
            name: item.name,
            label: item.label,
            count: item.count,
            price: item.price
          }))
        }
        renderItem={({item}) =>
          <BasketItem
            key={item.id}
            id={item.id}
            name={item.name}
            label={item.label}
            count={item.count}
            price={item.price}
          />
        }
      />
      <Button title='total price'/>
    </View>
  );
}

const mapState = (state) => ({
  basketItems: state.basketItems
});


export default connect(mapState)(Basket)