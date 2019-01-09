import { createEpicMiddleware } from 'redux-observable';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import appReducer from './reducer';
import { rootEpic } from './epics';
import { navReducer, navMiddleware } from '../navigator/index';

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    app: appReducer,
    nav: navReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(epicMiddleware, navMiddleware));

export const store = createStore(
    persistedReducer,
    enhancer
)

epicMiddleware.run(rootEpic);
export const persistor = persistStore(store)