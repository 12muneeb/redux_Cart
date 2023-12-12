import {configureStore} from  '@reduxjs/toolkit'
import RootReducer from '../RootReducer'
import createSagaMiddleware from 'redux-saga'
import SagaData from '../Saga/saga'
const sagaMiddleware = createSagaMiddleware()
 const store = configureStore({
    reducer : RootReducer,
    middleware:() => [sagaMiddleware]
})
sagaMiddleware.run(SagaData)
export default store