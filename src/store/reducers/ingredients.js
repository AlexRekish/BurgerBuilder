import _ from 'lodash';
import Action from '../actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case Action.ADD_INGREDIENT:
      newState.ingredients[action.ingType] += 1;
      newState.totalPrice += action.cost;
      newState.totalPrice = +newState.totalPrice.toFixed(2);
      return {
        ...newState
      };
    case Action.DELETE_INGREDIENT:
      newState.ingredients[action.ingType] -= 1;
      newState.totalPrice -= action.cost;
      newState.totalPrice = +newState.totalPrice.toFixed(2);
      return {
        ...newState
      };
    default:
      return state;
  }
};

export default reducer;
