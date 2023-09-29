import {combineReducers, configureStore} from  "@reduxjs/toolkit";
import User from "./reducers/User";
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import {logger} from 'redux-logger';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

const rootReducer = combineReducers({
    user: User,
    categories: Categories,
    donations: Donations,
})
const configuration = {
  key:'root',
  storage:AsyncStorage,
  version:1,
}
const persistedReducer = persistReducer(configuration,rootReducer);
const store = configureStore({
    reducer: persistedReducer,
     middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck:false,
      });
      //.concat(logger);
    },
  });
export default store;
export const persistor = persistStore(store);
persistor.purge();