import { createStore } from 'redux';

export const ACTION_ADD_MESSAGE = 'ADD_MESSAGE';

const messages = (state = [], action) => {
  switch (action.type) {
    case ACTION_ADD_MESSAGE:
      return [
        ...state,
        action.payload,
      ];
    default: return state;
  }
};

export default createStore(messages);
