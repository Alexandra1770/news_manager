import {
  ADD_NEWS, DELETE_NEWS, GET_NEWS, EDIT_NEWS,
} from '../actions/news';
import {filter} from "lodash";

const initialState = {
  year: 2019,
  news: [],
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        news: state.news.concat(action.payload),
      };
    case DELETE_NEWS:
      const newArrayNews = filter(state.news, item => item.id !== action.payload);
      return {
        ...state,
        news: newArrayNews,
      };
    case GET_NEWS:
      return { ...state, news: action.payload };
    case EDIT_NEWS:
      const newsEditNew = state.news.map(item => {
        if(item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, news: newsEditNew};
    default:
      return state;
  }
};

export default news;
