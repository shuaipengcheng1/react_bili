import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// 创建store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

// 暴露store
export default store