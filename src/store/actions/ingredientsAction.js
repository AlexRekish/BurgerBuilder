import { toast } from 'react-toastify';
import { getIngredients } from '../../services/orderService';

const getIngredientsActions = actionType => ({
  addIngredient: (ingType, cost) => ({ type: actionType.ADD_INGREDIENT, ingType, cost }),
  deleteIngredient: (ingType, cost) => ({ type: actionType.DELETE_INGREDIENT, ingType, cost }),
  initIngredients: () => async dispatch => {
    try {
      const { data: ingredients } = await getIngredients();
      dispatch({ type: actionType.INIT_INGREDIENTS, ingredients });
    } catch (err) {
      toast.error(err.message, err.response);
    }
  }
});

export default getIngredientsActions;
