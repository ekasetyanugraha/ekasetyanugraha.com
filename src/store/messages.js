import { createStore } from 'redux';
import { getMessages } from '../api/messages';

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

const store = createStore(messages);

/**
 * Component Interfaces
 */
export const sendMessage = payload => {
  store.dispatch({
    type: ACTION_ADD_MESSAGE,
    payload: {
      ...payload,
      time: payload.time || new Date().getTime(),
    },
  });
};

getMessages().then(response => {
  response.data.forEach(sendMessage);
});

export default store;
