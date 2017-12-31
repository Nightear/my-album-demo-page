import * as actionTypes from './actionTypes';

export const createComment = (comment) => {
    return {
      type: actionTypes.CREATE_NEW_COMMENT,
      comment: comment
    }
  };

export const deleteComment = (id) => {
    return {
        type: actionTypes.REMOVE_COMMENT,
        id: id
    }
};



