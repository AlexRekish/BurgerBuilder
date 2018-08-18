import _ from 'lodash';
import ActionType from '../actions/actions';

const initialState = {
  ingredients: null,
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionType.ADD_INGREDIENT:
      newState.ingredients[action.ingType] += 1;
      newState.totalPrice += action.cost;
      newState.totalPrice = +newState.totalPrice.toFixed(2);
      return {
        ...newState
      };
    case ActionType.DELETE_INGREDIENT:
      newState.ingredients[action.ingType] -= 1;
      newState.totalPrice -= action.cost;
      newState.totalPrice = +newState.totalPrice.toFixed(2);
      return {
        ...newState
      };
    case ActionType.INIT_INGREDIENTS:
      return {
        ...newState,
        ingredients: action.ingredients,
        totalPrice: initialState.totalPrice
      };
    default:
      return state;
  }
};

export default reducer;
