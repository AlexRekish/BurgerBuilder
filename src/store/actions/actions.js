import getIngredientsActions from './ingredientsAction';

const ActionType = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  DELETE_INGREDIENT: 'DELETE_INGREDIENT',
  INIT_INGREDIENTS: 'INIT_INGREDIENTS'
};

export const Action = {
  ...getIngredientsActions(ActionType)
};
export default ActionType;
