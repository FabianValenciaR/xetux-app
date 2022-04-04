import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    isAuth: authReducer,
    ui: uiReducer
});

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
