import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from "redux-logger";
import thunk from 'redux-thunk'
import latestNewsReducer from './reducers/latestNewsIdReducer'
import singeNewsReducer from './reducers/singleNewsReducer'
import rootComsReducer from './reducers/rootCommentsReducer'

const rootReducer = combineReducers({
    latestNews: latestNewsReducer,
    singleNews: singeNewsReducer,
    rootComs: rootComsReducer
})




const store = createStore(rootReducer, applyMiddleware(logger, thunk))

type IRootReducer = typeof rootReducer
export type AppDispatch = typeof store.dispatch
export type IAppState = ReturnType<IRootReducer>


export default store