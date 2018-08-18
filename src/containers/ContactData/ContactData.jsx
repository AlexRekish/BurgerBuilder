import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import { saveOrder } from '../../services/orderService';
import Form from '../../components/UI/Form/Form';
import './ContactData.sass';

class ContactData extends Form {
  state = {
    data: {
      name: '',
      email: '',
      street: '',
      postalCode: '',
      deliveryMethod: 'Fastest'
    },
    deliveryMethods: ['Fastest', 'Cheapest'],
    errors: {}
  };

  schema = {
    name: Joi.string()
      .min(2)
      .max(40)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .email()
      .required(),
    street: Joi.string()
      .min(5)
      .max(30)
      .required(),
    postalCode: Joi.string()
      .min(1)
      .max(10)
      .required(),
    deliveryMethod: Joi.required()
  };

  onSubmitted = async () => {
    const { history, ingredients, price } = this.props;
    const order = {
      ingredients,
      totalPrice: price,
      ...this.state.data
    };
    try {
      await saveOrder(order);
      toast('Order sent!');
      history.push('/');
    } catch (err) {}
  };

  render() {
    const { ingredients } = this.props;
    return ingredients ? (
      <div className="contact-data">
        <h4>Enter your contact data</h4>
        <form className="contact-data__form" onSubmit={this.formSubmitHandler}>
          {this.renderInput('name', 'Name', 'Enter your name', 'text')}
          {this.renderInput('email', 'Email', 'Enter your email', 'email')}
          {this.renderInput('street', 'Street', 'Enter your street', 'text')}
          {this.renderInput('postalCode', 'Post code', 'Enter your post code', 'text')}
          {this.renderSelect('deliveryMethod', 'Delivery method', this.state.deliveryMethods)}
          <Button
            type="submit"
            styleType="success"
            clicked={this.formSubmitHandler}
            disabled={this.validate()}
          >
            Order now!
          </Button>
        </form>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice
});

export default connect(mapStateToProps)(ContactData);
