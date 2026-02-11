import { BOOK_SLOTS } from "../actions/type";

const initialState = {
  book_slot: []
};

const customerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_SLOTS:
      return {
        ...state,
        book_slot: payload
      };

    default:
      return state;
  }
};

export default customerReducer;
