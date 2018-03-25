import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from './reducers';
import mainSaga from './saga/saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(logger, sagaMiddleware)),
        runSaga: sagaMiddleware.run(mainSaga)
    };
};

export default configureStore;
