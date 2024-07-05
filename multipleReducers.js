const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

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
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceState = {
  numOfIceCreams: 20,
};

//Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => console.log('currentState:',store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubscribe();
