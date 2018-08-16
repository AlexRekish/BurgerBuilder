import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/UI/Button/Button';
import { saveOrder } from '../../services/orderService';
import './ContactData.sass';

class ContactData extends Component {
  state = {
    name: 'Alex',
    email: 'test@test.com',
    address: {
      street: 'test street',
      postalCode: '12345'
    }
  };

  orderHandler = async () => {
    const { history, location } = this.props;
    const order = {
      ingredients: location.state.ingredients,
      totalPrice: location.state.totalPrice,
      ...this.state
    };
    try {
      await saveOrder(order);
      toast('Order sent!');
      history.push('/');
    } catch (err) {}
  };

  render() {
    return (
      <div className="contact-data">
        <h4>Enter your contact data</h4>
        <form>
          <input className="contact-data__field" type="text" placeholder="Name" name="name" />
          <input className="contact-data__field" type="email" placeholder="Email" name="name" />
          <input className="contact-data__field" type="text" placeholder="Street" name="name" />
          <input
            className="contact-data__field"
            type="text"
            placeholder="Postal code"
            name="name"
          />
          <Button type="success" clicked={this.orderHandler}>
            Order now!
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
