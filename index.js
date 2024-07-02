const BUY_CAKE = "BUY_CAKE";

//Action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

//Store
const initialState = {
  numOfCakes: 10,
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes,
      };
    default:
      return state
  }
};
