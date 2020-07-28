const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
// Middleware
const applyMiddleware = redux.applyMiddleware;
// Logger
const logger = reduxLogger.createLogger();
// Combine Reducer
const combineReducer = redux.combineReducers;

// Actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Initial States
const initialCakeState = {
  numberOfCake: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 10,
};

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

// Combine Reducer
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
//   Store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
