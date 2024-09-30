const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  validateStatus: () => true,
});

axiosInstance.interceptors.request.use((request) => {
  console.log('Request: ', request);
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  console.log('Response: ', response);
  return response;
});

const getPosts = () => axiosInstance.get('/posts');

const postPost = (postData) => axiosInstance.post('/posts', postData);

const getUsers = () => axiosInstance.get('/users');

const postUser = (userData) => axiosInstance.post('/users', userData);

const getUser = (id) => axiosInstance.get(`/users/${id}`);

module.exports = {
  getPosts,
  postPost,
  getUsers,
  postUser,
  getUser,
};
