import * as actionTypes from "./action";

const initialState = {
  person: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
      };
      return {
        ...state,
        person: state.person.concat(newPerson),
      };

    case actionTypes.REMOVE_PERSON:
      return {
        ...state,
        person: state.person.concat(newPerson),
      };
  }
  return state;
};
export default reducer;