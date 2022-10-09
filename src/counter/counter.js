import { generate } from "shortid";

// actions types
const INCREMENT_COUNT = "count/increment";
const DECREMENT_COUNT = "count/decrement";
const ADD_AMOUNT_COUNT = "count/add-amount";

// action creators

export const increment = () => ({ type: INCREMENT_COUNT });
export const decrement = () => ({ type: DECREMENT_COUNT });
export const addAmount = (payload) => ({ type: ADD_AMOUNT_COUNT, payload });

const initialState = { count: 0 };

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + 1 };
    case DECREMENT_COUNT:
      return { count: state.count - 1 };
    case ADD_AMOUNT_COUNT:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
