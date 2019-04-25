const initialState = {
  isExample: {
    redux: true,
    stuff: false
  }
};

/*
 * Types
 */
const UPDATE = 'EmailManagement/UPDATE';

/*
 * Actions
 */

export function update (example) {
  return { type: UPDATE, example };
}

/*
 * Reducer
 */
export default function ExampleReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE: {
      return {
        ...state,
        isExample: { ...action.example }
      };
    }
    default:
      return state;
  }
}
