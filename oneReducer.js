const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";

//Action Creators
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};
const buyIceCreams = () => {
  return {
    type: BUY_ICECREAMS,
    info: "Second redux action",
  };
};

//Store
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubscribe();
store.dispatch(buyCake());
