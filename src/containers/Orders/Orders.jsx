import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Order from '../../components/Order/Order';
import { getOrders } from '../../services/orderService';

class Orders extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    const { data } = await getOrders();
    const orders = Object.keys(data).map(order => ({ ...data[order], id: order }));
    this.setState({ orders });
  }

  render() {
    const { orders } = this.state;
    return orders ? (
      <div>
        {orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.totalPrice} />
        ))}
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Orders;
