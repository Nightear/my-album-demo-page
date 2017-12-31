import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_COMMENT:
      return [
        ...state,
        Object.assign({}, action.comment)
      ];


      case actionTypes.REMOVE_COMMENT:
      return state.filter((data, i) => i !== action.id);

      

      default:
            return state;
    }
  };
