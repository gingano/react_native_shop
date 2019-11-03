import { View, StyleSheet, Text } from 'react-native'
import React, {Component} from 'react';
import { IndicatorViewPager, PagerTabIndicator} from 'rn-viewpager';
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.topBar}>
          <Text style={styles.barText}>Shop</Text>
        </View>
        {}
        <View style={styles.container}>
          <IndicatorViewPager
            indicator={this._renderTabIndicator()}
          >
            <ProductList/>
            <Basket/>
          </IndicatorViewPager>
        </View>
      </Provider>
    );
  }

  _renderTabIndicator () {
    let tabs = [
      {
        text: 'Shop',
        iconSource: require('./img/shop.png'),
        selectedIconSource: require('./img/shop.png')
      },
      {
        text: 'Basket',
        iconSource: require('./img/shopping-basket.png'),
        selectedIconSource: require('./img/shopping-basket.png')
      }
    ];
    return <PagerTabIndicator tabs={tabs}/>;
  }
}

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    backgroundColor: '#4adcae',
  },
  barText: {
    color: '#fff',
    fontSize: 20,
    top: 10,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});