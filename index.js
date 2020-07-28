const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

const initialState = {
  numberOfCake: 10,
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer, applyMiddleware(logger));

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
