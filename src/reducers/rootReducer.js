import { combineReducers } from 'redux';
import posts from './posts';
import titles from './titles';
export default combineReducers({ posts, titles });
