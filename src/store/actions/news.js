import {getRandomId} from '../../utils';

export const ADD_NEWS = 'ADD_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';
export const GET_NEWS = 'GET_NEWS';
export const EDIT_NEWS = 'EDIT_NEWS';

export const getNews = news => ({
  type: 'GET_NEWS',
  payload: news,
});

export const addNews = values => ({
  type: 'ADD_NEWS',
  payload: {
    ...values,
    id: getRandomId(),
    photo: '',
  },
});

export const deleteNews = id => ({
  type: 'DELETE_NEWS',
  payload: id,
});

export const editNews = values => ({
  type: 'EDIT_NEWS',
  payload: values,
});