import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { getOrders } from '../../services/orderService';

class Orders extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    const { data } = await getOrders();
    const orders = Object.keys(data).map(order => ({ ...data[order], id: order }));
    console.log(orders);
    this.setState({ orders });
  }

  render() {
    const { orders } = this.state;
    return (
      <div>
        {orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.totalPrice} />
        ))}
      </div>
    );
  }
}

export default Orders;
